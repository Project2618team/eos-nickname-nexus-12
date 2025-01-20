import React from 'react';

const ExchangePartners = () => {
  const exchanges = [
    { name: 'Binance', logo: '/lovable-uploads/27fa3e06-5ce2-4f93-bcca-f05bb55465f5.png', invert: false },
    { name: 'Bybit', logo: '/lovable-uploads/0f51f26b-9180-4125-9616-8b9414bfa945.png', invert: false },
    { name: 'MEXC', logo: '/lovable-uploads/fafb7b62-8c3c-4592-87da-51b5ced30a60.png', invert: false },
    { name: 'Bitget', logo: '/lovable-uploads/bce970da-9d0c-4150-965c-d714734bf57b.png', invert: false },
    { name: 'OKX', logo: '/lovable-uploads/1273ce5d-adb5-41bb-af62-73acceeb8b10.png', invert: false },
    { name: 'Crypto.com', logo: '/lovable-uploads/5606e4ed-f1b1-4226-85ee-9184b3f2e978.png', invert: false },
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
                className={`w-full h-full object-contain transition-opacity brightness-0 invert`}
                style={{ 
                  objectFit: 'contain',
                  padding: '2px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangePartners;