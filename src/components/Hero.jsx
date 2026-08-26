import {
  Handshake,
  ArrowDown,
  MapPin,
  Leaf,
  Clock,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import "./Hero.css";

const STATS = [
  { value: "2021", label: "Berpengalaman sejak" },
  { value: "2x", label: "Panen setiap hari" },
  { value: "40", label: "Hari siklus panen" },
  { value: "100%", label: "Eco enzyme murni" },
];

const MARQUEE = [
  "Jamur Tiram Premium",
  "Eco Enzyme",
  "Panen 2x Sehari",
  "Zero Waste",
  "Desa Wisata Bejalen",
  "Ambarawa, Semarang",
];

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero__deco hero__deco--one" aria-hidden="true" />
      <div className="hero__deco hero__deco--two" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__content">
            <Reveal>
              <p className="hero__eyebrow">
                <MapPin size={15} strokeWidth={2} aria-hidden="true" />
                Desa Wisata Bejalen · Ambarawa, Semarang
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="hero__title">
                Jamur Tiram <em>Segar</em> Panen Setiap Hari dari Ambarawa
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="hero__sub">
                Pasokan jamur tiram premium untuk restoran, katering, dan mitra
                bisnis Anda. Dipanen dua kali sehari dan dibudidayakan dengan{" "}
                <em>eco enzyme</em> — sehingga kualitasnya terjaga dari kumbung
                hingga ke tangan Anda.
              </p>
            </Reveal>

            <Reveal delay={270}>
              <div className="hero__actions">
                <a href="#kontak" className="btn btn-primary btn-lg">
                  <Handshake size={19} strokeWidth={2} aria-hidden="true" />
                  Mulai Kerja Sama
                </a>
                <a href="#proses" className="btn btn-secondary btn-lg">
                  Lihat Proses Budidaya
                  <ArrowDown size={19} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220} className="hero__media">
            <div className="hero__img-wrap">
              <img
                className="hero__img"
                src="./images/1.png"
                alt="Jamur tiram segar hasil panen Arsarowo Jamur di Ambarawa, Semarang"
                width="336"
                height="448"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero__badge hero__badge--harvest">
                <span className="hero__badge-icon">
                  <Clock size={17} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="hero__badge-text">
                  <strong>2x sehari</strong>
                  Panen pukul 05.00 &amp; 15.00 WIB
                </span>
              </div>
              <div className="hero__badge hero__badge--eco">
                <span className="hero__badge-icon">
                  <Leaf size={17} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="hero__badge-text">
                  <strong>100% Eco Enzyme</strong>
                  Nutrisi alami tanpa bahan kimia
                </span>
              </div>
              <div className="hero__badge hero__badge--zero">
                <span className="hero__badge-icon">
                  <ShieldCheck size={17} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="hero__badge-text">
                  <strong>Zero Waste</strong>
                  Limbah baglog jadi kompos
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={340}>
          <ul className="hero__stats">
            {STATS.map((stat) => (
              <li key={stat.label}>
                <span className="hero__stat-num">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <a
        href="#tentang"
        className="hero__scroll"
        aria-label="Gulir ke bagian tentang"
      >
        <span className="hero__scroll-text">Gulir</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="hero__marquee-item">
              <Leaf size={13} strokeWidth={2} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
