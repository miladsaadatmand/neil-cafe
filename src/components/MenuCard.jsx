import React from "react";
import { formatPrice } from "../utils/formatPrice";

export default function MenuCard({ item, onClick }) {
  const hasPriceGroups =
    item.priceGroups && item.priceGroups.length > 0;

  return (
    <div
      className="nc-card"
      onClick={() => hasPriceGroups && onClick(item)}
      style={{ cursor: hasPriceGroups ? "pointer" : "default" }}
    >
      <img
        className="nc-card-img"
        src={item.image || "/images/placeholder.jpg"}
        alt={item.name}
        loading="lazy"
      />

      <div className="nc-card-body">
        <div className="nc-card-name">
          {item.name}
        </div>

        {hasPriceGroups ? (
          <div className="nc-card-view-details">
            مشاهده جزئیات
          </div>
        ) : (
          <>
            {item.description && (
              <div className="nc-card-desc">
                {item.description}
              </div>
            )}

            {item.prices?.map((price, index) => (
              <div className="nc-card-price" key={index}>
                <span>
                  {price.label}
                </span>

                <span>
                  {formatPrice(price.amount)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}