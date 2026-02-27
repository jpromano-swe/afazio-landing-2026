type ServiceItem = {
  title: string;
  badge?: string;
  description: string;
  bullets: readonly string[];
};

type ServiceAccordionProps = {
  items: readonly ServiceItem[];
};

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  return (
    <div className="service-list">
      {items.map((item, index) => (
        <details
          className="service-item"
          key={item.title}
          open={index === 0}
        >
          <summary>
            <div className="service-title-wrap">
              <span className="service-title">{item.title}</span>
              {item.badge ? <span className="service-badge">{item.badge}</span> : null}
            </div>
            <span className="service-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="service-content">
            <p>{item.description}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
