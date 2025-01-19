import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;