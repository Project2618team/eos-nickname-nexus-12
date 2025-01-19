import { NicknameGenerator } from "@/components/NicknameGenerator";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/3f87d291-b65b-45d7-82e4-5ba642301e9e.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.3'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <main className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-[#1A1F2C]/70 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 p-6 md:p-8 lg:p-12">
            <div className="text-center mb-12 space-y-4">
              <div className="mb-8">
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
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full" />
                  <span className="text-sm text-muted-foreground">Official EOS Network Airdrop</span>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] rounded-full" />
                </div>
              </div>
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

        {/* Partners Section */}
        <div className="w-full bg-[#1A1F2C]/90 backdrop-blur-md py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold text-muted-foreground">Supported Exchanges</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full mx-auto mt-2" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <img src="/lovable-uploads/a607b5b4-8e32-4550-ab9f-31f98651c7c6.png" alt="Binance" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/4cea30fb-81ac-4c66-909f-0174b427d876.png" alt="Bybit" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/f304782d-bc02-4dbf-9cef-e320b29237be.png" alt="MEXC" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/4e4ae1f7-963e-4795-93c9-5f143c4857b3.png" alt="Bitget" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/74835000-7a7e-44a0-a75f-a9bd9fb664d2.png" alt="OKX" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/5783acd5-000c-4028-8758-e6066f266ea7.png" alt="Crypto.com" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-[#151820] py-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 EOS Network. All rights reserved.
            </p>
            <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;