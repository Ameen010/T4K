import React, { useState } from 'react';
import { Mail, GraduationCap, Award, Compass, X, CalendarCheck, HelpCircle } from 'lucide-react';
import { TEAM_DATA } from '../data';
import { Therapist } from '../types';

interface TeamSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function TeamSection({ setCurrentPage }: TeamSectionProps) {
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  const openTherapistModal = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
  };

  const closeTherapistModal = () => {
    setSelectedTherapist(null);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      
      {/* Dynamic background shapes */}
      <div className="absolute top-1/3 left-0 w-32 h-32 bg-yellow-100/30 rounded-r-3xl filter blur-xl select-none pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-brand-blue-50/40 rounded-l-3xl filter blur-xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-green-600 bg-brand-green-50 px-3.5 py-1 rounded-full">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
            Meet Our Dedicated Clinical Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our multidisciplinary specialists bring rich pediatric expertise, compassionate minds, and family-centered approaches to child rehabilitation in Wayanad.
          </p>
        </div>

        {/* Founders Spotlight Section (Faizal & Haseena) */}
        <div className="mb-16 bg-gradient-to-tr from-brand-blue-50/40 via-white to-brand-green-150/20 p-6 sm:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founders Photo Block */}
            <div className="lg:col-span-5 relative select-none">
              <div className="absolute inset-0 bg-yellow-250/25 rounded-3xl transform -rotate-2 scale-102 border-2 border-dashed border-yellow-200"></div>
              <div className="relative bg-white p-3 rounded-3xl shadow-lg border border-gray-105 overflow-hidden">
                <img
                  src={TEAM_DATA[0].photo} // This is GENERATED_IMAGES.founders
                  alt="Faizal M Mangalad & Haseena Faizal - Lead clinical occupational therapist founders of Time for Kids Wayanad"
                  className="w-full h-80 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-brand-blue-800/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10 text-center shadow-md">
                  <p className="text-xs uppercase font-bold tracking-widest text-brand-pastel-yellow">Co-Founding Directors</p>
                  <p className="text-xs text-gray-200 mt-1">Nurturing Kids with Compassionate Care</p>
                </div>
              </div>
            </div>

            {/* Founders Bio Information Grid */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100 font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  Founding Board Showcase
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-950">
                  Faizal M. Mangalad &amp; Haseena Faizal
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-blue-800 italic">
                  Senior Pediatric Clinical Occupational Therapist &amp; Speech-Language Clinic Director
                </p>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                Time for Kids was co-founded by <strong>Faizal M Mangalad</strong> and <strong>Mrs. Haseena Faizal</strong> with a unified clinical vision: creating a compassionate, gold-standard pediatric rehabilitation haven where childhood milestone growth feels natural, loving, and play-powered. Located in Huttil North, Muttil North Wayanad, they lead a certified multidisciplinary team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-3xs">
                  <h4 className="text-xs font-bold text-gray-900 border-l-2 border-brand-blue-500 pl-2">Faizal M Mangalad</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-1">Founder &amp; Senior pediatric expert of Neuro-Rehabilitation &amp; Sensory Integration exercises designed for developmental progression.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-3xs">
                  <h4 className="text-xs font-bold text-gray-900 border-l-2 border-brand-green-500 pl-2">Mrs. Haseena Faizal</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-1">Co-Founder &amp; Clinical Speech Director supporting children struggling with picky-eating behaviors, voice articulation and social language issues.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openTherapistModal(TEAM_DATA[0])}
                  className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Faizal's Full Bio
                </button>
                <button
                  onClick={() => openTherapistModal(TEAM_DATA[1])}
                  className="bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Haseena's Full Bio
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Specialists Team Grid */}
        <h4 className="text-xl font-display font-semibold text-gray-950 text-center mb-8">
          Meet Our Specialist Teammates
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 select-none max-w-5xl mx-auto px-1">
          {TEAM_DATA.slice(2).map((therapist) => (
            <div
              key={therapist.id}
              id={`team-card-${therapist.id}`}
              className="bg-white rounded-3xl border border-gray-100/50 shadow-xs hover:shadow-lg transition-transform duration-350 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={therapist.photo}
                  alt={`${therapist.name} - ${therapist.designation} at Time for Kids Wayanad`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-brand-pastel-yellow font-bold">Specialized Care Specialist</p>
                </div>
              </div>

              <div className="p-6 text-left space-y-3.5">
                <div>
                  <h5 className="font-display font-bold text-lg text-gray-900">{therapist.name}</h5>
                  <p className="text-xs font-semibold text-brand-blue-600 mt-0.5">{therapist.designation}</p>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {therapist.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {therapist.specialities.slice(0, 2).map((spec, i) => (
                    <span key={i} className="text-[9px] bg-brand-blue-50 text-brand-blue-700 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-50">
                  <button
                    onClick={() => openTherapistModal(therapist)}
                    className="w-full text-center bg-gray-50 hover:bg-brand-blue-50 hover:text-brand-blue-600 text-gray-700 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Learn More &amp; Bio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Bio popup representation */}
        {selectedTherapist && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.45)' }}
            onClick={closeTherapistModal}
            id="team-details-overlay"
          >
            <div 
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden transform animate-fade-in text-left border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeTherapistModal}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/35 hover:bg-black/55 text-white z-10 transition-colors"
                  aria-label="Close bio details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Cover/Brief banner */}
                <div className="h-60 sm:h-72 overflow-hidden relative select-none">
                  <img
                    src={selectedTherapist.photo}
                    alt={selectedTherapist.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-black/10"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                    {selectedTherapist.isFounder && (
                      <span className="bg-brand-pastel-yellow text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                        Founding Director
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl sm:text-2xl">{selectedTherapist.name}</h3>
                    <p className="text-xs text-gray-200 mt-1">{selectedTherapist.designation}</p>
                  </div>
                </div>

              </div>

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Full Biography block */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-1.5">Full Biography</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                    {selectedTherapist.bio}
                  </p>
                </div>

                {/* Specialties block */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-1.5 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span>Areas of Clinical Focus</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTherapist.specialities.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] sm:text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 px-3 py-1 rounded-lg uppercase tracking-wide"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action items */}
              <div className="bg-gray-50 p-6 px-8 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
                <span className="text-xs text-gray-500 italic">Consultations are scheduled of Muttil North.</span>
                <button
                  onClick={() => {
                    closeTherapistModal();
                    setCurrentPage('bookings');
                  }}
                  className="w-full sm:w-auto text-center flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold px-6 h-11 rounded-xl text-xs shadow-md cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book with {selectedTherapist.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
