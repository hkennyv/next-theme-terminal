import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({ logoText, menuItems, showMenuItems }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreDesktop, setShowMoreDesktop] = useState(false);
  const [showMoreMobile, setShowMoreMobile] = useState(false);

  function windowIsMobile() {
    const mobileQuery = getComputedStyle(document.body).getPropertyValue(
      "--phoneWidth"
    );
    return window.matchMedia(mobileQuery).matches;
  }

  useEffect(() => {
    setIsMobile(windowIsMobile());
  }, []);

  // handle toggling classes for mobile
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(windowIsMobile());
    });
  }, []);

  // split menuItems into shown and hidden based on `showMenuItems`
  const shownItems = menuItems.slice(0, showMenuItems);
  const hiddenItems = menuItems.slice(showMenuItems);

  // renders menu items into a <li> elements
  function renderMenuItems(items) {
    return items.map((item) => (
      <li key={item.identifier}>
        <Link href={item.url}>
          <a>{item.name}</a>
        </Link>
      </li>
    ));
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          {/* partial "logo.html" */}
          <a href="/">
            <div className="logo">{logoText}</div>
          </a>
        </div>
        <div
          className={`menu-trigger${isMobile ? "" : " hidden"}`}
          onClick={() => setShowMoreMobile((prev) => !prev)}
        >
          menu
        </div>
      </div>
      {/* site.menus => menu.html */}
      <nav className={`menu${isMobile && !showMoreMobile ? " hidden" : ""}`}>
        <ul className="menu__inner menu__inner--desktop">
          {renderMenuItems(shownItems)}
          <ul className="menu__sub-inner">
            <li
              className="menu__sub-inner-more-trigger"
              onClick={() => setShowMoreDesktop((prev) => !prev)}
            >
              Show more ▾
            </li>
            <ul
              className={`menu__sub-inner-more${
                showMoreDesktop ? "" : " hidden"
              }`}
            >
              {renderMenuItems(hiddenItems)}
            </ul>
          </ul>
        </ul>
        <ul className="menu__inner menu__inner--mobile">
          {renderMenuItems(shownItems)}
          {renderMenuItems(hiddenItems)}
        </ul>
      </nav>
    </header>
  );
}
