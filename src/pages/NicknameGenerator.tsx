import { NicknameGenerator as Generator } from "@/components/NicknameGenerator";
import Header from "@/components/Header";
import ExchangePartners from "@/components/ExchangePartners";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NicknameGenerator = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative">
      <MainHeader />
      <div 
        className="fixed inset-0 z-0 floating-bg"
        style={{
          backgroundImage: "url('/lovable-uploads/3f87d291-b65b-45d7-82e4-5ba642301e9e.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.3'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="absolute top-24 left-4 text-white hover:text-primary"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <main className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-[#1A1F2C]/70 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10 p-6 md:p-8 lg:p-12">
            <Header />
            <Generator />
          </main>
        </div>

        <ExchangePartners />
        <Footer />
      </div>
    </div>
  );
};

export default NicknameGenerator;