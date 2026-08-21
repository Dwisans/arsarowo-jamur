import { useEffect, useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#proses', label: 'Proses' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#beranda" className="nav__brand" aria-label="Arsarowo Jamur - ke beranda">
          <span className="nav__brand-icon">
            <Sprout size={22} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="nav__brand-text">
            Arsarowo <em>Jamur</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#kontak" className="btn btn-primary nav__cta">
          Kerja Sama Mitra
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        <nav aria-label="Navigasi menu mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="btn btn-primary btn-lg"
            onClick={() => setOpen(false)}
          >
            Jalin Kerja Sama
          </a>
        </nav>
      </div>
    </header>
  );
}
