import React from "react";

export default function Header({ title, onMenu }) {
  return (
    <header className="nc-header">
      <button
        className="nc-header-menu-btn"
        onClick={onMenu}
        aria-label="منو"
      >
        ☰
      </button>

      <div className="nc-header-title-wrap">
        <div className="nc-header-title">
          {title}
        </div>
      </div>

      <div className="nc-header-spacer"></div>
    </header>
  );
}