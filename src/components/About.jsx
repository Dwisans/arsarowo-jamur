import { Sprout, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import "./About.css";

const VALUES = [
  "Bibit unggul, dirawat dengan konsistensi",
  "Kearifan lokal & teknik budidaya telaten",
  "Pangan sehat untuk Semarang & sekitarnya",
];

export default function About() {
  return (
    <section className="section about" id="tentang">
      <span className="about__edge" aria-hidden="true">
        No. 01 — Sejak 2021
      </span>
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__media-frame">
            <img
              src="./images/2.png"
              alt="Pendiri Arsarowo Jamur, Bapak Hermawan dan Ibu Retno"
              width="600"
              height="600"
              loading="lazy"
            />
            <div className="about__media-note">
              <span className="about__media-note-num">40</span>
              <span className="about__media-note-body">
                <strong>Hari siklus</strong>
                <small>dari baglog ke panen</small>
              </span>
            </div>
            <div className="about__media-badge">
              <span className="about__media-badge-icon">
                <Sprout size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <span>
                <strong>Sejak 2021</strong>
                <small>Berkarya penuh cinta</small>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <p className="section-eyebrow">No. 01 — Tentang Kami</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">
              Tentang Arsarowo Jamur — <em>dedikasi</em> untuk kualitas, sejak
              2021.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="about__text">
              Berawal dari tahun 2021, Bapak Hermawan dan Ibu Retno Ari
              Purwaningsih memulai budidaya jamur tiram di Desa Wisata Bejalen,
              Kecamatan Ambarawa. Kami percaya kualitas jamur yang baik tidak
              hanya lahir dari bibit unggul, melainkan dari ketelitian dan
              konsistensi perawatan.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="about__text">
              Melalui perpaduan kearifan lokal dan teknik budidaya yang telaten,
              Arsarowo Jamur hadir memenuhi kebutuhan pangan sehat bagi
              masyarakat Semarang dan sekitarnya.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <ul className="about__list">
              {VALUES.map((value) => (
                <li key={value}>
                  <HeartHandshake
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <p className="about__sign">
              <span>Bapak Hermawan &amp; Ibu Retno</span>
              <small>Pendiri Arsarowo Jamur</small>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
