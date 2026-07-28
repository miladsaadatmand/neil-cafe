import React from "react";

export default function CategorySidebar({
  categories,
  selected,
  onSelect,
}) {
  const allTabs = [
    { id: null, name: "همه", emoji: "🍽️" },
    ...categories,
  ];

  return (
    <div className="nc-category-wrapper">
      <div className="nc-category-scroll">
        {allTabs.map((cat) => {
          const active = selected === cat.id;

          return (
            <button
              key={cat.id ?? "all"}
              onClick={() => onSelect(cat.id)}
              className={`nc-category-pill ${active ? "active" : ""
                }`}
            >
              <span className="nc-category-icon">
                {cat.emoji}
              </span>

              <span className="nc-category-name">
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}