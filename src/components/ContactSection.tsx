import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Smartphone, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  // Contact Form states
  const [name, setName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic Open/Closed indicator based on local operating rules: Closes 6:30 pm (Monday-Saturday)
  const isCurrentlyOpen = () => {
    try {
      const now = new Date();
      const currentDay = now.getDay(); // 0 is Sunday, 1-6 is Monday-Saturday
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      if (currentDay === 0) return false; // Closed Sundays
      
      const timeInMinutes = currentHour * 60 + currentMinute;
      const openTime = 9 * 60; // 9:00 am
      const closeTime = 18 * 60 + 30; // 6:30 pm (18:30)
      
      return timeInMinutes >= openTime && timeInMinutes < closeTime;
    } catch (_) {
      return true;
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSuccess(true);
      setName('');
      setChildAge('');
      setPhone('');
      setEmail('');
      setService('');
      setMessage('');
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }, 900);
  };

  // Google Maps Muttil North Embed URL
  const mapIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.839659178128!2d76.10427301053457!3d11.6631899732788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60e20014b2d41%3A0x6b6c0ae7649cc744!2sMuttil%20North%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716188440000!5m2!1sen!2sin";

  return (
    <section className="py-16 md:py-24 bg-white text-left select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header text */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue-600 bg-brand-blue-50 px-3.5 py-1 rounded-full">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
            Keep in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
            Have queries regarding speech lags, attention deficits, sensory swings, or pediatric motor developments? Send us a letter or visit our center in Muttil North.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Diagnostic Contact Details Card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="bg-brand-blue-50/40 p-6 rounded-3xl border border-brand-blue-100/50 space-y-6">
              <h3 className="font-display font-bold text-lg text-gray-900 border-b pb-3 border-brand-blue-100/70">
                Clinic Location &amp; Inquiries
              </h3>

              <div className="space-y-4">
                
                {/* Physical Location */}
                <div className="flex items-start space-x-3.5 select-text">
                  <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shrink-0 shadow-3xs">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Muttil North Center</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      Time For Kids OT &amp; CRC,<br />
                      Muttil North Post, Wayanad,<br />
                      Kerala 673122, India.
                    </p>
                  </div>
                </div>

                {/* Telephone number prominent */}
                <div className="flex items-start space-x-3.5 select-text">
                  <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shrink-0 shadow-3xs">
                    <Phone className="w-5 h-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Direct Booking Phone</h4>
                    <a 
                      href="tel:08921417571" 
                      id="contact-tel-link"
                      className="text-sm font-mono font-bold text-brand-blue-600 hover:underline leading-relaxed block mt-0.5"
                    >
                      089214 17571
                    </a>
                  </div>
                </div>

                {/* Mail address */}
                <div className="flex items-start space-x-3.5 select-text">
                  <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shrink-0 shadow-3xs">
                    <Mail className="w-5 h-5 text-brand-green-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Email Correspondence</h4>
                    <a 
                      href="mailto:timeforkids.wayanad@gmail.com" 
                      id="contact-email-link"
                      className="text-xs font-semibold text-gray-600 hover:text-brand-blue-600 leading-relaxed block mt-0.5"
                    >
                      timeforkids.wayanad@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating hours list */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shrink-0 shadow-3xs">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-gray-900">Operating Clinical Hours</h4>
                      
                      {isCurrentlyOpen() ? (
                        <span className="bg-brand-green-100 text-brand-green-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          ● Open Now
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          ● Closed
                        </span>
                      )}

                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      Monday – Saturday: 9:00 AM – 6:30 PM <br />
                      <span className="text-gray-400 font-semibold uppercase text-[10px]">Sunday: Closed for maintenance</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map block visual containing iframe */}
            <div className="relative bg-white p-3 rounded-3xl border border-gray-150 shadow-sm overflow-hidden select-none">
              <div className="flex items-center justify-between pb-2 px-1 text-xs font-bold text-gray-800">
                <span>Wayanad Center Maps Embed</span>
                <a 
                  href="https://google.com/maps/place/Muttil+North,+Kerala" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-blue-600 hover:underline inline-flex items-center space-x-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <iframe
                src={mapIframeSrc}
                title="Google Maps representation showing Time for Kids Muttil North Wayanad"
                className="w-full h-56 rounded-2xl border border-gray-200"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

          </div>

          {/* Quick Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-105 shadow-sm text-left">
            
            <h3 className="font-display font-bold text-lg text-gray-950 mb-1 select-none">Leave an Inquiry Letter</h3>
            <p className="text-xs text-gray-500 mb-6 select-none">Write your message and our lead psychologist will contact you within 24 working hours.</p>

            {isSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-brand-green-100 text-brand-green-805 rounded-xl flex items-center space-x-3 text-xs sm:text-sm animate-fade-in text-left">
                <CheckCircle className="w-5 h-5 text-brand-green-500 shrink-0" />
                <div>
                  <p className="font-bold text-brand-green-800">Letter Dispatched Safely!</p>
                  <p className="text-emerald-700 font-sans mt-0.5">Thank you for writing. We look forward to supporting your parenting journey.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name of writer */}
                <div className="space-y-1">
                  <label htmlFor="contactWriterName" className="text-xs font-semibold text-gray-750">Your Name</label>
                  <input
                    type="text"
                    id="contactWriterName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans"
                    placeholder="e.g. Haseem Althan"
                    required
                  />
                </div>

                {/* Child's age */}
                <div className="space-y-1">
                  <label htmlFor="contactChildAge" className="text-xs font-semibold text-gray-750">Child's Approximate Age</label>
                  <input
                    type="number"
                    id="contactChildAge"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans"
                    placeholder="e.g. 4"
                    required
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Contact phone */}
                <div className="space-y-1">
                  <label htmlFor="contactPhone" className="text-xs font-semibold text-gray-750">Indian Mobile Number</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans font-mono"
                    placeholder="e.g. 089214 17571"
                    required
                  />
                </div>

                {/* Contact Email */}
                <div className="space-y-1">
                  <label htmlFor="contactEmail" className="text-xs font-semibold text-gray-750">Your Email Address</label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>

              </div>

              {/* Related clinical department choice */}
              <div className="space-y-1">
                <label htmlFor="contactServiceSelect" className="text-xs font-semibold text-gray-750">Program of Interest</label>
                <select
                  id="contactServiceSelect"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans"
                  required
                >
                  <option value="">-- Choose department --</option>
                  <option value="Occupational Therapy">Occupational Therapy (OT)</option>
                  <option value="Speech Therapy">Speech &amp; Language Pathology</option>
                  <option value="Behavioral Therapy">Behavioral Interventions</option>
                  <option value="Sensory Integration">Sensory Integration Therapy</option>
                  <option value="Physiotherapy">Pediatric Physical Therapy</option>
                  <option value="Feeding Therapy">picky Eating/Sensory Feeding</option>
                  <option value="Special Education">Special Academic Coaching</option>
                  <option value="Early Intervention">Toddlers (0-3) Early Action</option>
                  <option value="General Query">General questions / Other questions</option>
                </select>
              </div>

              {/* Text Area */}
              <div className="space-y-1">
                <label htmlFor="contactMessageText" className="text-xs font-semibold text-gray-750">Your Descriptive Message / Questions</label>
                <textarea
                  id="contactMessageText"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 text-sm font-sans"
                  placeholder="How can we help your child thive? Specify any diagnostic triggers or past reports if any..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="w-full flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending inquiry letter...' : 'Send Message'}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
