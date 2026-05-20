import React, { useState } from 'react';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import BookingManager from './components/BookingManager';
import Footer from './components/Footer';

import { SERVICES_DATA, TEAM_DATA, TESTIMONIALS_DATA, GALLERY_DATA, GENERATED_IMAGES } from './data';
import { Sparkles, Heart, Trophy, UserCheck, Star, CalendarDays, ArrowRight, CornerDownRight, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800 antialiased overflow-x-hidden selection:bg-brand-blue-500 selection:text-white">
      
      {/* Top Banner with Quick announcements */}
      <div className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-600 text-white text-[11px] sm:text-xs font-semibold py-2 px-4 shadow-inner text-center flex flex-col sm:flex-row items-center justify-center gap-2 select-none">
        <span className="flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-brand-pastel-yellow fill-amber-300 stroke-none" />
          <span>Wayanad's Trusted Multidisciplinary Pediatric Center</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <a href="tel:08921417571" className="hover:underline font-mono">
          Call for Free Milestone Check: +91 89214 17571
        </a>
      </div>

      {/* Main Bar Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Subpage Contents Router Wrapper in smooth transition animations */}
      <main className="flex-1">
        
        {/* HOMEPAGE LAYOUT STRUCTURE */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* 1. Hero Block Showcase */}
            <HeroSection setCurrentPage={navigateToPage} />

            {/* 2. About Us Compact Teaser */}
            <section className="py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Text representation */}
                  <div className="space-y-6 text-left">
                    <span className="text-[10px] bg-brand-green-50 text-brand-green-600 border border-brand-green-100 font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      Who We Are
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
                      We help kids thrive on their own unique journeys.
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-sans text-sm sm:text-base">
                      Time for Kids OT &amp; CRC Wayanad is a dedicated pediatric rehabilitation facility situated in Muttil North, Kerala. We provide gold-standard, specialized Occupational Therapy, Speech &amp; Communication support, behavioral training, and physical therapy in a warm, child-centered care environment designed just like a playground.
                    </p>
                    
                    {/* Tickmarks list */}
                    <ul className="space-y-3 text-xs sm:text-sm font-semibold text-gray-700">
                      {[
                        'Evidence-based clinical pediatric programs & exercises.',
                        'Highly certified active Occupational therapists & psychologists.',
                        'Active family collaboration & structured home homework guidelines.'
                      ].map((tick, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CornerDownRight className="w-4 h-4 text-brand-blue-500 shrink-0" />
                          <span>{tick}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => navigateToPage('about')}
                        className="inline-flex items-center space-x-2 bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-800 font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer"
                      >
                        <span>Learn More About Us</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Teaser image illustration */}
                  <div className="relative select-none order-first lg:order-last">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-100 via-brand-yellow/20 to-brand-green-100 rounded-3xl transform rotate-2"></div>
                    <img
                      src={GENERATED_IMAGES.galleryCelebration}
                      alt="Happy children celebrating events in Wayanad center"
                      className="w-full h-80 object-cover rounded-3xl relative z-10 border border-gray-100 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                </div>
              </div>
            </section>

            {/* 3. Our Services Cards Preview Teaser */}
            <section className="py-16 md:py-24 bg-brand-blue-50/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <span className="font-display font-medium text-xs uppercase tracking-widest text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-full">
                  Specialized Disciplines
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 mt-4">
                  What Pediatric Programs Do We Treat?
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mt-2.5">
                  We look at sensory triggers, muscle coordinates, pronunciation levels and fine actions to generate individualized maps. See our main clinical areas:
                </p>

                {/* Grid representation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
                  {SERVICES_DATA.slice(0, 4).map((service) => (
                    <div
                      key={service.id}
                      onClick={() => navigateToPage('services')}
                      className="bg-white rounded-3xl p-6 border border-gray-100 shadow-3xs cursor-pointer hover:shadow-lg transition-all"
                    >
                      <h3 className="font-display font-bold text-base text-gray-900 mb-2 truncate">
                        {service.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="text-[10px] uppercase font-bold text-brand-blue-600">
                        View clinical details &rarr;
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 select-none">
                  <button
                    onClick={() => navigateToPage('services')}
                    className="inline-flex items-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold text-xs py-3.5 px-7 rounded-2xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Explore All 8 Specialized Therapies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </section>

            {/* 4. Why Choose Us (Multidisciplinary standard specs) */}
            <section className="py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
                  <span className="text-[10px] bg-amber-50 text-amber-700 font-bold px-3 py-1 rounded-full uppercase">Why Choose Our Rehabilitation Center</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-950">A Hub of Excellence Built for Thriving Kids</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
                  
                  <div className="bg-brand-blue-50/20 p-5 rounded-2xl border border-brand-blue-100/50 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-white border border-brand-blue-105 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-brand-blue-500" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-gray-900 leading-tight">Family Centered</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      We involve parents in every session cycle, sharing physical milestone diaries and customized home sensory guides.
                    </p>
                  </div>

                  <div className="bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100/50 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-white border border-emerald-105 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-brand-green-500" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-gray-900 leading-tight">Highly Experienced</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Our certified lead therapists have over 15+ combined years of neuro-rehabilitation practice.
                    </p>
                  </div>

                  <div className="bg-amber-50/20 p-5 rounded-2xl border border-yellow-100/50 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-white border border-yellow-105 flex items-center justify-center">
                        <Star className="w-5 h-5 text-amber-500" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-gray-900 leading-tight">4.5★ Rated Rating</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Represented by more than 112+ reviews on Google Maps business logs from satisfied parents.
                    </p>
                  </div>

                  <div className="bg-purple-50/20 p-5 rounded-2xl border border-purple-100/50 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-white border border-purple-105 flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-purple-500" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-gray-900 leading-tight">Real-World Skills</h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Focus on functional independence — dress changes, reading, chewing foods, self-care, and standard writing coordinate skills.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* 5. Testimonial Teaser block */}
            <section className="py-16 bg-gray-50 border-t border-b border-gray-100 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs bg-brand-blue-50 text-brand-blue-700 px-3.5 py-1 rounded-full uppercase tracking-widest font-mono font-bold">
                      Family Endorsements
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-gray-950 leading-tight">
                      Hear What Parents Say About Our Work!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-sans font-medium">
                      These reviews are gathered directly from Google Maps reviews, celebrating milestone improvements.
                    </p>
                    <div className="pt-2">
                      <button 
                        onClick={() => navigateToPage('gallery')}
                        className="text-xs font-bold text-brand-blue-600 hover:underline inline-flex items-center space-x-1"
                      >
                        <span>Read all parents testimonials</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>

                  {/* Horizontal scroll grid card */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TESTIMONIALS_DATA.slice(0, 2).map((rev) => (
                      <div key={rev.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-3xs flex flex-col justify-between">
                        <p className="text-xs text-gray-600 italic leading-relaxed">
                          "{rev.text}"
                        </p>
                        <div className="mt-4 flex items-center space-x-2 pt-3 border-t">
                          <div className="w-8 h-8 rounded-full bg-brand-blue-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {rev.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900 leading-none">{rev.author}</p>
                            <p className="text-[10px] text-gray-400 mt-1">Verified Mother / Father</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>

            {/* 6. Contact and Booking CTA */}
            <section className="py-16 md:py-24 bg-white select-none text-center">
              <div className="max-w-4xl mx-auto px-4 space-y-6">
                <span className="text-xs bg-emerald-50 border border-brand-green-150 text-brand-green-600 px-3 py-1 rounded-full uppercase font-bold">Early Action Matters</span>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">Let's Secure Your Child's Future Success!</h3>
                <p className="text-sm sm:text-base text-gray-620 leading-relaxed">
                  Early therapeutic intervention during standard brains plasticity phases minimizes long-term adaptive challenges. Fill out our Intake Card or Call.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-3">
                  <button
                    onClick={() => navigateToPage('bookings')}
                    className="w-full sm:w-auto bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold py-3.5 px-8 rounded-2xl shadow-md transition-all cursor-pointer text-sm"
                  >
                    Intake Booking Calendar
                  </button>
                  <a
                    href="tel:08921417571"
                    className="w-full sm:w-auto text-center border border-gray-250 hover:bg-gray-50 text-gray-800 font-bold py-3.5 px-6 rounded-2xl text-xs transition-colors"
                  >
                    Call: 089214 17571
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ABOUT US FULL PAGE */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <AboutSection setCurrentPage={navigateToPage} />
          </div>
        )}

        {/* SERVICES / DEPARTMENTS FULL TABBED PAGE */}
        {currentPage === 'services' && (
          <div className="animate-fade-in">
            <ServicesSection setCurrentPage={navigateToPage} />
          </div>
        )}

        {/* OUR TEAM FULL PAGE */}
        {currentPage === 'team' && (
          <div className="animate-fade-in">
            <TeamSection setCurrentPage={navigateToPage} />
          </div>
        )}

        {/* GALLERY / EVENTS FULL MASONRY LIGHTBOX PAGE */}
        {currentPage === 'gallery' && (
          <div className="animate-fade-in">
            <GallerySection />
            <ReviewsSection />
          </div>
        )}

        {/* CONTACT US FULL PAGE */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}

        {/* APPOINTMENT BOOKING MANAGER */}
        {currentPage === 'bookings' && (
          <div className="animate-fade-in">
            <BookingManager />
          </div>
        )}

      </main>

      {/* Pulsing Floating WhatsApp Chat Box */}
      <FloatingWhatsApp />

      {/* Multidisciplinary Clean Footer */}
      <Footer setCurrentPage={navigateToPage} />

    </div>
  );
}
