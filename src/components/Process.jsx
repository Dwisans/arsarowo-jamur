import { Package, Thermometer, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import "./Process.css";

const STEPS = [
  {
    icon: Package,
    tag: "Media",
    title: "Media tanam (baglog) pilihan",
    text: "Dimulai dari baglog bernilai Rp2.500 per buah yang disiapkan khusus untuk pertumbuhan optimal jamur tiram.",
  },
  {
    icon: Thermometer,
    tag: "Iklim",
    title: "Manajemen kumbung ideal",
    text: "Kelembapan kumbung dijaga tetap seimbang — tidak terlalu kering yang membuat jamur layu, dan tidak terlalu basah yang menurunkan kualitas.",
  },
  {
    icon: ShieldCheck,
    tag: "Kebersihan",
    title: "Pengendalian hama aman",
    text: "Kebersihan dijaga ketat untuk mencegah hama rengit, memastikan jamur tetap bersih, sehat, dan bebas ulat.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="proses">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            Mengintip proses <em>40 hari</em> di dalam kumbung.
          </h2>
          <p className="section-sub">
            Transparansi adalah komitmen kami — setiap tahap dilalui dengan
            standar yang ketat.
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
                <strong>Siklus penuh.</strong> Dari penyiapan baglog,
                pemeliharaan kumbung, hingga panen — tiga tahap utama yang
                menentukan kualitas jamur:
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
