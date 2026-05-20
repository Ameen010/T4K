import React, { useState } from 'react';
import { Image, Filter, ChevronLeft, ChevronRight, X, Calendar, ArrowUpRight } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'celebrations' | 'therapy' | 'team'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered gallery data
  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  // Lightbox handlers
  const openLightbox = (indexInFiltered: number) => {
    // Find absolute index in absolute gallery list
    const selectedItem = filteredItems[indexInFiltered];
    const absoluteIndex = GALLERY_DATA.findIndex(item => item.id === selectedItem.id);
    setLightboxIndex(absoluteIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? GALLERY_DATA.length - 1 : prev - 1;
    });
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === GALLERY_DATA.length - 1 ? 0 : prev + 1;
    });
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_DATA[lightboxIndex] : null;

  return (
    <section className="py-16 md:py-24 bg-brand-blue-50/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full">
            Moments of Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
            Events, Workshops &amp; Therapy Gallery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Take a look at childhood growth celebrations, parent-training workshops, pediatric therapy sessions, and our annual events at Muttil North, Wayanad.
          </p>
        </div>

        {/* Filter Toolbar Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 select-none">
          {[
            { id: 'all', label: 'All Moments' },
            { id: 'celebrations', label: 'Celebrations & Events' },
            { id: 'therapy', label: 'Therapy Sessions' },
            { id: 'team', label: 'Team Workshops' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === btn.id
                  ? 'bg-brand-blue-500 text-white shadow-md'
                  : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-105'
              }`}
            >
              {btn.id === 'all' && <Image className="w-3.5 h-3.5" />}
              <span>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry or Grid list representation using <img> on referrerPolicy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-3xl p-3 border border-gray-100 shadow-3xs cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden text-left"
              id={`gallery-item-${item.id}`}
            >
              <div className="aspect-4/3 overflow-hidden rounded-2xl relative bg-gray-50">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-700 text-[9px] font-bold uppercase px-2.5 py-1 rounded-md shadow-xs">
                  {item.category}
                </span>

                {/* Hover zoom icon overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Caption and Date */}
              <div className="p-3 pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-[10px] text-gray-500">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  <span className="font-mono">
                    {new Date(item.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-medium leading-relaxed font-sans line-clamp-2">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Empty placeholder states */}
        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-250 max-w-md mx-auto my-10">
            <p className="text-gray-400 text-sm">No photographs added in this category yet.</p>
          </div>
        )}

        {/* BEFORE & AFTER Success Case Stories Box preview */}
        <div className="mt-16 bg-white rounded-[2rem] p-6 md:p-10 border border-gray-100 shadow-xs max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green-50 rounded-bl-full pointer-events-none"></div>

          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green-600">Anonymized Growth Journeys</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-950">Aesthetic Growth Stories</h3>
            </div>

            <div className="space-y-5">
              <div className="p-5 bg-gray-50 rounded-2xl hover:bg-gray-50/80 transition-colors border border-gray-100">
                <blockquote className="text-xs sm:text-sm text-gray-650 italic font-medium leading-relaxed">
                  "At age 3, our child struggled with sensory touch sensitivities, leading to severe meltdowns during haircuts, wearing certain fabrics, and trying solid foods. Within 6 months of tactile sensory integration play lessons, he sat calm in his first salon chair, and expanded his diet from 3 foods to 14!"
                </blockquote>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-2 font-mono">— S.S., Muttil North Kerala</p>
              </div>

              <div className="p-5 bg-gray-50 rounded-2xl hover:bg-gray-50/80 transition-colors border border-gray-100">
                <blockquote className="text-xs sm:text-sm text-gray-650 italic font-medium leading-relaxed">
                  "Our daughter experience physical and motor lags, unable to lift items or crawl smoothly up standard stairs. After custom occupational and physical rehabilitation classes focused on trunk balance strengths, she now climbs steps independently of any assistance."
                </blockquote>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-2 font-mono">— P.P, Meenangadi Wayanad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox full-screen overlay */}
        {currentLightboxItem && lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 select-none"
            onClick={closeLightbox}
            id="gallery-lightbox-overlay"
          >
            {/* Header toolbar */}
            <div className="flex justify-between items-center text-white p-2">
              <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
                Moment {lightboxIndex + 1} of {GALLERY_DATA.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-full text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Stage with Navigation controls */}
            <div className="flex-1 flex items-center justify-between relative max-w-4xl mx-auto w-full">
              
              <button
                onClick={(e) => showPrevImage(e)}
                className="absolute left-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black text-white shrink-0 flex items-center justify-center border border-white/10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div 
                className="mx-auto max-h-[70vh] flex items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentLightboxItem.src}
                  alt={currentLightboxItem.caption}
                  className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={(e) => showNextImage(e)}
                className="absolute right-2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black text-white shrink-0 flex items-center justify-center border border-white/10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Footer Captions */}
            <div className="text-white text-center p-4 max-w-2xl mx-auto space-y-2">
              <span className="inline-block bg-brand-blue-500 text-white text-[9px] font-bold uppercase rounded-md px-2 py-0.5">
                {currentLightboxItem.category}
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-350">
                {currentLightboxItem.caption}
              </p>
              <p className="text-[10px] text-gray-500 font-mono">
                Event Date: {new Date(currentLightboxItem.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
