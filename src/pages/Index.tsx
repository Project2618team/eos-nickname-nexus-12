import { NicknameGenerator } from "@/components/NicknameGenerator";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/3f87d291-b65b-45d7-82e4-5ba642301e9e.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.3' // This creates 70% transparency
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 bg-[#1A1F2C]/70">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold gradient-text">
              EOS AIRDROP 2025
            </h1>
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
    </div>
  );
};

export default Index;