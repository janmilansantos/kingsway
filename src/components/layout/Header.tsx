import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/mockData';
import { useMobileMenu } from '@/hooks/useMobileMenu';

function Header() {
  const { pathname } = useLocation();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl shadow-glow">
      <nav className="flex justify-between items-center px-8 py-4 max-w-full">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <span className="material-symbols-outlined text-blue-400 text-3xl">
            tire_repair
          </span>
          <span className="text-2xl font-black tracking-tighter text-slate-50 font-headline uppercase">
            KINGSWAY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-headline tracking-wider font-bold uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-blue-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-headline font-bold uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
        >
          Get a Quote
        </Link>

        <button
          onClick={toggle}
          className="md:hidden text-slate-50"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 px-8 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={close}
              className={`block py-3 font-headline tracking-wider font-bold uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-blue-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={close}
            className="mt-4 block text-center bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-headline font-bold uppercase tracking-wide"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
