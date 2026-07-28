import React from "react";

export default function SidebarDrawer({ open, title, items, onClose, onNavigate }) {
  if (!open) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-panel">
        <div className="drawer-header">
          <span className="drawer-title">{title}</span>
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>
        {items.map((it) => (
          <button
            key={it.id}
            className="drawer-item"
            onClick={() => {
              onNavigate(it.id);
              onClose();
            }}
          >
            <div className="drawer-item-left">
              <span className="drawer-item-icon">{it.icon}</span>
              <span className="drawer-item-label">{it.label}</span>
            </div>
            <span className="drawer-item-arrow">‹</span>
          </button>
        ))}
      </div>
    </>
  );
}
