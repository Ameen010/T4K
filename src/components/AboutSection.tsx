import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, ClipboardList, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  setCurrentPage: (page: string) => void;
}

interface Milestone {
  ageGroup: string;
  items: string[];
  alertTip: string;
}

export default function AboutSection({ setCurrentPage }: AboutSectionProps) {
  const [activeChecklistAge, setActiveChecklistAge] = useState<string>('2yo');
  const [checkedMilestones, setCheckedMilestones] = useState<Record<string, boolean>>({});

  const milestonesByAge: Record<string, Milestone> = {
    '1yo': {
      ageGroup: '1 Year (12 Months)',
      items: [
        'Points to things they want or to show interest',
        'Waves "bye-bye" and shakes head "no"',
        'Pulls up to stand and walks holding onto furniture',
        'Says single words like "mama" or "dada"',
        'Looks at objects or pictures when named'
      ],
      alertTip: 'If your child does not crawl, point to objects, or wave by 12 months, booking an occupational therapy developmental review is recommended.'
    },
    '2yo': {
      ageGroup: '2 Years (24 Months)',
      items: [
        'Speaks two-word phrases like "want milk" or "go out"',
        'Kicks a ball and begins running smoothly',
        'Points to pictures or body parts when asked',
        'Imitates simple actions and plays simple pretend games',
        'Stacks a tower of 4 or more small blocks'
      ],
      alertTip: 'If your child does not speak two-word phrases, walk steadily, or copy actions of others, an OT or Speech assessment can help establish these tracks.'
    },
    '3yo': {
      ageGroup: '3 Years (36 Months)',
      items: [
        'Can name most familiar things and speak in 3-4 word sentences',
        'Climbs steps using alternating feet easily without heavy supports',
        'Plays cooperatively alongside peers; shares toys willingly',
        'Pedals a tricycle or maintains balance on single-leg hops',
        'Can draw a circle or grasp big crayons with fingers'
      ],
      alertTip: 'Developmental delays in fine motor pencil grips, playground anxiety, or stuttering are best addressed around 3 years old through early intervention.'
    },
    '4yo': {
      ageGroup: '4-5 Years (School Age)',
      items: [
        'Tells simple coherent stories and answers open questions',
        'Hops and stands on one foot for up to 5 seconds',
        'Uses child-safe scissors, buttoning shirt buttons, or zipping bags',
        'Eats diverse food textures without extensive gagging or anxiety',
        'Focuses on a cooperative task for 6-10 minutes'
      ],
      alertTip: 'Inability to button, copy letters, or cope with mild changes in routine are key triggers for school-readiness occupational therapy support.'
    }
  };

  const handleCheckboxToggle = (key: string) => {
    setCheckedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentMilestones = milestonesByAge[activeChecklistAge];
  const checkedCountInGroup = currentMilestones.items.filter(
    item => checkedMilestones[`${activeChecklistAge}-${item}`]
  ).length;
  
  const progressPercent = Math.round((checkedCountInGroup / currentMilestones.items.length) * 100);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Presentation Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-brand-green-600">
              <span className="w-2 h-2 rounded-full bg-brand-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider">Compassionate Rehabilitation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950 leading-tight">
              Pioneering Child Growth & Development in Wayanad
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base">
              Time for Kids Occupational Therapy & Child Rehab Centre (CRC) Wayanad was established to provide high-quality, accessible therapy services to children in Wayanad and surrounding areas. Located in Muttil North, we are committed to helping every child reach their full potential through individualized therapy plans.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-base">
              Our multidisciplinary approach combines Occupational Therapy, Speech Therapy, Behavioral interventions, Sensory processing work, and physical therapy all under one roof. We work closely with families to create meaningful progress in daily living skills, sensory processing, communication, social skills, and overall child confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-brand-blue-50/50 p-4 rounded-xl border border-brand-blue-100/50">
                <p className="text-2xl font-bold font-mono text-brand-blue-600">112+</p>
                <p className="text-xs text-brand-blue-800 font-semibold uppercase tracking-wider">Verified Happy Families</p>
              </div>
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                <p className="text-2xl font-bold font-mono text-brand-green-600">4.5★</p>
                <p className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Google Business Rating</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 select-none">
            <div className="p-1 px-4 bg-brand-blue-50/40 rounded-3xl border border-brand-blue-100/30">
              <div className="py-6 sm:py-8 space-y-6">
                
                {/* Mission Visual Box */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center shrink-0 border border-rose-200">
                    <Target className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 leading-none mb-1.5">Our Mission</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      To empower children with developmental needs to thrive confidently in their families and surrounding Kerala communities.
                    </p>
                  </div>
                </div>

                {/* Vision Visual Box */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0 border border-amber-200">
                    <Eye className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 leading-none mb-1.5">Our Vision</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      To be the leading child development centre in Wayanad, recognized for compassionate pediatric therapies and outstanding family outcomes.
                    </p>
                  </div>
                </div>

                {/* Values Visual Box */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-200">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 leading-none mb-1.5">Core Clinical Values</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Compassion', 'Clinical Expertise', 'Individuality', 'Family Partnership', 'Continuous Improvement'].map((val) => (
                        <span key={val} className="text-[11px] font-sans font-medium bg-white text-indigo-700 px-2.5 py-1 rounded-md border border-indigo-100 uppercase tracking-wide">
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Milestone Tracker Interactive utility section block */}
        <div className="bg-gradient-to-tr from-brand-blue-50/30 to-brand-green-50/20 p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 text-neutral-200 text-7xl font-bold font-display pointer-events-none select-none opacity-20 hidden md:block">
            OT CHECK
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Checklist text instructions */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-gray-100 text-brand-blue-600 shadow-xs">
                <ClipboardList className="w-4 h-4 text-brand-blue-500" />
                <span className="text-xs font-bold font-sans uppercase">Assess At Home First</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-950">
                Developmental Checklist
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                As kids grow, they reach developmental markers in movement, playing, and learning. Select your child's age group to identify checkmarks that fit normal milestones.
              </p>
              
              {/* Tabs buttons to switch ages */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 pt-2 select-none">
                {[
                  { id: '1yo', label: '12 Months (Infancy)' },
                  { id: '2yo', label: '24 Months (Toddler)' },
                  { id: '3yo', label: '3 Years (Early Play)' },
                  { id: '4yo', label: '4-5 Years (School Prep)' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveChecklistAge(tab.id);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                      activeChecklistAge === tab.id
                        ? 'bg-brand-blue-500 text-white shadow-md'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-105'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Checklist Form list */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <h4 className="font-display font-semibold text-gray-950">
                  Are they meeting these {currentMilestones.ageGroup} skills?
                </h4>
                <span className="font-mono text-xs font-bold text-brand-blue-600 bg-brand-blue-50 px-2 py-1 rounded-sm">
                  {progressPercent}% Met
                </span>
              </div>

              {/* Progress Bar indicator */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden select-none">
                <div 
                  className="bg-brand-blue-500 h-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <div className="space-y-3.5 select-none text-left">
                {currentMilestones.items.map((item, index) => {
                  const itemKey = `${activeChecklistAge}-${item}`;
                  const isChecked = !!checkedMilestones[itemKey];
                  return (
                    <label
                      key={index}
                      className={`flex items-start space-x-3.5 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked 
                          ? 'border-brand-blue-200 bg-brand-blue-50/20 text-gray-900' 
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxToggle(itemKey)}
                        className="w-5 h-5 rounded-md border-gray-300 text-brand-blue-500 focus:ring-brand-blue-500 shrink-0 mt-0.5 cursor-pointer"
                      />
                      <span className="text-sm font-medium leading-relaxed">{item}</span>
                    </label>
                  );
                })}
              </div>

              {/* Helpful tips box */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-yellow-100 flex items-start space-x-3 text-left">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-900">Clinical Focus Note</p>
                  <p className="text-xs text-amber-800/90 leading-relaxed mt-1">
                    {currentMilestones.alertTip}
                  </p>
                </div>
              </div>

              {/* Dynamic advice outcome card */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 italic">
                  *This does not substitute clinical diagnosis assessments.
                </span>
                
                <button
                  onClick={() => setCurrentPage('bookings')}
                  className="flex items-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-xs shrink-0 cursor-pointer"
                >
                  <span>Request Assessment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
