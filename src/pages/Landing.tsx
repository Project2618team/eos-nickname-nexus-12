import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative">
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
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/698ad378-426a-49de-a090-159f3d48e61a.png" 
              alt="EOS Logo" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-[#9b87f5]">SEASON 1</p>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              MASSIVE AIRDROP
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            GET AN AIRDROP FROM 1 MILLION OF EOS TOKENS!
          </h2>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/airdrop')}
              className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto w-64"
            >
              Read More
            </Button>
            
            <p className="text-sm text-gray-400">
              Limited time offer • First come, first served
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;