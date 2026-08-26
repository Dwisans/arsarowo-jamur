import Reveal from "./Reveal";
import "./Gallery.css";

const IMAGES = [
  {
    src: "./images/kumbung.jpg",
    alt: "Suasana kumbung budidaya jamur tiram Arsarowo Jamur",
    label: "Suasana Kumbung",
    note: "Rak baglog tersusun rapi",
  },
  {
    src: "./images/panen.png",
    alt: "Hasil panen jamur tiram segar di pagi hari",
    label: "Panen Pagi",
    note: "Pukul 05.00 WIB",
  },
  {
    src: "./images/penyiraman.png",
    alt: "Penyiraman jamur menggunakan eco enzyme",
    label: "Penyiraman Eco Enzyme",
    note: "Tiap 2–3 hari",
  },
  {
    src: "./images/baglog.jpg",
    alt: "Baglog media tanam jamur tiram yang baru disusun",
    label: "Baglog Baru",
    note: "Media tanam pilihan",
  },
  {
    src: "./images/sortasi-panen.png",
    alt: "Proses sortasi jamur tiram sebelum dipasarkan",
    label: "Sortasi Panen",
    note: "Pilih kualitas terbaik",
  },
  {
    src: "./images/jamur.jpg",
    alt: "Jamur tiram segar siap dikirim ke pelanggan",
    label: "Siap Kirim",
    note: "Kesegaran terjamin",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeri">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            Potret <em>budidaya</em> dari dalam kumbung.
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
                <figcaption className="gallery__cap">
                  <span>{image.label}</span>
                  <small>{image.note}</small>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
