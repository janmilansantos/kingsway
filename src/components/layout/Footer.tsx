import { Link } from 'react-router-dom';
import { contactInfo, footerServices } from '@/data/mockData';

function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-blue-400 text-2xl">
              tire_repair
            </span>
            <span className="text-xl font-bold text-slate-50 font-headline uppercase">
              KINGSWAY
            </span>
          </div>
          <p className="text-mist font-body text-sm leading-relaxed mb-6">
            The leading name in tire distribution and automotive parts. Quality
            and precision in every rotation.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-blue-400 hover:bg-primary-container hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-blue-400 hover:bg-primary-container hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-blue-400 font-headline font-bold uppercase tracking-widest text-sm mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-mist hover:text-blue-300 transition-all text-sm font-label"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-mist hover:text-blue-300 transition-all text-sm font-label"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-mist hover:text-blue-300 transition-all text-sm font-label"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-mist hover:text-blue-300 transition-all text-sm font-label"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-blue-400 font-headline font-bold uppercase tracking-widest text-sm mb-6">
            Services
          </h4>
          <ul className="space-y-4">
            {footerServices.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="text-mist hover:text-blue-300 transition-all text-sm font-label"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-blue-400 font-headline font-bold uppercase tracking-widest text-sm mb-6">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-mist">
              <span className="material-symbols-outlined text-blue-400">
                location_on
              </span>
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-3 text-sm text-mist">
              <span className="material-symbols-outlined text-blue-400">
                call
              </span>
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex gap-3 text-sm text-mist">
              <span className="material-symbols-outlined text-blue-400">
                mail
              </span>
              <span>{contactInfo.email}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-12 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-mist/50 uppercase tracking-widest">
          &copy; 2024 Kingsway Tire Trading. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-xs text-mist/50 uppercase tracking-widest hover:text-blue-400"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-mist/50 uppercase tracking-widest hover:text-blue-400"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
