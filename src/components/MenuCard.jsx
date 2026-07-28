import React from "react";

export default function MenuCard({ item, onClick }) {
  return (
    <div className="nc-card" onClick={() => onClick(item)}>
      <img
        className="nc-card-img"
        src={item.image}
        alt={item.name}
        loading="lazy"
      />

      <div className="nc-card-body">

        <div className="nc-card-name">
          {item.name}
        </div>

        <div className="nc-card-desc">
          {item.description}
        </div>

        <div className="nc-card-view-details">
          مشاهده جزئیات
        </div>

      </div>
    </div>
  );
}