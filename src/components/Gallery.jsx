import Reveal from './Reveal';
import './Gallery.css';

const IMAGES = [
  {
    src: 'https://placehold.co/900x900/10B981/FFFFFF?text=Suasana+Kumbung',
    alt: 'Suasana kumbung budidaya jamur tiram Arsarowo Jamur',
    label: 'Suasana Kumbung',
    note: 'Rak baglog tersusun rapi',
  },
  {
    src: 'https://placehold.co/600x450/F59E0B/FFFFFF?text=Panen+Pagi',
    alt: 'Hasil panen jamur tiram segar di pagi hari',
    label: 'Panen Pagi',
    note: 'Pukul 05.00 WIB',
  },
  {
    src: 'https://placehold.co/600x450/0EA372/FFFFFF?text=Penyiraman+Eco+Enzyme',
    alt: 'Penyiraman jamur menggunakan eco enzyme',
    label: 'Penyiraman Eco Enzyme',
    note: 'Tiap 2–3 hari',
  },
  {
    src: 'https://placehold.co/600x450/7C4A2A/FFFFFF?text=Baglog+Baru',
    alt: 'Baglog media tanam jamur tiram yang baru disusun',
    label: 'Baglog Baru',
    note: 'Media tanam pilihan',
  },
  {
    src: 'https://placehold.co/600x450/D97706/FFFFFF?text=Sortasi+Hasil+Panen',
    alt: 'Proses sortasi jamur tiram sebelum dipasarkan',
    label: 'Sortasi Panen',
    note: 'Pilih kualitas terbaik',
  },
  {
    src: 'https://placehold.co/900x450/10B981/FFFFFF?text=Jamur+Tiram+Siap+Kirim',
    alt: 'Jamur tiram segar siap dikirim ke pelanggan',
    label: 'Siap Kirim',
    note: 'Kesegaran terjamin',
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeri">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-eyebrow">No. 04 — Galeri</p>
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