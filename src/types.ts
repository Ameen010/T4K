export interface ServiceDetail {
  whatIs: string;
  whoItHelps: string[];
  benefits: string[];
  approach: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  details: ServiceDetail;
  iconName: string; // Dynamic icon from lucide-react
  colorTheme: {
    bg: string;
    text: string;
    accent: string;
    border: string;
  };
}

export interface Therapist {
  id: string;
  name: string;
  designation: string;
  isFounder: boolean;
  photo: string;
  bio: string;
  specialities: string[];
  email?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
  avatarColor: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: 'celebrations' | 'therapy' | 'team';
  date: string;
}

export interface Appointment {
  id: string;
  childName: string;
  childAge: number;
  parentName: string;
  phone: string;
  email: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}
