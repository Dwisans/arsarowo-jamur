import { Sprout } from 'lucide-react';
import './Footer.css';

const NAV_LINKS = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#proses', label: 'Proses' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#kontak', label: 'Kerja Sama' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-icon">
            <Sprout size={22} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="footer__brand-text">Arsarowo <em>Jamur</em></span>
          <p className="footer__tagline">
            UMKM budidaya jamur tiram segar &amp; alami dengan eco enzyme dari Desa
            Wisata Bejalen, Ambarawa.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navigasi footer">
          <p className="footer__nav-title">Jelajahi</p>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <p className="footer__nav-title">Kontak</p>
          <p>Desa Wisata Bejalen, Kec. Ambarawa, Kab. Semarang, Jawa Tengah</p>
          <p>0812-3456-7890</p>
          <p>05.00 - 17.00 WIB</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Arsarowo Jamur. Ditanam dengan cinta, dipanen
            dengan ketelitian.
          </p>
        </div>
      </div>
    </footer>
  );
}