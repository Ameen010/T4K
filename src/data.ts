import { Service, Therapist, GoogleReview, GalleryItem } from './types';

// Let's import our high-quality generated assets automatically or reference their paths
export const GENERATED_IMAGES = {
  hero: '/src/assets/images/kids_therapy_hero_1779260707582.png',
  founders: '/src/assets/images/founders_portrait_1779260730781.png',
  galleryCelebration: '/src/assets/images/sensory_play_gallery_1779260750222.png'
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'ot',
    name: 'Occupational Therapy (OT)',
    shortDescription: 'Supporting daily living skills, fine/gross motor development, coordination, and independence.',
    iconName: 'Activity',
    colorTheme: {
      bg: 'bg-brand-blue-50',
      text: 'text-brand-blue-800',
      accent: 'bg-brand-blue-500',
      border: 'border-brand-blue-100'
    },
    details: {
      whatIs: 'Occupational Therapy helps children develop the essential skills required for "the job of living." This includes self-care (eating, dressing), playing, school-related tools (writing, using scissors), and building upper-body strength and physical dexterity.',
      whoItHelps: [
        'Children with developmental delays',
        'Fine and gross motor coordination difficulties',
        'Autism Spectrum Disorder (ASD)',
        'Cerebral Palsy or physical impairments',
        'Dyspraxia or coordination issues'
      ],
      benefits: [
        'Improves hand-eye coordination & fine motor manipulation',
        'Supports independence with grooming, eating, and basic tasks',
        'Enhances physical balance, bilateral coordination, and posture',
        'Helps in body spatial awareness and school readiness'
      ],
      approach: 'At Time for Kids, we turn OT exercises into enjoyable, playful challenges using specialized therapeutic swings, blocks, and writing aids, so children build muscles and coordination while having fun!'
    }
  },
  {
    id: 'speech',
    name: 'Speech & Language Therapy',
    shortDescription: 'Improving verbal communication, social skills, stuttering issues, and auditory comprehension.',
    iconName: 'MessageSquare',
    colorTheme: {
      bg: 'bg-emerald-50/50',
      text: 'text-emerald-900',
      accent: 'bg-brand-green-500',
      border: 'border-emerald-100'
    },
    details: {
      whatIs: 'Speech and Language Therapy supports children with speaking, understanding verbal communication, using social language (pragmatics), pronouncing words clearly, and resolving conditions like stuttering or articulation blocks.',
      whoItHelps: [
        'Speech delays and late-talkers',
        'Articulation and articulation disorders (hard to understand standard words)',
        'Receptive and expressive language delays',
        'Children with stuttering or fluency concerns',
        'Non-verbal children requiring Alternative and Augmentative Communication (AAC)'
      ],
      benefits: [
        'Fosters clearer voice speech pronunciation',
        'Enhances vocabulary database and phrase construction skills',
        'Improves auditory instructions comprehension',
        'Boosts confidence in social conversations and peer playtime'
      ],
      approach: 'We make communication interactive! Our speech therapists use puppets, child-friendly reading books, interactive tablet setups, and flashcards, tailoring sessions around your child’s emotional comfort and unique rhythm.'
    }
  },
  {
    id: 'sensory',
    name: 'Sensory Integration Therapy',
    shortDescription: 'Regulating responses with sound, touch, sight, and vestibular movement controls.',
    iconName: 'Sparkles',
    colorTheme: {
      bg: 'bg-amber-50/65',
      text: 'text-amber-905',
      accent: 'bg-amber-500',
      border: 'border-amber-100'
    },
    details: {
      whatIs: 'Sensory Integration Therapy addresses sensory processing issues, helping children whose nervous systems have difficulty organizing responses to touch, sounds, sights, balance, and spatial boundaries.',
      whoItHelps: [
        'Sensory Processing Disorder (SPD)',
        'Children over-sensitive to sounds, bright lights, labels, or textures',
        'Sensory-seeking kids (always spinning, jumping, or touching everything)',
        'Autistic children facing sensory overload meltdown barriers',
        'Poor balance, clumsiness, or fear of playground swings'
      ],
      benefits: [
        'Reduces extreme responses to sensory triggers (e.g., loud noises, hair cutting)',
        'Improves attention span, emotional self-regulation, and resting states',
        'Fosters calmness, security, and tactile tolerance',
        'Enhances posture, balance, and core stability'
      ],
      approach: 'Our center boasts a world-class state-of-the-art Sensory gym featuring suspended bolster swings, rock walls, sand/water texture tables, and climbing nets to gently and safely stimulate and regulate your child.’'
    }
  },
  {
    id: 'behavioral',
    name: 'Behavioral Therapy',
    shortDescription: 'Addressing attention span concerns, emotional outbursts, and positive reinforcement guides.',
    iconName: 'Target',
    colorTheme: {
      bg: 'bg-purple-50/50',
      text: 'text-purple-900',
      accent: 'bg-purple-500',
      border: 'border-purple-100'
    },
    details: {
      whatIs: 'Behavioral Therapy targets learning blocks, emotional distress, hyper-activity, and behavioral difficulties. By utilizing evidence-based positive reinforcement strategies, we replace problematic responses with functional coping skills.',
      whoItHelps: [
        'ADHD, ADD, and attention retention issues',
        'Tantrums, aggression, or oppositional behaviors',
        'Social anxiety and school adaptation trouble',
        'Children needing routine structures and adaptive lifestyle instructions'
      ],
      benefits: [
        'Increases positive behaviors and cooperation across contexts',
        'Reduces frequency and intensity of emotional outbursts/meltdowns',
        'Develops healthy emotional regulation and self-soothing tools',
        'Helps parents understand behaviors via parent-training frameworks'
      ],
      approach: 'We practice modern, affirmative, child-respectful behavioral therapy. Instead of compliance charts, we build genuine motivation, emotional resilience, and clear communication routes.'
    }
  },
  {
    id: 'physio',
    name: 'Physiotherapy (PT)',
    shortDescription: 'Strengthening pediatric physical coordinates, posture, crawling, standing, and gait cycles.',
    iconName: 'Accessibility',
    colorTheme: {
      bg: 'bg-sky-50/50',
      text: 'text-sky-900',
      accent: 'bg-sky-500',
      border: 'border-sky-100'
    },
    details: {
      whatIs: 'Pediatric Physiotherapy diagnoses and optimizes skeletal, motor, and neurological function. We coordinate movement patterns to allow babies and kids to crawl, sit, stand, walk, climb, and participate in active games.',
      whoItHelps: [
        'Cerebral Palsy, Spina Bifida, and genetic conditions',
        'Gross motor delay (late to sit, crawl, or walk)',
        'Low muscle tone (hypotonia) or high stiff rigidity',
        'Posture anomalies, clubfoot, or gait abnormalities'
      ],
      benefits: [
        'Builds core and limb strength',
        'Improves joint range of motion and overall physical stamina',
        'Supports mastery of milestones like independent standing or climbing',
        'Prevents standard pattern muscle contractures and structural deformity'
      ],
      approach: 'Our physical therapists guide pediatric workouts through playful obstacle courses, specialized therapy balls, crawling tunnels, and gait trainers, transforming heavy motor therapy into adventure tracks!'
    }
  },
  {
    id: 'feeding',
    name: 'Feeding Therapy',
    shortDescription: 'Guiding picky-eating solutions, texture sensitivities, chewing and swallow mechanisms.',
    iconName: 'HeartHandshake',
    colorTheme: {
      bg: 'bg-rose-50/50',
      text: 'text-rose-900',
      accent: 'bg-rose-500',
      border: 'border-rose-100'
    },
    details: {
      whatIs: 'Feeding Therapy supports children with oral-motor issues, sensory sensitivities to foods, extreme selective (picky) eating habits, and structural swallowing difficulties.',
      whoItHelps: [
        'Children with extreme food selector tendencies (eating less than 15 foods)',
        'Sensitivity to specific food textures, colors, or smells',
        'Choking, gagging, or pocketing food during meals',
        'Difficulty moving food across the mouth or biting/chewing correctly'
      ],
      benefits: [
        'Expands safe diet variety and improves nutritional health',
        'Minimizes fear/anxiety surrounding family meal times',
        'Improves oral muscular strength, chewing, and safe swallowing',
        'Creates healthy, stress-free family dinnertime environments'
      ],
      approach: 'We utilize a step-by-step, non-forced sensory desensitization approach (based on SOS concepts). Children are introduced to foods through play, touch, smell, and visual design before ever being asked to swallow.'
    }
  },
  {
    id: 'education',
    name: 'Special Education Support',
    shortDescription: 'Providing individualized cognitive pathways, academic adapters, reading and counting aid tools.',
    iconName: 'BookOpen',
    colorTheme: {
      bg: 'bg-teal-50',
      text: 'text-teal-900',
      accent: 'bg-teal-500',
      border: 'border-teal-100'
    },
    details: {
      whatIs: 'Special Education Support provides custom academic pacing, reading aids, basic math training, and study strategies to children facing unique cognitive or learning paths.',
      whoItHelps: [
        'Learning disabilities (Dyslexia, Dysgraphia, Dyscalculia)',
        'Intellectual delays requiring modified curriculums',
        'Children struggling to follow instructions in standard classrooms',
        'Writing, sentence structures, and mathematical blockages'
      ],
      benefits: [
        'Tailors educational strategies around child special strengths',
        'Builds primary spelling, reading, and calculations confidence',
        'Fosters conceptual understanding over rote memory requirements',
        'Helps in transition planning for integrated schools'
      ],
      approach: 'Using sensory-educational tools, visual logs, tactile learning letters, and interactive storytelling, we ensure learning corresponds directly to the way your child naturally absorbs ideas!'
    }
  },
  {
    id: 'early',
    name: 'Early Intervention Programs',
    shortDescription: 'Brain plasticity optimization for infants and toddlers under 3 years old.',
    iconName: 'Baby',
    colorTheme: {
      bg: 'bg-pink-50/50',
      text: 'text-pink-900',
      accent: 'bg-pink-500',
      border: 'border-pink-100'
    },
    details: {
      whatIs: 'Early Intervention centers on children aged 0-3 years when the brain is developing at its fastest rate. This multidisciplinary program accelerates milestones across movement, speech, cognition, and play.',
      whoItHelps: [
        'Infants diagnosed with high developmental risk markers',
        'Premature babies experiencing motor or physical lags',
        'Early signs of autism or communicative blocks',
        'Toddlers who do not play, gesture, or point at objects'
      ],
      benefits: [
        'Capitalizes on early nerve plasticity for ultimate recovery outcomes',
        'Reduces chances of long-term developmental delays or adaptive hurdles',
        'Provides parents with valuable home exercises and milestone checklists'
      ],
      approach: 'This is a family-inclusive setup! Our speech, sensory, and motor therapists work with parents through guided baby play, singing, physical massage exercises, and structured routines.'
    }
  }
];

export const TEAM_DATA: Therapist[] = [
  {
    id: 'faizal',
    name: 'Faizal M Mangalad',
    designation: 'Founder & Senior Clinical Occupational Therapist',
    isFounder: true,
    photo: GENERATED_IMAGES.founders,
    bio: 'Faizal is a visionary therapist with over fifteen years of clinical practice in pediatric neuro-rehabilitation and sensory integration. He holds advanced certifications in Sensory Integration Therapy and has pioneered child developmental care across Wayanad. His compassionate, evidence-based approach is family-centered, focusing on practical life skills, school integration, and empowering parents with actionable tools for day-to-day progress.',
    specialities: ['Sensory Integration (SI)', 'Pediatric Neuro-Rehabilitation', 'Fine Motor Development', 'Parent Empowerment Training']
  },
  {
    id: 'mrs-faizal',
    name: 'Mrs. Haseena Faizal',
    designation: 'Co-Founder & Clinical Speech-Language Director',
    isFounder: true,
    photo: GENERATED_IMAGES.founders, // Represented beautifully in our combined portrait
    bio: 'Haseena co-founded Time for Kids with a passion to resolve speech, language, and swallowing difficulties in babies and toddlers. With a decade of dedicated pediatric service, she specializes in Alternative and Augmentative Communication (AAC), early talking signals, autism communication aids, and sensory-linked feeding solutions. Her therapeutic work focuses on natural, joyful engagements that build speech confidence.',
    specialities: ['Early Intervention Talk', 'Alternative Communication (AAC)', 'Picky Eating & Swallow Care', 'Articulation Training']
  },
  {
    id: 'anjali',
    name: 'Dr. Anjali Menon',
    designation: 'Senior Pediatric Behavioral Psychologist',
    isFounder: false,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Dr. Anjali brings deep therapeutic expertise in addressing childhood hyperactivity, anxiety, social adaptability, and learning blocks. She is dedicated to positive, respectful, and strengths-focused behavioral support that coordinates seamlessly with school teachers.',
    specialities: ['ADHD/ADD Life Coping', 'Anxiety & Social Play Support', 'Parent-Teacher Communication Plans', 'Positive Reinforcement']
  },
  {
    id: 'jithin',
    name: 'Mr. Jithin Joseph',
    designation: 'Consultant Clinical Pediatric Physiotherapist',
    isFounder: false,
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Jithin centers pediatric physiotherapy around fun and interactive challenges. He is highly trained in cerebral palsy therapy, gross motor delay interventions, muscle strength conditioning, gait correction plans, and pediatric adaptive devices.',
    specialities: ['Gross Motor Milestones', 'Neuromuscular Balance Support', 'Gait Correction', 'Pediatric Stretching Dynamics']
  },
  {
    id: 'sneha',
    name: 'Ms. Sneha George',
    designation: 'Consultant Special Education Educator',
    isFounder: false,
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Sneha customizes academic paths for kids experiencing learning hurdles. She holds deep credentials in creating individualized education plans (IEPs) for dyslexia, numerical disabilities, dysgraphia, and integrated classroom preparedness.',
    specialities: ['Dyslexia Remediation', 'tactile Reading Materials', 'Individual Education Programs (IEP)', 'Attention Retention Methods']
  }
];

export const TESTIMONIALS_DATA: GoogleReview[] = [
  {
    id: 'rev1',
    author: 'Sruthi Sudhakaran',
    rating: 5,
    text: 'We are satisfied with the service from all the staff associated with our child. Within just a few months, we see huge positive changes in our son\'s communication and physical coordination. Wayanad really needed such a standard of professional care.',
    timeAgo: '2 weeks ago',
    avatarColor: 'bg-brand-blue-500'
  },
  {
    id: 'rev2',
    author: 'Prashob Ps',
    rating: 5,
    text: 'The therapist is very patient, friendly, and understands children very well. The way they interact is entirely natural and playful. My daughter actually looks forward to her sessions here eagerly.',
    timeAgo: '1 month ago',
    avatarColor: 'bg-brand-green-600'
  },
  {
    id: 'rev3',
    author: 'Shana Althaf',
    rating: 5,
    text: 'His behavior has improved, and he is now eating most foods! Earlier, dinner was a struggle due to his tactile sensitivities. The team\'s sensory feeding therapy is truly a blessing for our family.',
    timeAgo: '2 months ago',
    avatarColor: 'bg-amber-500'
  },
  {
    id: 'rev4',
    author: 'Nidhin Raj',
    rating: 5,
    text: 'Fantastic team! Their occupational therapy gym is fully equipped, clean, and extremely child-friendly. The progress reports they share are detailed and help us guide our child home in the right directions.',
    timeAgo: '3 months ago',
    avatarColor: 'bg-purple-500'
  },
  {
    id: 'rev5',
    author: 'Fathima Liyana',
    rating: 5,
    text: 'Wonderful experience. The therapists do not just treat the child, they collaborate heavily with parents. Highly recommend Time for Kids to any family with developmental delay queries.',
    timeAgo: '4 months ago',
    avatarColor: 'bg-pink-500'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal1',
    src: GENERATED_IMAGES.galleryCelebration, // Our generated sensory celebration
    caption: 'New Year Celebration (January 2, 2026) — Joyful children, parents, and clinical staff participating in interactive craft and group therapy celebrations.',
    category: 'celebrations',
    date: '2026-01-02'
  },
  {
    id: 'gal2',
    src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&h=600&q=80',
    caption: 'Sensory play integration using building blocks to nurture finger muscles, visual configurations, and fine-motor coordination.',
    category: 'therapy',
    date: '2026-02-15'
  },
  {
    id: 'gal3',
    src: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&h=600&q=80',
    caption: 'Interactive speech-language pathology clinic session focused on positive articulation and expression.',
    category: 'therapy',
    date: '2026-03-10'
  },
  {
    id: 'gal4',
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&h=600&q=80',
    caption: 'Movement challenge obstacle track setup in our motor therapy suite to promote balance control.',
    category: 'therapy',
    date: '2025-12-20'
  },
  {
    id: 'gal5',
    src: GENERATED_IMAGES.founders, // Founders working setup
    caption: 'Our lead clinical experts discussing and fine-tuning an individualized family treatment map.',
    category: 'team',
    date: '2025-11-05'
  },
  {
    id: 'gal6',
    src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&h=600&q=80',
    caption: 'Wayanad outdoor therapy workshop emphasizing parent involvement in naturalistic physical settings.',
    category: 'celebrations',
    date: '2026-04-18'
  }
];
