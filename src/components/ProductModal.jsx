import React, { useMemo, useState } from "react";
import { formatPrice } from "../utils/formatPrice";

export default function ProductModal({ item, onClose }) {
  if (!item) return null;

  const sortedPriceGroups = useMemo(() => {
    if (!item.priceGroups) return null;

    return [...item.priceGroups].sort((a, b) => {
      if (a.title === "روبوستا") return -1;
      if (b.title === "روبوستا") return 1;
      return 0;
    });
  }, [item]);

  const [selectedGroup, setSelectedGroup] = useState(0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-handle-wrap">
          <div className="modal-handle"></div>

          <button
            className="modal-close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <img
          className="modal-img"
          src={item.image}
          alt={item.name}
        />

        <div className="modal-content">

          <h2 className="modal-title">
            {item.name}
          </h2>

          <p className="modal-desc">
            {item.description}
          </p>

          <div className="modal-price-box">

            <div className="modal-price-box-title">
              قیمت
            </div>

            {sortedPriceGroups ? (

              <>
                <div className="price-tabs">

                  {sortedPriceGroups.map((group, index) => (

                    <button
                      key={index}
                      className={`price-tab ${selectedGroup === index ? "active" : ""
                        }`}
                      onClick={() => setSelectedGroup(index)}
                    >
                      ☕ {group.title}
                    </button>

                  ))}

                </div>

                <div className="price-tab-content">

                  {sortedPriceGroups[selectedGroup].prices.map((price, i) => (

                    <div
                      key={i}
                      className="modal-price-row"
                    >

                      <span className="modal-price-label">
                        {price.label}
                      </span>

                      <span className="modal-price-amount">
                        {formatPrice(price.amount)}
                      </span>

                    </div>

                  ))}

                </div>

              </>

            ) : (

              item.prices.map((price, i) => (

                <div
                  key={i}
                  className="modal-price-row"
                >

                  <span className="modal-price-label">
                    {price.label}
                  </span>

                  <span className="modal-price-amount">
                    {formatPrice(price.amount)}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>
    </div>
  );
}