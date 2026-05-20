import React from 'react';
import { Phone, CalendarCheck, MapPin, Award, Star, ArrowRight } from 'lucide-react';
import { GENERATED_IMAGES } from '../data';

interface HeroSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function HeroSection({ setCurrentPage }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-brand-blue-50/50 via-white to-white py-12 md:py-24 overflow-hidden">
      
      {/* Decorative colored blobs for a playful feel */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-200/40 rounded-full filter blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slogan and Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Trust Badge / Milestone Tag */}
            <div className="inline-flex items-center space-x-2 bg-brand-blue-50 border border-brand-blue-100 px-4 py-1.5 rounded-full text-brand-blue-800">
              <Award className="w-4 h-4 text-brand-blue-500" />
              <span className="text-xs font-semibold tracking-wider uppercase">Wayanad's Leading Pediatric Care Hub</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight tracking-tight">
              Welcome to <span className="text-brand-blue-600">Time for Kids</span> <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-blue-600 via-emerald-600 to-amber-500 bg-clip-text text-transparent">OT & CRC Wayanad</span>
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                Empowering children's growth through expert Occupational Therapy, Child Rehabilitation, and multidisciplinary care.
              </p>
              <p className="text-base text-gray-600 italic">
                “Helping children in Wayanad thrive with personalized, compassionate therapy.”
              </p>
              <div className="text-lg font-display font-medium text-brand-blue-800 border-l-4 border-brand-pastel-yellow pl-3 italic">
                "Empowering Every Child's Unique Journey – One Milestone at a Time"
              </div>
            </div>

            {/* Quick Metrics Block */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-medium text-gray-600">
              <div 
                className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl shadow-xs border border-gray-100 cursor-pointer hover:bg-gray-50"
                onClick={() => setCurrentPage('contact')}
              >
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Muttil North, Wayanad</span>
              </div>
              <div 
                className="flex items-center space-x-1.5 bg-white px-3 py-2 rounded-xl shadow-xs border border-gray-100 cursor-pointer"
                onClick={() => setCurrentPage('gallery')}
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-800 font-mono">4.5+ Rating</span>
                <span className="text-gray-500">(112+ families helped)</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => setCurrentPage('bookings')}
                id="hero-booking-cta"
                className="flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-4 rounded-2xl text-base font-bold shadow-lg shadow-brand-blue-100 scale-100 hover:scale-102 hover:shadow-xl transition-all cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                id="hero-about-cta"
                className="flex items-center justify-center space-x-2 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 text-amber-800 px-6 py-4 rounded-2xl text-base font-bold transition-all cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </button>
            </div>

            {/* Click to Call Dial */}
            <div className="pt-2">
              <a 
                href="tel:08921417571" 
                id="hero-phone-cta-link"
                className="inline-flex items-center space-x-2.5 text-gray-800 hover:text-brand-blue-600 font-mono bg-amber-50 border border-yellow-100/70 py-2 px-4 rounded-xl text-sm"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-green-500 animate-pulse"></span>
                <Phone className="w-4 h-4 text-brand-blue-500" />
                <span className="font-semibold">Call to Book: 089214 17571</span>
              </a>
            </div>

          </div>

          {/* Graphical/Image Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 select-none">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Playful Backdrop Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-100 via-brand-yellow/30 to-brand-green-100 h-full w-full rounded-[2.5rem] transform rotate-3 scale-105 border-4 border-dashed border-white shadow-xl"></div>
              
              {/* Main Photo Card Frame */}
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100/50 overflow-hidden transform group hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={GENERATED_IMAGES.hero}
                  alt="Time for Kids pediatric therapy session in Wayanad with lush scenic environment"
                  className="w-full h-72 sm:h-96 object-cover rounded-[1.8rem]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded floating label */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold font-mono">✓</div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 leading-tight">Comforting Environment</p>
                      <p className="text-[10px] text-gray-500">Designed to reduce pediatric anxiety cues</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wayanad Nature highlight badge */}
              <div className="absolute -top-6 -right-4 bg-brand-green-50 px-4 py-2 rounded-2xl border border-brand-green-100 shadow-lg shrink-0 flex items-center space-x-1.5 animate-soft-pulse">
                <span className="text-yellow-600 text-lg">🌱</span>
                <span className="text-[11px] font-bold text-brand-green-600 uppercase tracking-widest leading-none">Fresh Wayanad Air</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
