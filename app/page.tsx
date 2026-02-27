import Image from "next/image";
import { AnimatedQuote } from "@/components/animated-quote";
import { ContactComposer } from "@/components/contact-composer";
import { LogoCloud } from "@/components/logo-cloud";
import {
  ServiceDetailSwitcher,
  type ServiceDetailItem,
} from "@/components/service-detail-switcher";
import { SiteHeader } from "@/components/site-header";

const classServices: readonly ServiceDetailItem[] = [
  {
    id: "general",
    title: "Inglés general",
    summary: "Base sólida para comunicación cotidiana y profesional.",
    detail:
      "Programa orientado a nivelar, actualizar y consolidar el idioma con foco en uso real, claridad y seguridad al hablar.",
    includes: [
      "Diagnóstico inicial de nivel",
      "Plan de trabajo según objetivos",
      "Práctica oral y escrita",
      "Refuerzo de gramática aplicada",
      "Material adaptado al ritmo del alumno",
    ],
  },
  {
    id: "viajes-reuniones",
    title: "Inglés para viajes y reuniones",
    summary: "Preparación práctica para situaciones laborales reales.",
    detail:
      "Entrenamiento de vocabulario y estructuras para reuniones, intercambios profesionales, viajes de trabajo y presentaciones breves.",
    includes: [
      "Simulación de reuniones",
      "Small talk profesional",
      "Vocabulario de viaje y agenda",
      "Práctica de comprensión auditiva",
      "Correcciones de pronunciación y claridad",
    ],
  },
  {
    id: "tecnico",
    title: "Capacitación en inglés técnico",
    summary: "Terminología y precisión para contextos específicos.",
    detail:
      "Capacitaciones para equipos o profesionales que necesitan desenvolverse con terminología técnica en su área de trabajo.",
    includes: [
      "Relevamiento del rubro y necesidades",
      "Glosario técnico básico y avanzado",
      "Lectura y análisis de documentos",
      "Comunicación oral en contexto técnico",
      "Práctica con casos reales de trabajo",
    ],
  },
];

const translationServices: readonly ServiceDetailItem[] = [
  {
    id: "legal-publica",
    title: "Traducción legal / pública",
    summary: "Documentación formal con criterio terminológico y consistencia.",
    detail:
      "Trabajo de traducción con foco en exactitud, estructura y registro para documentación que requiere claridad y presentación formal.",
    includes: [
      "Documentación personal y académica",
      "Textos legales y administrativos",
      "Control de consistencia terminológica",
      "Revisión final de formato y legibilidad",
    ],
  },
  {
    id: "corporativa",
    title: "Traducciones corporativas",
    summary: "Mensajes institucionales y materiales de trabajo.",
    detail:
      "Traducciones inglés-español para empresas, equipos y profesionales que necesitan comunicar con tono claro y profesional.",
    includes: [
      "Presentaciones y materiales internos",
      "Comunicación institucional",
      "Contenido digital",
      "Ajuste de tono según audiencia",
    ],
  },
  {
    id: "edicion-correccion",
    title: "Edición y corrección bilingüe",
    summary: "Revisión de estilo, claridad y coherencia.",
    detail:
      "Corrección y edición de textos en inglés o español para mejorar legibilidad, consistencia y calidad final antes de entregar o publicar.",
    includes: [
      "Corrección ortográfica y gramatical",
      "Edición de estilo",
      "Consistencia de términos",
      "Ajuste de redacción y tono",
    ],
  },
];

const logos = [
  "Accenture",
  "EY",
  "PwC",
  "Globant",
  "Mercado Libre",
  "Santander",
  "BBVA",
  "Swiss Medical",
  "Naranja X",
  "Unilever",
];

const CONTACT_PHONE = "+541159351137";
const CONTACT_EMAIL = "fazio.antonellaa@gmail.com";
const CONTACT_LINKEDIN =
  "https://www.linkedin.com/in/antonella-fazio-804600122/";
const WHATSAPP_HREF = "https://wa.me/541159351137";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.5 22l5.3-1.1A9.8 9.8 0 1 0 12 2Zm0 17.9a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.6.6-3-.2-.3a8.1 8.1 0 1 1 7.1 4Z"
        fill="currentColor"
      />
      <path
        d="M16.6 14.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.8c-.1.1-.3.2-.5.1a6.5 6.5 0 0 1-3-2.6c-.1-.2 0-.3.1-.5l.5-.6.2-.4c.1-.1 0-.3 0-.4l-.7-1.6c-.1-.3-.3-.2-.5-.2h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.8.6.4 0 1.4-.6 1.5-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.8 8.5H3.6V20h3.2V8.5Zm-1.6-5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.4c0-3.3-1.8-4.9-4.3-4.9-2 0-2.9 1.1-3.4 1.9v-1.6H9.5V20h3.2v-6c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2v5.8H20v-6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.5 5.5h17a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm0 2v.2l8.5 6.1 8.5-6.1v-.2h-17Zm17 9v-6.3l-7.9 5.7a1 1 0 0 1-1.2 0l-7.9-5.7v6.3h17Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="landing">
      <div className="ambient ambient-1" aria-hidden="true" />
      <div className="ambient ambient-2" aria-hidden="true" />

      <SiteHeader />

      <section id="inicio" className="hero reveal">
        <div className="hero-limit">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Comunicación clara.
                <br />
                <span
                  className="hero-flip"
                  aria-label="En inglés. En español."
                >
                  <span
                    className="hero-flip-item hero-flip-item-accent"
                    aria-hidden="true"
                  >
                    En inglés.
                  </span>
                  <span className="hero-flip-item" aria-hidden="true">
                    En español.
                  </span>
                </span>
              </h1>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Solicitar consulta
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-blob" />
            </div>
          </div>
          <div className="hero-role-legends" aria-label="Roles">
            <span>Public Translator</span>
            <span>ESL Teacher</span>
          </div>
        </div>
      </section>

      <section id="perfil" className="panel profile reveal">
        <div className="section-shell manifesto-shell">
          <div className="manifesto-kicker" aria-label="Manifiesto">
            <span aria-hidden="true" />
            Manifiesto
            <span aria-hidden="true" />
          </div>

          <AnimatedQuote
            className="manifesto-quote"
            text="“El lenguaje es la arquitectura de la confianza profesional.”"
          />

          <div className="manifesto-body">
            <p className="manifesto-paragraph manifesto-dropcap">
              Traducir en contextos legales y corporativos exige algo más que
              precisión técnica: requiere criterio, intención y lectura del
              contexto.
            </p>
            <p className="manifesto-paragraph">
              Cada documento tiene una voz, un objetivo y una responsabilidad.
              Mi trabajo es conservar ese valor en inglés y en español, con
              claridad, coherencia y un estándar profesional constante.
            </p>
            <p className="manifesto-paragraph">
              Hoy combino traducción pública, proyectos corporativos y enseñanza
              de inglés para acompañar a personas y equipos que necesitan
              comunicar con seguridad en ambos idiomas.
            </p>
          </div>

          <div className="manifesto-sign">
            <strong>Antonella Fazio</strong>
            <span>Traductora pública y docente de inglés</span>
          </div>
        </div>
      </section>

      <section id="servicios" className="panel services reveal">
        <div className="section-shell">
          <div className="services-header">
            <h2 className="section-title">Servicios</h2>
          </div>
          <div className="services-stack">
            <article className="service-block" id="clases-ingles">
              <div className="service-block-head">
                <div>
                  <h3 className="service-block-title">Clases de ingles</h3>
                </div>
              </div>
              <ServiceDetailSwitcher
                name="clases de inglés"
                items={classServices}
              />
              <div className="service-brand-strip">
                <div className="service-brand-label">
                  Marcas con las que trabajé en clases corporativas
                </div>
                <LogoCloud
                  embedded
                  logos={logos}
                  ariaLabel="Carrusel de marcas asociado a clases de inglés"
                />
              </div>
            </article>

            <article className="service-block service-block-reverse" id="traducciones">
              <div className="service-block-head">
                <div>
                  <h3 className="service-block-title">Traducciones Inglés - Español</h3>
                </div>
              </div>
              <ServiceDetailSwitcher
                name="traducciones"
                items={translationServices}
                align="reverse"
              />
            </article>
          </div>
        </div>
      </section>

      <section id="contacto" className="panel cta-panel reveal">
        <div className="section-shell cta-shell">
          <div className="contact-showcase">
            <div className="contact-showcase-copy">
              <h2 className="contact-title">Conversemos sobre tu necesidad.</h2>
              <p className="section-copy">
                Consultas por traducción pública, traducciones corporativas o
                clases de inglés para profesionales y empresas.
              </p>
            </div>

            <ContactComposer email={CONTACT_EMAIL} whatsappPhone={CONTACT_PHONE} />
          </div>
        </div>
      </section>

      <footer className="site-footer reveal" aria-labelledby="footer-title">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand-col">
              <a href="#inicio" className="footer-brand" id="footer-title">
                <Image
                  src="/logo-placeholder-removebg-preview.png"
                  alt="Afazio"
                  width={220}
                  height={106}
                  className="footer-brand-logo"
                />
              </a>
            </div>

            <div className="footer-links-col">
              <h3>Servicios</h3>
              <a href="#clases-ingles">Clases de inglés</a>
              <a href="#traducciones">Traducciones</a>
              <a href="#contacto">Solicitar consulta</a>
            </div>

            <div className="footer-links-col">
              <h3>Perfil</h3>
              <a href="#perfil">Sobre mí</a>
              <a href="#servicios">Cómo trabajo</a>
              <a href="#contacto">Contacto</a>
            </div>

            <div className="footer-links-col">
              <h3>Redes</h3>
              <div className="footer-social-row">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href={CONTACT_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Afazio. Todos los derechos reservados</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
