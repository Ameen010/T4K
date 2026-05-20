import React, { useState } from 'react';
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Specialized Services' },
    { id: 'team', label: 'Our Specialists' },
    { id: 'gallery', label: 'Events & Gallery' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'bookings', label: 'My Appointments' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Representation block */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2.5 cursor-pointer group select-none"
            id="header-logo"
          >
            <div className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100/70 px-3 py-1.5 rounded-2xl border border-slate-100 transition-all duration-300">
              <span className="font-display font-black italic tracking-wide text-lg text-slate-800">Time</span>
              
              {/* Cute orange "for" badge with ears */}
              <div className="relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#ff7a00] shrink-0">
                {/* Left Ear */}
                <span className="absolute -top-[2px] -left-[2px] w-2.5 h-2.5 rounded-full bg-[#ff7a00]"></span>
                {/* Right Ear */}
                <span className="absolute -top-[2px] -right-[2px] w-2.5 h-2.5 rounded-full bg-[#ff7a00]"></span>
                {/* Text "for" */}
                <span className="relative z-10 font-sans font-black italic text-[9px] text-white tracking-tight leading-none">for</span>
              </div>
              
              <span className="font-sans font-extrabold tracking-tight text-lg text-cyan-600">Kids</span>
            </div>
            
            <div className="hidden xs:block border-l border-slate-200 pl-2.5">
              <span className="block text-[10px] font-black text-slate-800 uppercase tracking-wider leading-none">CRC &amp; OT Centre</span>
              <span className="block text-[9px] text-gray-500 font-sans mt-0.5 leading-none">Muttil North, Wayanad</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 select-none">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue-50 text-brand-blue-600 shadow-sm font-semibold'
                      : 'text-gray-600 hover:text-brand-blue-500 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Leftside Quick CTA Trigger Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a 
              href="tel:08921417571" 
              id="header-phone-btn"
              className="flex items-center space-x-2 text-gray-700 hover:text-brand-blue-600 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-blue-500" />
              <span className="text-xs font-mono font-medium">089214 17571</span>
            </a>
            
            <button
              onClick={() => handleNavClick('bookings')}
              id="header-book-btn"
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 hover:from-brand-blue-600 hover:to-brand-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-brand-blue-100 scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a 
              href="tel:08921417571" 
              className="sm:hidden flex items-center justify-center w-10 h-10 text-brand-blue-600 bg-brand-blue-50 rounded-xl"
              title="Call Time for Kids OT & CRC"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-100 text-gray-700 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-blue-50 bg-white shadow-inner animate-fade-in">
          <div className="px-3 pt-4 pb-6 space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-blue-500 text-white font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue-500'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2 px-4">
              <a 
                href="tel:08921417571" 
                className="flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl border border-gray-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-brand-blue-500" />
                <span>Call Center: 089214 17571</span>
              </a>
              <button
                onClick={() => handleNavClick('bookings')}
                className="flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white py-3 rounded-xl text-sm font-bold shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
