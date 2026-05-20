import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Globe, Star } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleFooterLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo Brand presentation block */}
          <div className="space-y-4">
            <div 
              onClick={() => handleFooterLinkClick('home')}
              className="flex items-center space-x-2.5 cursor-pointer group select-none"
              id="footer-brand-logo"
            >
              <div className="flex items-center space-x-2 bg-gray-800/85 hover:bg-gray-800 px-3.5 py-1.5 rounded-2xl border border-gray-800 transition-all duration-200">
                <span className="font-display font-black italic tracking-wide text-base text-white">Time</span>
                
                {/* Cute orange "for" badge with ears */}
                <div className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#ff7a00] shrink-0">
                  {/* Left Ear */}
                  <span className="absolute -top-[1.5px] -left-[1.5px] w-2 h-2 rounded-full bg-[#ff7a00]"></span>
                  {/* Right Ear */}
                  <span className="absolute -top-[1.5px] -right-[1.5px] w-2 h-2 rounded-full bg-[#ff7a00]"></span>
                  {/* Text "for" */}
                  <span className="relative z-10 font-sans font-black italic text-[8px] text-white tracking-tight leading-none">for</span>
                </div>
                
                <span className="font-sans font-extrabold tracking-tight text-base text-cyan-400">Kids</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
              Time for Kids Occupational Therapy &amp; Child Rehabilitation Centre Muttil North is dedicated to helping developmental needs kids with compassion and scientific precision.
            </p>

            {/* Google review badge mockup in footer */}
            <div className="flex items-center space-x-2 bg-gray-800 p-2.5 rounded-xl border border-gray-700/50 w-fit">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold text-gray-300">4.5 Rating (112 reviews)</span>
            </div>
          </div>

          {/* Quick Links navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Clinic Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {[
                { id: 'home', label: 'Welcome Portal' },
                { id: 'about', label: 'Our Story & Mission' },
                { id: 'services', label: 'Specialized Services' },
                { id: 'team', label: 'Meet the Specialists' },
                { id: 'gallery', label: 'Events & Image Collage' },
                { id: 'contact', label: 'Directions & Timing' },
                { id: 'bookings', label: 'My booked appointments' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleFooterLinkClick(item.id)}
                    className="hover:text-brand-blue-500 transition-colors py-0.5 cursor-pointer text-left block w-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details quick references */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Location &amp; Desk
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Muttil North, Kerala 673122,<br />
                  Wayanad Region, India.
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-blue-500 shrink-0" />
                <a href="tel:08921417571" className="hover:text-white font-mono leading-none">
                  089214 17571
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-green-500 shrink-0" />
                <a href="mailto:timeforkids.wayanad@gmail.com" className="hover:text-white leading-none">
                  timeforkids.wayanad@gmail.com
                </a>
              </div>

              <div className="pt-2 border-t border-gray-800">
                <p className="text-[10px] text-gray-400 font-semibold">Clinics operational:</p>
                <p className="text-[10px] text-gray-500 mt-1">Monday – Saturday (closes 6:30 PM)</p>
              </div>

            </div>
          </div>

          {/* Socials & Policies */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Social Handles
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Follow our community of parenting techniques, therapy results, and developmental activities on social channels.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-colors text-gray-400"
                title="Facebook Link"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/timeforkids.crc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 hover:text-white rounded-xl flex items-center justify-center transition-colors text-gray-400"
                title="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 hover:text-white rounded-xl flex items-center justify-center transition-colors text-gray-400"
                title="Google My Business link"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            <div className="text-[10px] text-gray-500 leading-relaxed pt-2">
              *All child photographs featured on the website are recorded under verified parent consent clearances.
            </div>

          </div>

        </div>

        {/* Bottom copyright bars */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Time for Kids Occupational Therapy &amp; Child Rehab Centre (CRC) Wayanad. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-gray-500 text-[11px]">
            <span className="hover:text-gray-300">Privacy Protocols</span>
            <span>·</span>
            <span className="hover:text-gray-300">Clinical Safeguards</span>
            <span>·</span>
            <span className="hover:text-gray-300">Muttil North Post</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
