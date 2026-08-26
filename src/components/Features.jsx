import { Clock, Leaf, Recycle } from "lucide-react";
import Reveal from "./Reveal";
import "./Features.css";

const FEATURES = [
  {
    icon: Clock,
    code: "AR-01",
    status: "Standar",
    tag: "Kesegaran terjamin",
    title: "Panen dua kali sehari, setiap hari",
    text: "Kami memanen jamur tepat pukul 05.00 dan 15.00 WIB. Ritual dua kali sehari ini memastikan setiap helai jamur tiram dalam kondisi prima — tekstur renyah, rasa gurih, dan kesegaran yang bertahan lebih lama di meja Anda.",
    data: "Pukul 05.00 & 15.00 WIB",
  },
  {
    icon: Leaf,
    code: "AR-02",
    status: "Standar",
    tag: "Nutrisi alami",
    title: "Dibudidayakan dengan eco enzyme",
    text: "Kami menggunakan eco enzyme alami sebagai media nutrisi utama. Tanpa bahan kimia sintetis, jamur tumbuh lebih subur, lebih sehat, dan menghasilkan rasa yang autentik — aman untuk konsumsi langsung.",
    data: "Nutrisi tiap 2–3 hari",
  },
  {
    icon: Recycle,
    code: "AR-03",
    status: "Standar",
    tag: "Berkelanjutan",
    title: "Praktik zero waste yang nyata",
    text: "Setiap limbah baglog tidak kami buang. Kamiolah menjadi pupuk kompos yang kembali menyuburkan lahan. Sementara jamur di luar standar pasar dimanfaatkan sebagai pakan ikan tambak — tanpa satu pun limbah terbuang sia-sia.",
    data: "Limbah 100% terolah",
  },
];

const MODS = ["feature-card--a", "feature-card--b", "feature-card--c"];

export default function Features() {
  return (
    <section className="section features" id="keunggulan">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            Mengapa mitra memilih <em>Arsarowo Jamur?</em>
          </h2>
          <p className="section-sub">
            Tiga pilar yang kami jaga tanpa kompromi — sehingga pasokan jamur
            tiram Anda selalu segar, konsisten, dan berkelanjutan.
          </p>
        </Reveal>

        <div className="features__grid">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={i * 150}
                className="feature-card-wrap"
              >
                <article className={`feature-card ${MODS[i % MODS.length]}`}>
                  <span className="feature-card__ghost" aria-hidden="true">
                    0{i + 1}
                  </span>

                  <div className="feature-card__top">
                    <span className="feature-card__code">{feature.code}</span>
                    <span className="feature-card__rule" aria-hidden="true" />
                    <span className="feature-card__status">
                      {feature.status}
                    </span>
                  </div>

                  <div className="feature-card__icon-frame">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <p className="feature-card__tag">{feature.tag}</p>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__text">{feature.text}</p>

                  <p className="feature-card__foot">
                    <span className="feature-card__foot-label">Data</span>
                    <span className="feature-card__foot-value">
                      {feature.data}
                    </span>
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
