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
  name: 'Konstantin Laptev',
  title: 'K- L',
  url: 'https://lewiskori.com',
  description:
    'Entrepreneur and product builder working at the intersection of technology, capital, and trust. Building platforms, advising institutions, and exploring how systems scale.',
  tagline: 'TagLine',
  authorDescription:
    'I am an entrepreneur and technologist focused on building scalable digital products, trusted platforms and businesses designed for long-term impact. My work spans product development, venture building and advisory across technology-driven markets.',
  avatar: aboutImage,
  location: 'Dubai, UAE',
  email: 'kslaptev@gmail.com',
  phone: '+971 58 5716150',
  profileImage: profileImage,
};
