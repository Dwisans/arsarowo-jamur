import {
  MapPin,
  Phone,
  Calendar,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import Reveal from "./Reveal";
import "./Contact.css";

const PARTNERSHIPS = [
  "Pasokan jamur tiram segar harian untuk restoran, katering & UMKM",
  "Kemitraan reseller & distributor untuk wilayah Semarang dan sekitarnya",
  "Kolaborasi strategis dengan Desa Wisata Bejalen & pelaku wisata",
];

const STEPS = [
  "Hubungi kami via WhatsApp untuk diskusi awal",
  "Tentukan volume pasokan dan jadwal pengiriman",
  "Mulai kerja sama dengan kontrak yang fleksibel",
];

const CONTACTS = [
  {
    icon: MapPin,
    label: "Lokasi",
    text: "Desa Wisata Bejalen, RT. 02/RW. 01, Kec. Ambarawa, Kab. Semarang, Jawa Tengah",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    text: "0857-1379-6309",
  },
  {
    icon: Calendar,
    label: "Jam operasional",
    text: "05.00 – 17.00 WIB (sesuai panen)",
  },
];

const WA_LINK =
  "https://wa.me/6285713796309?text=Halo%20Arsarowo%20Jamur%2C%20saya%20ingin%20membahas%20kerja%20sama%20pasokan%20jamur%20tiram%20segar";

export default function Contact() {
  return (
    <section className="section contact" id="kontak">
      <div className="container">
        <Reveal>
          <div className="contact__panel">
            <span className="contact__watermark" aria-hidden="true">
              Arsarowo Jamur
            </span>

            <div className="contact__intro">
              <h2 className="contact__title">
                Siap menjadi <em>mitra pasokan</em> jamur tiram segar Anda?
              </h2>
              <p className="contact__sub">
                Kami membuka kesempatan kerja sama untuk Anda yang membutuhkan
                pasokan jamur tiram berkualitas secara rutin. Stok harian kami
                terbatas karena mengutamakan kesegaran — namun kami siap
                merencanakan panen khusus untuk memenuhi kebutuhan bisnis Anda.
              </p>

              <ul className="contact__list">
                {PARTNERSHIPS.map((item, i) => (
                  <li key={item}>
                    <span className="contact__list-num">0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="contact__spec">
                {CONTACTS.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <div key={contact.label} className="contact__spec-row">
                      <Icon size={16} strokeWidth={2} aria-hidden="true" />
                      <span className="contact__spec-label">
                        {contact.label}
                      </span>
                      <span className="contact__spec-text">{contact.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="contact__side">
              <p className="contact__side-label">Langkah Mudah Memulai</p>
              <ol className="contact__side-steps">
                {STEPS.map((step, i) => (
                  <li key={step}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg contact__cta-btn"
              >
                <MessageCircle size={20} strokeWidth={2} aria-hidden="true" />
                Hubungi via WhatsApp
              </a>
              <p className="contact__side-note">
                Respon cepat mulai pukul 05.00 WIB. Kunjungan langsung ke
                kumbung dapat dijadwalkan untuk calon mitra.
              </p>

              <div className="contact__map">
                <div className="contact__map-bar">
                  <span className="contact__map-bar-icon">
                    <MapPin size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="contact__map-bar-text">
                    <small>Kunjungi kami</small>
                    <strong>
                      Arsarowo Jamur,Desa Wisata Bejalen, Ambarawa
                    </strong>
                  </span>
                  <a
                    href="https://maps.app.goo.gl/ANCyBH19GmiVwTyg8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__map-open"
                  >
                    Buka di Maps
                    <ExternalLink
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="contact__map-frame">
                  <iframe
                    title="Peta lokasi Arsarowo Jamur, Desa Wisata Bejalen, Ambarawa"
                    src="https://www.google.com/maps?q=Arsarowo+Jamur,+Bejalen+Barat,+Kec.+Ambarawa,+Kabupaten+Semarang,+Jawa+Tengah&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <span className="contact__map-chip">
                    <MapPin size={14} strokeWidth={2} aria-hidden="true" />
                    Bejalen · Ambarawa
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
