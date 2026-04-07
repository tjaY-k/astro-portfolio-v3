/**
 * i18n (Internationalization) using Astro's built-in system
 *
 * Astro handles routing automatically with the i18n config.
 * This file just provides translations for your content.
 */

export const languages = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': "Hi, I'm Konstantin Laptev",
    'hero.subtitle': 'Video Technical Manager & Media Server Operations Specialist',
    'hero.cta': 'View My Portfolio',
    'about.title': 'About Me',
    'projects.title': 'Selected Projects',
    'contact.title': 'Get In Touch',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'hero.title': 'Привет, я Константин Лаптев',
    'hero.subtitle': 'Видео-Технический Менеджер и Специалист по Медиа Серверам',
    'hero.cta': 'Посмотреть портфолио',
    'about.title': 'Обо мне',
    'projects.title': 'Избранные проекты',
    'contact.title': 'Связаться со мной',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.title': 'Hola, soy Konstantin Laptev',
    'hero.subtitle': 'Video Technical Manager y Especialista en Operaciones de Media Servers',
    'hero.cta': 'Ver Mi Portafolio',
    'about.title': 'Sobre Mí',
    'projects.title': 'Proyectos Seleccionados',
    'contact.title': 'Ponerse en Contacto',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.title': 'Bonjour, je suis Konstantin Laptev',
    'hero.subtitle': 'Video Technical Manager et Spécialiste en Opérations de Media Servers',
    'hero.cta': 'Voir Mon Portfolio',
    'about.title': 'À Propos',
    'projects.title': 'Projets Sélectionnés',
    'contact.title': 'Me Contacter',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Mich',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'hero.title': 'Hallo, ich bin Konstantin Laptev',
    'hero.subtitle': 'Video Technical Manager & Media Server Operations Spezialist',
    'hero.cta': 'Mein Portfolio Ansehen',
    'about.title': 'Über Mich',
    'projects.title': 'Ausgewählte Projekte',
    'contact.title': 'Kontakt Aufnehmen',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}