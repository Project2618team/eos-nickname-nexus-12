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

const exchangeScreenshots: Record<string, string[]> = {
  binance: [
    "/lovable-uploads/ad0bfbfd-d042-46b4-b511-167e03568f6c.png", // stp1
    "/lovable-uploads/6b35cb0b-e305-4764-98b9-43bbdbba5749.png", // stp2
    "/lovable-uploads/0a23baf4-3ab1-4fc9-bfe2-f0f84a423203.png", // stp3
    "/lovable-uploads/1cfbbfa7-c86a-4c45-a922-66d4a4321dcf.png", // stp4
    "/lovable-uploads/ad3f60a5-6683-48e3-8ec3-26a2f83a5412.png", // stp5
    "/lovable-uploads/526e6d64-1ffb-42e2-900e-3d0893d26546.png", // stp6
    "/lovable-uploads/c18d244a-d76f-4531-94c6-bc0fa1a731d8.png"  // stp7
  ],
  bybit: [],
  mexc: [],
  general: []
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
    if (!selectedExchange) return [];
    if (selectedExchange === 'other') {
      return exchangeScreenshots.bybit;
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

        {isGenerated && selectedExchange && (
          <div className="mt-8 space-y-4 animate-fade-in">
            {getExchangeScreenshots().map((screenshot, index) => (
              <img 
                key={index}
                src={screenshot} 
                alt={`Step ${index + 1}`}
                className="rounded-lg border border-muted mt-2 w-full"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
