import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;