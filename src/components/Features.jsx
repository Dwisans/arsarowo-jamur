import { Clock, Leaf, Recycle } from 'lucide-react';
import Reveal from './Reveal';
import './Features.css';

const FEATURES = [
  {
    icon: Clock,
    code: 'AR-01',
    status: 'Laporan',
    tag: 'Kesegaran terjamin',
    title: 'Dipanen pada waktu terbaik',
    text: 'Kami memanen tepat dua kali sehari, pukul 05.00 dan 15.00 WIB, agar jamur tidak terlalu tua — tekstur sempurna dan kesegaran awet saat diolah.',
    data: 'Jadwal 05.00 & 15.00 WIB',
  },
  {
    icon: Leaf,
    code: 'AR-02',
    status: 'Laporan',
    tag: 'Sehat & produktif',
    title: 'Nutrisi alami eco enzyme',
    text: 'Air penyiraman dipadukan eco enzyme alami setiap dua hingga tiga hari. Hasilnya jamur tumbuh lebih sehat, produktif, dan aman dikonsumsi.',
    data: 'Interval 2–3 hari',
  },
  {
    icon: Recycle,
    code: 'AR-03',
    status: 'Laporan',
    tag: 'Zero waste',
    title: 'Ramah lingkungan, zero waste',
    text: 'Limbah baglog diolah kembali menjadi pupuk kompos subur, sementara jamur reject dimanfaatkan optimal sebagai pakan ikan tambak.',
    data: 'Limbah jadi kompos',
  },
];

const MODS = ['feature-card--a', 'feature-card--b', 'feature-card--c'];

export default function Features() {
  return (
    <section className="section features" id="keunggulan">
      <div className="container">
        <Reveal className="section-head">
          <p className="section-eyebrow">No. 02 — Keunggulan</p>
          <h2 className="section-title">
            Mengapa memilih jamur <em>Arsarowo?</em>
          </h2>
          <p className="section-sub">
            Tiga komitmen yang kami jaga setiap hari agar pasokan Anda selalu segar,
            sehat, dan ramah lingkungan.
          </p>
        </Reveal>

        <div className="features__grid">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 150} className="feature-card-wrap">
                <article className={`feature-card ${MODS[i % MODS.length]}`}>
                  <span className="feature-card__ghost" aria-hidden="true">
                    0{i + 1}
                  </span>

                  <div className="feature-card__top">
                    <span className="feature-card__code">{feature.code}</span>
                    <span className="feature-card__rule" aria-hidden="true" />
                    <span className="feature-card__status">{feature.status}</span>
                  </div>

                  <div className="feature-card__icon-frame">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <p className="feature-card__tag">{feature.tag}</p>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__text">{feature.text}</p>

                  <p className="feature-card__foot">
                    <span className="feature-card__foot-label">Data</span>
                    <span className="feature-card__foot-value">{feature.data}</span>
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}