"use client";

import { useState } from "react";

type ContactComposerProps = {
  email: string;
  whatsappPhone: string;
};

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

export function ContactComposer({ email, whatsappPhone }: ContactComposerProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const safeName = name.trim() || "Tu nombre";
  const safeCategory = category || "traducción";
  const whatsappDigits = whatsappPhone.replace(/\D/g, "");

  const whatsappMessage = `Hola, que tal? Me llamo ${safeName} y en tu pagina web vi que ofreces un servicio de ${safeCategory}. Podrias darme mas informacion?`;
  const mailBody = `Buen dia, mi nombre es ${safeName} y en tu pagina web vi que ofrecias un servicio de ${safeCategory}. Podrias darme mas informacion?`;
  const mailSubject = `Consulta sobre ${safeCategory}`;

  const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    mailSubject,
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <div className="contact-composer" role="group" aria-label="Canales de contacto">
      <div className="contact-fields">
        <label className="contact-field">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="contact-field">
          <span>Categoría</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="Clases de inglés">Clases de inglés</option>
            <option value="Traducciones">Traducciones</option>
            <option value="Traducción pública / legal">
              Traducción pública / legal
            </option>
          </select>
        </label>
      </div>

      <div className="contact-composer-actions" aria-label="Acciones rápidas">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="contact-icon-btn contact-icon-btn-whatsapp"
          aria-label="Abrir WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={mailHref}
          className="contact-icon-btn contact-icon-btn-mail"
          aria-label="Enviar email"
        >
          <MailIcon />
        </a>
      </div>
    </div>
  );
}
