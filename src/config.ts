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
  url: 'https://konstantinlaptev.pro',
  description:
    'Video Technical Manager and disguise Certified Operator based in Dubai. 18 years of projection mapping, media server programming and site-wide video systems for Formula 1, Noor Riyadh and MDLBEAST Soundstorm.',
  tagline: 'Video Technical Manager & Senior disguise Operator',
  authorDescription:
    "I plan and run the video systems behind large-scale live events — projection mapping, media server programming, site-wide signal distribution — from the first 3D scan to the final show. 18 years across Formula 1, Noor Riyadh, MDLBEAST Soundstorm and a three-record projection on One Za’abeel.",
  avatar: aboutImage,
  profileImage: profileImage,
  location: 'Dubai, UAE',
  email: 'kslaptev@gmail.com',
  phone: '+971 58 571 6150',
};
