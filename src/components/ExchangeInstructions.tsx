import { type FC } from "react";

type Step = {
  image: string;
  description: string;
  title: string;
};

interface ExchangeInstructionsProps {
  steps: Step[];
}

/**
 * Displays the exchange-specific instructions and screenshots
 * for the airdrop process
 */
const ExchangeInstructions: FC<ExchangeInstructionsProps> = ({ steps }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <h3 className="text-xl font-semibold mb-4">Follow these steps to complete your airdrop registration:</h3>
      {steps.map((step, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-lg font-medium mb-2">{step.title}</h4>
          <p className="text-gray-300 mb-3">{step.description}</p>
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
        </p>
      </div>
    </div>
  );
};

export default ExchangeInstructions;