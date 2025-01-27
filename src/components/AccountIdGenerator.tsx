import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Loader2 } from "lucide-react";

interface AccountIdGeneratorProps {
  nickname: string;
  isLoading: boolean;
  onGenerate: () => void;
  onCopy: () => void;
}

/**
 * Handles the generation and display of the Account ID
 * Including the copy functionality
 */
const AccountIdGenerator: FC<AccountIdGeneratorProps> = ({
  nickname,
  isLoading,
  onGenerate,
  onCopy,
}) => {
  return (
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
            onClick={onCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <Button 
        onClick={onGenerate}
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
    </div>
  );
};

export default AccountIdGenerator;