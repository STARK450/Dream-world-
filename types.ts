import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
}

export interface PricingPackage {
  title: string;
  subtitle: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}
