import aboutImage from '@/assets/about-image.webp';
import profileImage from '@/assets/lewis-profile-no-bg.webp';

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
 export const SITE = {
  title: "Konstantin Laptev",
  description: "Video Technical Manager & Senior disguise Operator | Projection Mapping • Media Servers • xR | F1, Soundstorm, FIFA World Cup",
  author: "Konstantin Laptev",
  location: "Dubai, UAE",
  email: "kslaptev@gmail.com",
  phone: "+971 58 571 6150",
  linkedin: "https://linkedin.com/in/konstantin-laptev-72b70595",
  // ... остальное оставь как есть
}
};
