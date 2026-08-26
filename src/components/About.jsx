import { Sprout, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import "./About.css";

const VALUES = [
  "Setiap jamur dirawat dengan ketelitian dan konsistensi",
  "Menggabungkan kearifan lokal dengan standar budidaya modern",
  "Mendedikasikan kualitas terbaik untuk mitra dan konsumen",
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
              width="336"
              height="448"
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
                <small>Berpengalaman & terpercaya</small>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal></Reveal>
          <Reveal delay={80}>
            <h2 className="section-title">
              Tentang Arsarowo Jamur — <em>menghadirkan</em> jamur tiram
              berkualitas sejak 2021.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="about__text">
              Arsarowo Jamur didirikan oleh Bapak Hermawan dan Ibu Retno Ari
              Purwaningsih di Desa Wisata Bejalen, Ambarawa — sebuah desa yang
              dikenal akan keindahan alam dan potensi wisatanya. Sejak 2021,
              kami berkomitmen menghadirkan jamur tiram segar berkualitas tinggi
              melalui proses budidaya yang teliti dan konsisten.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="about__text">
              Kami tidak sekadar menanam jamur. Setiap baglog kami rawat dengan
              standar ketat — mulai dari pemilihan bibit unggul, penggunaan eco
              enzyme sebagai nutrisi alami, hingga pemanenan dua kali sehari
              untuk menjaga kesegaran optimal. Hasilnya adalah jamur tiram yang
              aman, bergizi, dan siap memenuhi kebutuhan bisnis Anda.
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
