import React from "react";

export default function SidebarDrawer({
  open,
  items,
  onClose,
  onNavigate,
}) {
  if (!open) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />

      <aside className="drawer-panel">

        {/* Close */}
        <button className="drawer-close" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <div className="drawer-profile">

          <img
            src="/images/drawer.header.webp"
            alt="Nil Cafe"
            className="drawer-logo"
          />

          <h2>نیل کافه</h2>

          <p>
            Coffee • Breakfast • Dessert
          </p>

        </div>

        {/* Menu */}
        <div className="drawer-menu">

          {items.map((item) => (
            <button
              key={item.id}
              className="drawer-item"
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
            >
              <div className="drawer-left">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>

              <span>›</span>
            </button>
          ))}

        </div>

        {/* Divider */}
        <div className="drawer-divider" />

        {/* Contact */}
        <div
          className="drawer-contact"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/35%C2%B043'47.7%22N+51%C2%B030'11.4%22E/@35.7299176,51.5005797,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.7299176!4d51.5031546?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D",
              "_blank"
            )
          }
        >
          📍 مشاهده موقعیت کافه
        </div>
        {/* Footer */}
      </aside>
    </>
  );
}