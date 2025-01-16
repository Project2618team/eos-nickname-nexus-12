import { NicknameGenerator } from "@/components/NicknameGenerator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#1A1F2C]">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">
            EOS Name Generator
          </h1>
          <p className="text-xl text-muted-foreground">
            Create your unique EOS blockchain identity
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