import "./Footer.css";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#proses", label: "Proses" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kerja Sama" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src="./images/logo.png"
            alt="Logo Arsarowo Jamur"
            className="footer__brand-logo"
          />
          <span className="footer__brand-text">
            Arsarowo <em>Jamur</em>
          </span>
          <p className="footer__tagline">
            Jamur tiram segar premium dari Desa Wisata Bejalen, Ambarawa.
            Dibudidayakan dengan eco enzyme, dipanen dua kali sehari untuk
            kualitas terbaik.
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
          <p>
            Desa Wisata Bejalen, RT. 02/RW. 01, Kec. Ambarawa, Kab. Semarang,
            Jawa Tengah
          </p>
          <p>0857-1379-6309</p>
          <p>05.00 - 17.00 WIB</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Arsarowo Jamur. Dibudidayakan dengan
            ketelitian, dipanen untuk kualitas.
          </p>
        </div>
      </div>
    </footer>
  );
}
