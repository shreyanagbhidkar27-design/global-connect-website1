import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/i18n/translations';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full p-1 border border-border">
      <Globe className="w-4 h-4 text-muted-foreground ml-2" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
            language === lang.code
              ? 'gradient-bg-primary text-primary-foreground shadow-md'
              : 'text-foreground hover:bg-muted'
          }`}
        >
          {lang.nativeLabel}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
