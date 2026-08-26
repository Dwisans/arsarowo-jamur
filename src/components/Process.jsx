import { Package, Thermometer, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import "./Process.css";

const STEPS = [
  {
    icon: Package,
    tag: "Media",
    title: "Baglog pilihan, siap untuk pertumbuhan",
    text: "Setiap siklus dimulai dari baglog berkualitas tinggi yang disiapkan secara khusus. Media tanam yang tepat menjadi fondasi jamur tiram dengan tekstur dan rasa terbaik.",
  },
  {
    icon: Thermometer,
    tag: "Iklim",
    title: "Kumbung terkontrol, pertumbuhan optimal",
    text: "Kelembapan dan suhu kumbung kami jaga tetap ideal — tidak terlalu kering agar jamur tidak layu, tidak terlalu lembab agar kualitas tetap terjaga. Setiap detail diperhatikan.",
  },
  {
    icon: ShieldCheck,
    tag: "Kebersihan",
    title: "Hama terkendali, kualitas terjamin",
    text: "Protokol kebersihan ketat diterapkan di setiap sudut kumbung. Pencegahan hama dilakukan secara preventif — memastikan jamur tiram yang Anda terima bersih, sehat, dan bebas dari kontaminasi.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="proses">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            Proses budidaya <em>40 hari</em> yang kami jalani dengan standar
            ketat.
          </h2>
          <p className="section-sub">
            Transparansi bukan sekadar janji — kami ajak Anda melihat setiap
            tahap yang menentukan kualitas jamur tiram yang Anda terima.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="process__note">
            <span className="process__note-num">
              <strong>40</strong>
              <small>hari</small>
            </span>
            <span className="process__note-body">
              <span className="process__note-icon">
                <Sparkles size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <span>
                <strong>Siklus penuh.</strong> Dari persiapan media tanam,
                pemeliharaan kumbung yang intensif, hingga momen panen — tiga
                tahap krusial yang kami lalui tanpa kompromi untuk menghasilkan
                jamur tiram kelas premium:
              </span>
            </span>
          </p>
        </Reveal>

        <div className="process__steps">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={i * 150}
                className="process__step-wrap"
              >
                <article className="process__step">
                  <span className="process__step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="process__step-ghost" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="process__step-tag">{step.tag}</p>

                  <div className="process__step-icon-frame">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-text">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
