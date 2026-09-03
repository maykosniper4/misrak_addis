import React from 'react';
import XoorixLogo from "../assets/images/xoorix-logo.png";
import { Facebook, Instagram, Youtube, UtensilsCrossed } from 'lucide-react';

// Configuration constants for easier future edits
const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#' },
  { name: 'Chefs', href: '#chefs' },
];

const CONTACT_INFO = {
  address: ['Bole Sub City, Namibia St.', 'Addis Ababa, Ethiopia'],
  phone: '+251 11 661 2345',
  email: 'reservations@misrakaddis.com',
};

const HOURS = [
  { days: 'Mon-Thu', time: '8:00 AM - 10:00 PM' },
  { days: 'Fri-Sat', time: '8:00 AM - 11:00 PM' },
  { days: 'Sunday', time: '9:00 AM - 10:00 PM' },
];

const Footer = () => {
  // Smooth scrolling for internal anchor links
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t mt-12 md:mt-20">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-bold tracking-tight text-foreground">
                  Misrak Addis
                </span>
                <span className="text-[11px] font-semibold text-primary tracking-widest uppercase">
                  ምስራቅ አዲስ
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience culinary excellence at Misrak Addis (ምስራቅ አዲስ), where authentic traditions meet unforgettable dining experiences and warm hospitality.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              {CONTACT_INFO.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.email}</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              {HOURS.map(({ days, time }) => (
                <div key={days} className="flex justify-between">
                  <span>{days}:</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Developed By */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-muted-foreground text-sm">
            © 2026 Misrak Addis (ምስራቅ አዲስ). All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">
              Developed by
            </span>
            <a
              href="https://xoorix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-neutral-900 border border-neutral-800 rounded-md px-3 py-1 transition-all duration-200 group shadow-sm hover:shadow"
              title="Developed by Xoorix"
            >
              <img
                src={XoorixLogo}
                alt="Xoorix"
                className="h-5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
