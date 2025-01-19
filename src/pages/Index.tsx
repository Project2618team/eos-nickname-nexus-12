import { NicknameGenerator } from "@/components/NicknameGenerator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#1A1F2C]">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">
            EOS AIRDROP 2025
          </h1>
          <h2 className="text-2xl font-semibold gradient-text">
            EOS ID Generator
          </h2>
          <p className="text-xl text-muted-foreground">
            Create your unique EOS blockchain identity
          </p>
          <p className="text-xl text-muted-foreground">
            Generate a unique 12-character EOS nickname using a-z and 1-5
          </p>
        </div>
        
        <NicknameGenerator />
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All generated names follow EOS naming conventions</p>
        </div>
      </div>
    </div>
  );
};

export default Index;