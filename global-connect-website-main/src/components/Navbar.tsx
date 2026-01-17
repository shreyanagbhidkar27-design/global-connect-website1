import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.programs, href: '#programs' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.getInvolved, href: '#get-involved' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Centre for Creativity Innovations" className="h-10 md:h-14 w-auto" />
            <span className="hidden lg:block text-sm font-semibold text-primary leading-tight max-w-[200px]">
              Centre for Creativity<br />& Innovations
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border sm:hidden">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
