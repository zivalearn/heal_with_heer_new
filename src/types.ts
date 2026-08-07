export interface Modality {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string; // lucide icon name or svg identifier
  color: 'teal' | 'sage' | 'gold';
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  modalities: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  color: 'teal' | 'sage' | 'gold';
}

export interface SessionBooking {
  name: string;
  email: string;
  phone: string;
  modality: string;
  date: string;
  timeSlot: string;
  message?: string;
}
