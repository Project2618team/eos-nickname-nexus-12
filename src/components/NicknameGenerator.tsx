import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy } from "lucide-react";

const generateEOSNickname = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz12345';
  let result = '';
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const NicknameGenerator = () => {
  const [nickname, setNickname] = useState("");

  const handleGenerate = () => {
    const newNickname = generateEOSNickname();
    setNickname(newNickname);
    toast.success("New nickname generated!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(nickname);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold gradient-text">EOS Nickname Generator</h2>
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
          className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity"
        >
          Generate Nickname
        </Button>
      </div>
    </div>
  );
};