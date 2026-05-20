import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/918921417571?text=Hi%20Time%20for%20Kids%20Wayanad,%20I'm%20interested%20in%20booking%20a%20therapy%20consultation%20appointment%20for%20my%20child.";

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Pulse Outer Rings */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 scale-110"></div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 rounded-full shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline font-sans text-sm font-bold tracking-wide">
          Chat with Therapists
        </span>
      </a>
    </div>
  );
}
