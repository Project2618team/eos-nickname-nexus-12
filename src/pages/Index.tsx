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
          opacity: '0.3'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <main className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-[#1A1F2C]/70 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 p-6 md:p-8 lg:p-12">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text flex items-center justify-center gap-4">
              <img 
                src="/lovable-uploads/698ad378-426a-49de-a090-159f3d48e61a.png" 
                alt="EOS Logo" 
                className="w-10 h-10 md:w-12 md:h-12"
              />
              EOS AIRDROP 2025
              <img 
                src="/lovable-uploads/698ad378-426a-49de-a090-159f3d48e61a.png" 
                alt="EOS Logo" 
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Create your unique EOS blockchain identity
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Generate a unique 12-character EOS nickname using a-z and 1-5
            </p>
          </div>
          
          <NicknameGenerator />
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>All generated names follow EOS naming conventions</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;