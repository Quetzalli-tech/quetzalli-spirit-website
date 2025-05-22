
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define available languages
export type Language = "en" | "fr" | "es";

// Translation dictionary type
type TranslationDictionary = {
  [key: string]: {
    [lang in Language]: string;
  };
};

// Create our translations
const translations: TranslationDictionary = {
  // Navbar
  "Home": {
    en: "Home",
    fr: "Accueil",
    es: "Inicio"
  },
  "Our Story": {
    en: "Our Story",
    fr: "Notre Histoire",
    es: "Nuestra Historia"
  },
  "Store": {
    en: "Store",
    fr: "Boutique",
    es: "Tienda"
  },
  "How It's Made": {
    en: "How It's Made",
    fr: "Comment C'est Fait",
    es: "Cómo Se Hace"
  },
  "The Bottle": {
    en: "The Bottle",
    fr: "La Bouteille",
    es: "La Botella"
  },
  "Blog": {
    en: "Blog",
    fr: "Blog",
    es: "Blog"
  },
  "Contact": {
    en: "Contact",
    fr: "Contact",
    es: "Contacto"
  },
  // Index page
  "Crafted with Ancestral Tradition": {
    en: "Crafted with Ancestral Tradition",
    fr: "Élaboré avec Tradition Ancestrale",
    es: "Elaborado con Tradición Ancestral"
  },
  "Our Collection": {
    en: "Our Collection",
    fr: "Notre Collection",
    es: "Nuestra Colección"
  },
  "From Agave to Bottle": {
    en: "From Agave to Bottle",
    fr: "De l'Agave à la Bouteille",
    es: "Del Agave a la Botella"
  },
  "Experience the Spirit of Mexico": {
    en: "Experience the Spirit of Mexico",
    fr: "Découvrez l'Esprit du Mexique",
    es: "Experimente el Espíritu de México"
  },
  "Subscribe": {
    en: "Subscribe",
    fr: "S'abonner",
    es: "Suscribirse"
  },
  "Shop Our Collection": {
    en: "Shop Our Collection",
    fr: "Achetez Notre Collection",
    es: "Compre Nuestra Colección"
  },
  // Common phrases
  "Learn More": {
    en: "Learn More",
    fr: "En Savoir Plus",
    es: "Más Información"
  },
  "Enter your email": {
    en: "Enter your email",
    fr: "Entrez votre e-mail",
    es: "Ingrese su correo electrónico"
  },
  "Thank you for subscribing!": {
    en: "Thank you for subscribing!",
    fr: "Merci de vous être abonné !",
    es: "¡Gracias por suscribirse!"
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const translate = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to the key itself if no translation is found
  };

  const value = {
    language,
    setLanguage,
    translate,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
