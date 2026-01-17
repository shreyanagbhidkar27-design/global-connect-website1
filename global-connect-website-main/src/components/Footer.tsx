import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.footer.aboutUs, href: '#about' },
    { label: t.footer.ourPrograms, href: '#programs' },
    { label: t.footer.impactStories, href: '#events' },
    { label: t.nav.getInvolved, href: '#get-involved' },
    { label: t.footer.contactUs, href: '#contact' },
  ];

  return (
    <footer id="contact" className="gradient-bg-hero py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Centre for Creativity Innovations" className="h-12 w-auto" />
              <span className="text-lg font-bold text-primary-foreground leading-tight">
                Center for Creativity<br />& Innovations
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.together}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-primary-foreground/80">
                  info@creativityinnovations.org
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-primary-foreground/80">
                  +91 712 123-4567
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Nagpur, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
