import React from "react";

export default function InfoModal({ section, infoContent, onClose }) {
  if (!section) return null;
  const { title, text } = infoContent[section] || {};
  if (!title) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel info-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="info-modal-header">
          <span className="info-modal-title">{title}</span>
          <button className="info-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="info-modal-body">
          <p className="info-modal-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
