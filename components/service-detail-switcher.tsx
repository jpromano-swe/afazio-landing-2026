"use client";

import { useState } from "react";

export type ServiceDetailItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  includes: readonly string[];
};

type ServiceDetailSwitcherProps = {
  name: string;
  items: readonly ServiceDetailItem[];
  align?: "default" | "reverse";
};

export function ServiceDetailSwitcher({
  name,
  items,
  align = "default",
}: ServiceDetailSwitcherProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) return null;

  return (
    <div className="service-switcher" data-align={align}>
      <div className="service-detail-stage" aria-live="polite">
        <div className="service-detail-card">
          <div className="service-detail-content" key={active.id}>
            <div className="service-detail-meta">Detalle del servicio</div>
            <h4 className="service-detail-title">{active.title}</h4>
            <p className="service-detail-summary">{active.summary}</p>
            <p className="service-detail-body">{active.detail}</p>
            <div className="service-detail-subtitle">Incluye</div>
            <ul className="service-detail-list">
              {active.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="service-feature-nav"
        role="tablist"
        aria-label={`Opciones de ${name}`}
      >
        {items.map((item) => {
          const selected = item.id === active.id;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className="service-feature-item"
              data-selected={selected}
              onClick={() => setActiveId(item.id)}
            >
              <span className="service-feature-title">{item.title}</span>
              {selected ? (
                <span className="service-feature-summary">{item.summary}</span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
