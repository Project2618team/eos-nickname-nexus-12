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
    "/lovable-uploads/038ad505-d425-4155-a833-87820bebeb68.png", // Step1
    "/lovable-uploads/24c0ba82-d366-4091-bc32-bbf246d23794.png", // Step2
    "/lovable-uploads/e236a952-0949-46ba-ac3c-1030c6b2f95a.png", // Step3
    "/lovable-uploads/f4cd2fd8-b00b-4acd-b7de-607488a9f957.png", // Step4
    "/lovable-uploads/92dab9fb-d531-46a8-a8d4-7e7f30d5852e.png", // Step5
    "/lovable-uploads/c0cb05b8-3ca5-4b9a-aa4b-6d218e501324.png", // Step6
    "/lovable-uploads/6026035c-826e-460a-a90d-2130ddbeaa30.png"  // Step7
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
