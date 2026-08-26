import Reveal from "./Reveal";
import "./Gallery.css";

const IMAGES = [
  {
    src: "./images/kumbung.jpg",
    alt: "Suasana kumbung budidaya jamur tiram Arsarowo Jamur di Desa Wisata Bejalen, Ambarawa",
  },
  {
    src: "./images/panen.png",
    alt: "Hasil panen jamur tiram segar Arsarowo Jamur dipanen dua kali sehari",
  },
  {
    src: "./images/penyiraman.png",
    alt: "Proses penyiraman jamur tiram menggunakan eco enzyme alami",
  },
  {
    src: "./images/baglog.jpg",
    alt: "Baglog media tanam jamur tiram berkualitas tinggi siap tanam",
  },
  {
    src: "./images/sortasi-panen.png",
    alt: "Proses sortasi dan grading jamur tiram segar sebelum distribusi",
  },
  {
    src: "./images/jamur.jpg",
    alt: "Jamur tiram segar Arsarowo Jamur siap dikirim ke mitra bisnis",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeri">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            Lihat langsung <em>kualitas</em> budidaya jamur tiram kami.
          </h2>
        </Reveal>

        <div className="gallery__grid">
          {IMAGES.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 120}
              className={`gallery__item gallery__item--${i + 1}`}
            >
              <figure className="gallery__figure">
                <img
                  src={image.src}
                  alt={image.alt}
                  width="600"
                  height="450"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
