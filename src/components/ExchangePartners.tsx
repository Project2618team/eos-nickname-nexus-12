import React from 'react';

const ExchangePartners = () => {
  const exchanges = [
    { name: 'Binance', logo: '/lovable-uploads/34e51245-ce38-4b95-9c37-9bcc7ea4b073.png', invert: false },
    { name: 'Bybit', logo: '/lovable-uploads/4cea30fb-81ac-4c66-909f-0174b427d876.png', invert: true },
    { name: 'MEXC', logo: '/lovable-uploads/f304782d-bc02-4dbf-9cef-e320b29237be.png', invert: true },
    { name: 'Bitget', logo: '/lovable-uploads/4e4ae1f7-963e-4795-93c9-5f143c4857b3.png', invert: true },
    { name: 'OKX', logo: '/lovable-uploads/74835000-7a7e-44a0-a75f-a9bd9fb664d2.png', invert: true },
    { name: 'Crypto.com', logo: '/lovable-uploads/5783acd5-000c-4028-8758-e6066f266ea7.png', invert: true },
  ];

  return (
    <div className="w-full bg-[#1A1F2C]/90 backdrop-blur-md py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-muted-foreground">Supported Exchanges</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] rounded-full mx-auto mt-2" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {exchanges.map((exchange) => (
            <div 
              key={exchange.name}
              className="w-32 h-16 flex items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={exchange.logo} 
                alt={exchange.name} 
                className={`w-full h-full ${exchange.invert ? 'filter brightness-0 invert' : ''} opacity-80 hover:opacity-100 transition-opacity`}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangePartners;