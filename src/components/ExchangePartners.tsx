import React from 'react';

const ExchangePartners: React.FC = () => {
  return (
    <section className="w-full bg-[#1A1F2C]/90 backdrop-blur-md py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Supported Exchanges
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full mx-auto mt-2" />
        </div>
        
        <div className="partners-img-container h-16 overflow-hidden">
          <div 
            className="partners-img"
            style={{
              backgroundImage: "url('/lovable-uploads/a4a4809b-d132-4025-b405-7e20d2878ed2.png')",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExchangePartners;