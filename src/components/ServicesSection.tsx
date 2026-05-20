import React, { useState } from 'react';
import { 
  Activity, 
  MessageSquare, 
  Sparkles, 
  Target, 
  Accessibility, 
  HeartHandshake, 
  BookOpen, 
  Baby, 
  X,
  CheckCircle,
  HelpCircle,
  CalendarDays,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesSectionProps {
  setCurrentPage: (page: string) => void;
  selectedServiceId?: string;
  setSelectedServiceId?: (id: string | undefined) => void;
}

// Map Lucide name to component
const IconMapper: Record<string, any> = {
  Activity,
  MessageSquare,
  Sparkles,
  Target,
  Accessibility,
  HeartHandshake,
  BookOpen,
  Baby
};

export default function ServicesSection({ setCurrentPage, selectedServiceId, setSelectedServiceId }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<'what' | 'who' | 'benefits' | 'approach'>('what');

  // Handle open details modal
  const openDetails = (service: Service) => {
    setActiveModalService(service);
    setActiveTab('what');
  };

  // Close modal
  const closeDetails = () => {
    setActiveModalService(null);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-blue-50/20 relative">
      
      {/* Dynamic bubbles backgrounds */}
      <div className="absolute top-24 left-10 w-48 h-48 bg-teal-100/30 rounded-full filter blur-xl select-none pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full filter blur-2xl select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue-600 bg-brand-blue-50 px-3.5 py-1 rounded-full">
            Our Care Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
            Specialized Pediatric Rehabilitation Programs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every child has a distinct pace and rhythm. We provide evidence-based, clinical therapies adapted into fun, engaging play activities to help them achieve functional independence.
          </p>
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none max-w-7xl mx-auto px-1">
          {SERVICES_DATA.map((service) => {
            const IconComponent = IconMapper[service.iconName] || Activity;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => openDetails(service)}
                className="group bg-white rounded-3xl p-6 border border-gray-100/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer relative overflow-hidden"
              >
                {/* Visual accent top line color */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${service.colorTheme.accent}`}></div>

                <div className="space-y-4">
                  {/* Service Icon Wrapper */}
                  <div className={`w-12 h-12 ${service.colorTheme.bg} rounded-2xl flex items-center justify-center border ${service.colorTheme.border} transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className={`w-6 h-6 ${service.colorTheme.text.replace('bg-', 'text-')}`} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-blue-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-brand-blue-500">
                  <span>Explore Approach</span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner to prompt for assessments */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 text-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left select-none">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-lg sm:text-xl">Not sure which therapy is ideal?</h4>
            <p className="text-xs sm:text-sm text-brand-blue-50">Speak to our clinical directors directly for a free initial discovery consultation.</p>
          </div>
          <button
            onClick={() => setCurrentPage('bookings')}
            className="bg-white hover:bg-gray-50 text-brand-blue-600 font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0 cursor-pointer text-sm"
          >
            Schedule Discovery Call
          </button>
        </div>

        {/* Detailed Modal/Popup Panel showing the deep contents of the clicked service */}
        {activeModalService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none overflow-y-auto"
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.45)' }}
            onClick={closeDetails}
            id="service-details-overlay"
          >
            <div 
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden transform animate-fade-in text-left border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Header Box representing ColorTheme */}
              <div className={`p-6 sm:p-8 ${activeModalService.colorTheme.bg} border-b ${activeModalService.colorTheme.border} relative`}>
                
                {/* Close Button X */}
                <button
                  onClick={closeDetails}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/40 text-gray-800 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xs">
                    {React.createElement(IconMapper[activeModalService.iconName] || Activity, {
                      className: `w-6 h-6 ${activeModalService.colorTheme.text}`
                    })}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-tight">
                      {activeModalService.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Specialized Department Programs</p>
                  </div>
                </div>

              </div>

              {/* Tabs list inside detailed block */}
              <div className="flex border-b border-gray-100 overflow-x-auto text-xs sm:text-sm bg-gray-50 font-medium">
                <button
                  onClick={() => setActiveTab('what')}
                  className={`flex-1 min-w-32 py-3 px-2 text-center border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'what' 
                      ? 'border-brand-blue-500 text-brand-blue-600 font-bold bg-white' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  What is it?
                </button>
                <button
                  onClick={() => setActiveTab('who')}
                  className={`flex-1 min-w-32 py-3 px-2 text-center border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'who' 
                      ? 'border-brand-blue-500 text-brand-blue-600 font-bold bg-white' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  Who it helps
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`flex-1 min-w-32 py-3 px-2 text-center border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'benefits' 
                      ? 'border-brand-blue-500 text-brand-blue-600 font-bold bg-white' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  Clinical Benefits
                </button>
                <button
                  onClick={() => setActiveTab('approach')}
                  className={`flex-1 min-w-32 py-3 px-2 text-center border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'approach' 
                      ? 'border-brand-blue-500 text-brand-blue-600 font-bold bg-white' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  Our Approach
                </button>
              </div>

              {/* Tab Contents Frame */}
              <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto">
                
                {activeTab === 'what' && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                        {activeModalService.details.whatIs}
                      </p>
                    </div>
                    <div className="p-4 bg-brand-blue-50/40 rounded-xl border border-brand-blue-100/50 mt-2">
                      <p className="text-xs font-semibold text-brand-blue-800">Department Theme Note</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                        Our centers focus heavily on play-based exercises standardly recommended. We avoid clinical rigid setups to keep pediatric attention high and stress low.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'who' && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <p className="text-sm font-semibold text-gray-800">Your child may benefit from this program if they face/are:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeModalService.details.whoItHelps.map((point, index) => (
                        <div key={index} className="flex items-center space-x-2.5 p-2 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs text-gray-700 font-medium leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <p className="text-sm font-semibold text-gray-800">Expected clinical outcomes of therapy sessions:</p>
                    <div className="space-y-2.5">
                      {activeModalService.details.benefits.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className="w-5 h-5 rounded-full bg-brand-blue-50 text-brand-blue-500 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'approach' && (
                  <div className="space-y-4 animate-fade-in text-left">
                    <div className="p-4 bg-brand-green-50 rounded-2xl border border-brand-green-150 flex items-start space-x-3.5">
                      <Sparkles className="w-6 h-6 text-brand-green-600 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-brand-green-800 uppercase tracking-wide">Play-Powered Methodology</h4>
                        <p className="text-xs sm:text-sm text-brand-green-900 mt-1 leading-relaxed">
                          {activeModalService.details.approach}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Sessions are constantly recorded, measured, and reviewed inside monthly parent feedback loops.
                    </p>
                  </div>
                )}

              </div>

              {/* Modal footer with Action Buttons */}
              <div className="bg-gray-50 p-6 px-8 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    closeDetails();
                    setCurrentPage('contact');
                  }}
                  className="w-full sm:w-auto text-center border border-gray-200 hover:bg-gray-100 text-gray-700 font-semibold px-5 h-11 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Contact Department
                </button>

                <button
                  onClick={() => {
                    closeDetails();
                    setCurrentPage('bookings');
                  }}
                  className="w-full sm:w-auto text-center flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold px-6 h-11 rounded-xl text-xs shadow-md shadow-brand-blue-100 transition-all cursor-pointer"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Schedule Consultation Session</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
