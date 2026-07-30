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
            src="/images/nil.webp"
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
              "https://maps.app.goo.gl/لینک_گوگل_مپ",
              "_blank"
            )
          }
        >
          📍 مشاهده موقعیت کافه
        </div>

        {/* Footer */}
        <div
          className="drawer-designer"
          onClick={() => window.location.href = "tel:09133275608"}
        >
          <small>طراحی و توسعه</small>

          <h4>میلاد سعادتمند</h4>

          <span>
            طراحی وب‌سایت، منوی دیجیتال و رابط کاربری
          </span>

          <button
            className="designer-call-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = "tel:09133275608";
            }}
          >
            📞تماس  
          </button>
        </div>
      </aside>
    </>
  );
}