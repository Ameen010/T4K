import React, { useState, useEffect } from 'react';
import { Appointment } from '../types';
import { SERVICES_DATA } from '../data';
import { Calendar, Clock, Trash2, Edit3, ClipboardCheck, Sparkles, Check, Phone, Mail, User } from 'lucide-react';

export default function BookingManager() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  
  // Form input field state variables
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [dateVal, setDateVal] = useState('');
  const [timeVal, setTimeVal] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [creationSuccessTicket, setCreationSuccessTicket] = useState<Appointment | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Load from local localStorage on boot
  useEffect(() => {
    const saved = localStorage.getItem('timeforkids_bookings');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const saveAppointments = (list: Appointment[]) => {
    setAppointments(list);
    localStorage.setItem('timeforkids_bookings', JSON.stringify(list));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setCreationSuccessTicket(null);

    // Dynamic field validation
    if (!childName.trim()) return setErrorMsg('Please specify the child\'s name.');
    const parsedAge = parseInt(childAge);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 18) {
      return setErrorMsg('Please specify a valid child age (between 0 and 18 years old).');
    }
    if (!parentName.trim()) return setErrorMsg('Please specify the parent\'s name.');
    
    // Validate Indian phone number (10 digits, simple check)
    const normalizedPhone = phone.replace(/\D/g, '');
    if (normalizedPhone.length < 10) {
      return setErrorMsg('Please provide a valid Indian 10-digit mobile number.');
    }
    
    if (!selectedService) return setErrorMsg('Please select a desired specialized therapy service.');
    if (!dateVal) return setErrorMsg('Please choose an appointment date slot.');
    if (!timeVal) return setErrorMsg('Please choose a preferred timing block.');

    const newBooking: Appointment = {
      id: `TFK-BK-${Math.floor(1000 + Math.random() * 9000)}`,
      childName,
      childAge: parsedAge,
      parentName,
      phone,
      email: email || 'No email provided',
      service: selectedService,
      appointmentDate: dateVal,
      appointmentTime: timeVal,
      notes,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    setIsSubmitting(true);

    // Simulate database write delay
    setTimeout(() => {
      const updatedList = [newBooking, ...appointments];
      saveAppointments(updatedList);
      setCreationSuccessTicket(newBooking);
      
      // Clean inputs
      setChildName('');
      setChildAge('');
      setParentName('');
      setPhone('');
      setEmail('');
      setSelectedService('');
      setDateVal('');
      setTimeVal('');
      setNotes('');
      setIsSubmitting(false);
    }, 850);
  };

  const handleCancelBooking = (bookingId: string) => {
    const filtered = appointments.filter(b => b.id !== bookingId);
    saveAppointments(filtered);
    if (creationSuccessTicket?.id === bookingId) {
      setCreationSuccessTicket(null);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-blue-50/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 select-none">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-blue-600 bg-brand-blue-50 px-3.5 py-1 rounded-full">
            Milestone Consultations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
            Book Pediatric Assessment Slot
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ready to explore answers? Schedule an appointment at our center in Muttil North, Wayanad. Our clinical director will contact you immediately to lock in the appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Appointment Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm text-left">
            
            <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4 select-none">
              <div className="w-10 h-10 bg-brand-blue-50 text-brand-blue-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-blue-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-950">Schedule Initial Intake Form</h3>
                <p className="text-[11px] text-gray-400">Fill standard details safely — No credit cards required.</p>
              </div>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl focus:outline-hidden text-xs font-semibold leading-relaxed">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Display Booking Success Ticket */}
            {creationSuccessTicket && (
              <div className="mb-8 p-5 bg-emerald-50 border border-brand-green-100 rounded-2xl space-y-3 animate-fade-in text-xs sm:text-sm select-text text-left">
                <div className="flex items-center space-x-2 text-brand-green-600">
                  <Check className="w-5 h-5 rounded-full bg-brand-green-500 text-white p-0.5 fill-none" />
                  <p className="font-bold">Appointment Intake Logged Successfully!</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-emerald-100/70 font-mono text-xs space-y-1 text-gray-700">
                  <p className="flex justify-between border-b pb-1">
                    <span className="font-semibold text-gray-500">Booking reference:</span>
                    <span className="font-bold text-gray-900">{creationSuccessTicket.id}</span>
                  </p>
                  <p className="flex justify-between border-b py-1">
                    <span className="font-semibold text-gray-500">Child's Name:</span>
                    <span className="font-semibold text-gray-900">{creationSuccessTicket.childName}</span>
                  </p>
                  <p className="flex justify-between border-b py-1">
                    <span className="font-semibold text-gray-500">Therapeutic Dept:</span>
                    <span className="font-bold text-brand-blue-600">
                      {SERVICES_DATA.find(s => s.id === creationSuccessTicket.service)?.name || creationSuccessTicket.service}
                    </span>
                  </p>
                  <p className="flex justify-between border-b py-1">
                    <span className="font-semibold text-gray-500">Preferred Slot:</span>
                    <span className="font-semibold text-gray-900">{creationSuccessTicket.appointmentDate} at {creationSuccessTicket.appointmentTime}</span>
                  </p>
                  <p className="flex justify-between pt-1">
                    <span className="font-semibold text-brand-green-600">Ticket Status:</span>
                    <span className="bg-brand-pastel-yellow text-amber-900 px-2 rounded-sm text-[10px] font-bold">Verification Pending</span>
                  </p>
                </div>

                <div className="pt-2 select-none flex flex-col sm:flex-row gap-2.5">
                  <a 
                    href={`https://wa.me/918921417571?text=Hi%20Time%20for%20Kids,%20I%20just%20submitted%20booking%20ref%20${creationSuccessTicket.id}%20for%20${creationSuccessTicket.childName}.%20Please%20verify%20the%20slot!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Instant WhatsApp Verify</span>
                  </a>
                  <button
                    onClick={() => setCreationSuccessTicket(null)}
                    className="px-4 py-2.5 bg-gray-150 hover:bg-gray-200 rounded-xl font-bold text-xs text-gray-700 cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Child Name */}
                <div className="space-y-1">
                  <label htmlFor="childNameInput" className="text-xs font-bold text-gray-700 flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-brand-blue-500" />
                    <span>Child's Full Name</span>
                  </label>
                  <input
                    type="text"
                    id="childNameInput"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                    placeholder="e.g. Rahul Prashob"
                    required
                  />
                </div>

                {/* Child Age */}
                <div className="space-y-1">
                  <label htmlFor="childAgeInput" className="text-xs font-bold text-gray-700 flex items-center space-x-1">
                    <span>Child's Age (Years)</span>
                  </label>
                  <input
                    type="number"
                    id="childAgeInput"
                    min="1"
                    max="18"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                    placeholder="e.g. 5"
                    required
                  />
                </div>
              </div>

              {/* Parent Name */}
              <div className="space-y-1">
                <label htmlFor="parentNameInput" className="text-xs font-bold text-gray-700 flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-brand-blue-500" />
                  <span>Father's / Mother's Name</span>
                </label>
                <input
                  type="text"
                  id="parentNameInput"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                  placeholder="e.g. Prashob P.S."
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="phoneInput" className="text-xs font-bold text-gray-700 flex items-center space-x-1 pb-0.5">
                    <Phone className="w-3.5 h-3.5 text-brand-blue-500" />
                    <span>Indian Contact Phone</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneInput"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans font-mono"
                    placeholder="e.g. 089214 17571"
                    required
                  />
                </div>

                {/* Email (Optional) */}
                <div className="space-y-1">
                  <label htmlFor="emailInput" className="text-xs font-bold text-gray-700 flex items-center space-x-1 pb-0.5">
                    <Mail className="w-3.5 h-3.5 text-brand-blue-500" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                    placeholder="yourname@gmail.com"
                  />
                </div>
              </div>

              {/* Service Selection dropdown */}
              <div className="space-y-1">
                <label htmlFor="serviceInputSelect" className="text-xs font-bold text-gray-700">Therapeutic Care Required</label>
                <select
                  id="serviceInputSelect"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                  required
                >
                  <option value="">-- Choose specialized clinic department --</option>
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                  <option value="General Milestone Consultation">General Milestone assessment review</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1">
                  <label htmlFor="dateInputSelect" className="text-xs font-bold text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    id="dateInputSelect"
                    value={dateVal}
                    min={new Date().toISOString().split('T')[0]} // Do not book past dates
                    onChange={(e) => setDateVal(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans font-mono"
                    required
                  />
                </div>

                {/* Time Slot dropdown */}
                <div className="space-y-1">
                  <label htmlFor="timeInputSelect" className="text-xs font-bold text-gray-700">Preferred Time Slot</label>
                  <select
                    id="timeInputSelect"
                    value={timeVal}
                    onChange={(e) => setTimeVal(e.target.value)}
                    className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                    required
                  >
                    <option value="">-- Choose preferred timing --</option>
                    <option value="Morning Slot (9:00 AM - 11:30 AM)">Morning: 9:00 AM - 11:30 AM</option>
                    <option value="Midday Slot (11:30 AM - 1:30 PM)">Midday: 11:30 AM - 1:30 PM</option>
                    <option value="Afternoon Slot (2:30 PM - 4:30 PM)">Afternoon: 2:30 PM - 4:30 PM</option>
                    <option value="Evening Slot (4:30 PM - 6:30 PM)">Evening: 4:30 PM - 6:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label htmlFor="notesInput" className="text-xs font-bold text-gray-700">Child's Developmental Background / Concern Comments</label>
                <textarea
                  id="notesInput"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-250 focus:bg-white focus:ring-1 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm font-sans"
                  placeholder="e.g. struggles with chewing, late to talk, avoids tags (wool/cotton), hyperactive milestones delays..."
                ></textarea>
              </div>

              {/* Action buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="book-appointment-submit-btn"
                  className="w-full flex items-center justify-center space-x-2 bg-brand-blue-500 hover:bg-brand-blue-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  <span>{isSubmitting ? 'Registering intake record...' : 'Create Scheduled Assessment Consultation'}</span>
                </button>
              </div>

            </form>

          </div>

          {/* Persistent Tracking Records Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="bg-gradient-to-tr from-brand-blue-500 to-brand-blue-600 text-white p-6 rounded-3xl shadow-sm space-y-4 select-none">
              <h3 className="font-display font-bold text-lg">My Registered Consultations</h3>
              <p className="text-xs text-brand-blue-50 leading-relaxed">
                We store your diagnostic consultation requests locally in this device. Track current status updates, verify code blocks, or cancel slots.
              </p>
              
              <div className="flex items-center space-x-3 text-xs bg-white/10 p-3 rounded-xl border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
                <span>Verification logs are active (Monday - Saturday closes 6:30 PM).</span>
              </div>
            </div>

            {/* List representation of loaded appointments */}
            <div className="space-y-3.5 max-h-[70vh] overflow-y-auto pr-1">
              {appointments.map((appt) => (
                <div
                  key={appt.id}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-3xs space-y-3 position-relative"
                >
                  <div className="flex justify-between items-start select-text">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-gray-400">{appt.id}</span>
                      <h4 className="font-display font-semibold text-gray-900 leading-tight">Patient: {appt.childName}</h4>
                      <p className="text-[10px] text-brand-blue-600 font-bold mt-0.5">
                        {SERVICES_DATA.find(s => s.id === appt.service)?.name || appt.service}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCancelBooking(appt.id)}
                      className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Cancel Appointment Intake"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-gray-500 border-t border-b py-2.5 select-text border-gray-50">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{appt.appointmentDate}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="truncate">{appt.appointmentTime.split(' (')[0]}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center select-none pt-0.5">
                    <span className="text-[10px] text-gray-400 font-sans italic">
                      Parent: {appt.parentName}
                    </span>
                    <span className="bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide border border-yellow-105">
                      Verify Pending
                    </span>
                  </div>

                </div>
              ))}

              {appointments.length === 0 && (
                <div className="bg-white/50 border border-dashed border-gray-250 p-10 text-center rounded-3xl select-none">
                  <ClipboardCheck className="w-8 h-8 text-neutral-300 mx-auto" strokeWidth={1} />
                  <p className="text-xs text-gray-400 mt-2 font-medium">No appointments registered yet on this browser.</p>
                  <p className="text-[10px] text-gray-400 mt-1 leading-normal">Submit the inquiry folder layout to see listings here.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
