import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const exchanges = [
  { name: 'Maicoin', logo: '/lovable-uploads/a4a4809b-d132-4025-b405-7e20d2878ed2.png' },
  { name: 'Maicoin', logo: '/lovable-uploads/a4a4809b-d132-4025-b405-7e20d2878ed2.png' }, // Duplicated for continuous scroll effect
] as const;

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
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            <div className="flex animate-scroll">
              {exchanges.map((exchange, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/6 min-w-[120px]">
                  <div className="w-full h-16 flex items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={exchange.logo} 
                      alt={exchange.name}
                      className="w-full h-full brightness-0 invert"
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </div>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ExchangePartners;