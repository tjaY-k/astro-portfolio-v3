import aboutImage from '@/assets/about-image.webp';
import profileImage from '@/assets/K-profile.webp';

export interface SocialData {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  tagline: string;
  authorDescription: string;
  avatar: ImageMetadata;
  profileImage: ImageMetadata;
  url: string;
  location: string;
  email: string;
  phone: string;
}

export const siteConfig: SiteConfig = {
  name: 'Konstantin Laptev',
  title: 'Video Technical Manager & Senior disguise Operator',
  url: 'https://konstantin-laptev.pages.dev',
  description:
    'Senior disguise Operator & Video Technical Manager | Projection Mapping • Media Servers • xR | 18+ лет опыта | F1, Soundstorm, FIFA World Cup, Noor Riyadh',
  tagline: 'Projection Mapping • disguise • xR • LED',
  authorDescription:
    'Dynamic and versatile Video Technical Manager with over 18 years in live production, corporate events and broadcast. Expertise in projection mapping, disguise (d3), Pixera, xR technologies and large-scale events (Formula 1, Soundstorm 600k+, ONE Zabeel world record).',
  avatar: aboutImage,
  profileImage: profileImage,
  location: 'Dubai, UAE',
  email: 'kslaptev@gmail.com',
  phone: '+971 58 571 6150',
};
