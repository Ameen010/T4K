import React, { useState } from 'react';
import { Star, Quote, PlusCircle, Check, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { GoogleReview } from '../types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>(TESTIMONIALS_DATA);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Review Draft state variables
  const [authorName, setAuthorName] = useState('');
  const [starRating, setStarRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Math for ratings calculation
  const totalReviews = reviews.length;
  const ratingSum = reviews.reduce((sum, item) => sum + item.rating, 0);
  const avgRating = (ratingSum / totalReviews).toFixed(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newReview: GoogleReview = {
      id: `custom-rev-${Date.now()}`,
      author: authorName,
      rating: starRating,
      text: reviewText,
      timeAgo: 'Just now',
      avatarColor: 'bg-indigo-500'
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setReviewText('');
    setStarRating(5);
    setIsFormOpen(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-white select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-display font-medium text-xs uppercase tracking-widest text-brand-blue-600 bg-brand-blue-50 px-3.5 py-1 rounded-full">
              Parent Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-950">
              Trusted by Over 112+ Families in Wayanad
            </h2>
            <p className="text-gray-600 leading-relaxed font-sans text-sm sm:text-base">
              Nothing speaks louder than the words of happy mothers and fathers who have witnessed structural milestone improvement in their children's motor, speech, and sensory skills at our center. Read our genuine feedback!
            </p>
          </div>

          {/* Large Google Reviews Badge representation */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-brand-blue-50/40 via-yellow-50/20 to-emerald-50/30 p-6 rounded-3xl border border-gray-100/50 shadow-sm flex flex-col items-center justify-center text-center">
            
            {/* Google Logo mockup */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-sans font-bold text-lg">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-gray-400">Map Business Listing</span>
            </div>

            {/* Stars rendering */}
            <div className="flex items-center space-x-1.5 text-amber-400 my-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Overall counts */}
            <p className="text-4xl font-display font-black text-gray-950">{avgRating}</p>
            <p className="text-xs text-gray-500">
              Average Rating Based on <span className="font-bold text-gray-800">{totalReviews + 107} Reviews</span>
            </p>

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              id="leave-review-toggle"
              className="mt-4 flex items-center space-x-2 bg-white hover:bg-gray-50 text-brand-blue-600 border border-gray-200 hover:border-brand-blue-300 font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shadow-3xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Family Review</span>
            </button>

          </div>
        </div>

        {/* Successful submissions popups */}
        {showSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center space-x-3 text-emerald-800 max-w-2xl mx-auto shadow-sm animate-fade-in text-xs sm:text-sm">
            <Check className="w-5 h-5 text-brand-green-500 shrink-0" />
            <div>
              <p className="font-bold">Thank you for sharing your feedback!</p>
              <p className="text-emerald-700">Your review was appended to the client listings below and factored into the average scoring.</p>
            </div>
          </div>
        )}

        {/* Dynamic Add Review Form block */}
        {isFormOpen && (
          <div className="mb-10 p-6 sm:p-8 bg-gray-50 border border-gray-150 rounded-3xl max-w-2xl mx-auto animate-fade-in relative">
            <h4 className="font-display font-bold text-lg text-gray-950 mb-4 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Share Your Child's Journey & Progress</span>
            </h4>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              
              {/* Star selection toolbar */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-semibold text-gray-700">Review Star Rating</label>
                <div className="flex items-center space-x-1.5 select-none">
                  {[1, 2, 3, 4, 5].map((starVal) => (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setStarRating(starVal)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          starVal <= starRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author name details input */}
              <div className="space-y-1 text-left">
                <label htmlFor="authorName" className="text-xs font-semibold text-gray-700">Father's or Mother's Name</label>
                <input
                  type="text"
                  id="authorName"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 rounded-xl border border-gray-300 focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 font-sans text-sm"
                  placeholder="e.g. Meera Haridas"
                  required
                />
              </div>

              {/* Text comment textarea */}
              <div className="space-y-1 text-left">
                <label htmlFor="reviewText" className="text-xs font-semibold text-gray-700">Your Evaluation Comment</label>
                <textarea
                  id="reviewText"
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 rounded-xl border border-gray-300 focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 font-sans text-sm"
                  placeholder="Tell us about your therapist, service, child's milestone improvements, or comfort..."
                  required
                ></textarea>
              </div>

              {/* Form buttons */}
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 text-xs font-bold text-gray-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Publish Locally
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Reviews Horizontal scrolling or Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-3xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header author details */}
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm uppercase shrink-0 ${rev.avatarColor || 'bg-brand-blue-500'}`}>
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 leading-tight">{rev.author}</h5>
                    <div className="flex items-center space-x-1.5 mt-0.5">
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">{rev.timeAgo}</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial review speech snippet */}
                <div className="relative pt-2">
                  <Quote className="absolute -top-1 -left-2 w-8 h-8 text-neutral-100 shrink-0 select-none" />
                  <p className="text-xs text-gray-600 leading-relaxed font-sans font-medium relative z-10 pl-4">
                    {rev.text}
                  </p>
                </div>

              </div>

              {/* Verified badge */}
              <div className="pt-4 mt-4 border-t border-gray-50 flex items-center space-x-1.5 text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green-500"></span>
                <span>Verified Patient Parent</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
