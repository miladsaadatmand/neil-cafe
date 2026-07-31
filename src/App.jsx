import React, { useState, useMemo } from "react";
import {
  CATEGORIES,
  MENU_ITEMS,
  INFO_CONTENT,
  CAFE_CONFIG,
  DRAWER_ITEMS,
} from "./data/menuData";

import Header from "./components/Header";
import CategorySidebar from "./components/CategorySidebar";
import MenuCard from "./components/MenuCard";
import EmptyState from "./components/EmptyState";
import SidebarDrawer from "./components/SidebarDrawer";
import ProductModal from "./components/ProductModal";
import InfoModal from "./components/InfoModal";
// import ContactFab from "./components/ContactFab";
import WelcomeSplash from "./components/WelcomeSplash";

import "./styles/App.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [catId, setCatId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [infoSection, setInfoSection] = useState(null);

  const filtered = useMemo(() => {
    return catId
      ? MENU_ITEMS.filter((i) => i.categoryId === catId)
      : MENU_ITEMS;
  }, [catId]);

  const handleNavigate = (id) => {
    switch (id) {
      case "menu":
        setCatId(null);
        break;

      case "about":
        setInfoSection("about");
        break;

      case "share":
        if (navigator.share) {
          navigator.share({
            title: CAFE_CONFIG.name,
            text: `منوی ${CAFE_CONFIG.name} را ببین ☕`,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("لینک منو کپی شد.");
        }
        break;

      case "location":
        window.open(
          "https://www.google.com/maps?q=35.729917605477866,51.503154560923576",
          "_blank",
          "noopener,noreferrer"
        );
        break; case "designer":
        window.location.href = "tel:09133275608";
        break;

      default:
        if (INFO_CONTENT[id]) {
          setInfoSection(id);
        }
        break;
    }
  };

  return (
    <div
      className="neil-cafe-root"
      style={{
        "--nc-primary": CAFE_CONFIG.primaryColor,
        "--nc-bg": CAFE_CONFIG.backgroundColor,
      }}
    >
      {showSplash && (
        <WelcomeSplash
          cafeName={CAFE_CONFIG.name}
          duration={3000}
          onFinish={() => setShowSplash(false)}
        />
      )}

      <div className="nc-container">
        <Header
          title={CAFE_CONFIG.name}
          onMenu={() => setDrawerOpen(true)}
        />

        <div className="nc-body">
          <CategorySidebar
            categories={CATEGORIES}
            selected={catId}
            onSelect={setCatId}
          />

          <div className="nc-content">
            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              filtered.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onClick={setSelectedItem}
                />
              ))
            )}
          </div>
        </div>

        {/* <ContactFab phone={CAFE_CONFIG.phone} /> */}

        <SidebarDrawer
          open={drawerOpen}
          title={CAFE_CONFIG.name}
          items={DRAWER_ITEMS}
          onClose={() => setDrawerOpen(false)}
          onNavigate={handleNavigate}
        />

        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />

        <InfoModal
          section={infoSection}
          infoContent={INFO_CONTENT}
          onClose={() => setInfoSection(null)}
        />
      </div>
    </div>
  );
}