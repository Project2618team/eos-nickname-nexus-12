import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import nicknames from "../data/nicknames.json";

const generateEOSNickname = (): string => {
  // Get a random nickname from the pre-generated list
  const availableNicknames = nicknames.nicknames;
  return availableNicknames[Math.floor(Math.random() * availableNicknames.length)];
};

export const NicknameGenerator = () => {
  const [nickname, setNickname] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    const newNickname = generateEOSNickname();
    setNickname(newNickname);
    setIsGenerated(true);
    toast.success("New nickname generated!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(nickname);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold gradient-text">EOS AIRDROP 2025</h2>
        <p className="text-muted-foreground">
          Generate a unique 12-character EOS nickname using a-z and 1-5
        </p>
      </div>
      
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