import { Mail, Globe, Send } from "lucide-react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/698ad378-426a-49de-a090-159f3d48e61a.png" 
            alt="EOS Logo" 
            className="w-8 h-8"
          />
          <span className="text-white font-semibold text-lg">EOS FOUNDATION</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="text-white/70 hover:text-white transition-colors"
          >
            <Send size={20} />
          </a>
          <a 
            href="#" 
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a 
            href="#" 
            className="text-white/70 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
          <a 
            href="#" 
            className="text-white/70 hover:text-white transition-colors"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;