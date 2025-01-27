import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy, Loader2 } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
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

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in px-4 sm:px-0">
      <div className="space-y-6">
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
          <div className="mt-8 space-y-4 animate-fade-in">
            {/* Screenshots will be added here later as requested */}
          </div>
        )}
      </div>
    </div>
  );
};
