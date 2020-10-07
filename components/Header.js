import { useState } from "react";
import Link from "next/link";

export default function Header({ logoText, menuItems, showMenuItems }) {
  const [showMore, setShowMore] = useState(false);

  // split menuItems into shown and hidden based on `showMenuItems`
  const shownItems = menuItems.slice(0, showMenuItems);
  const hiddenItems = menuItems.slice(showMenuItems);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          {/* partial "logo.html" */}
          <a href="/">
            <div className="logo">{logoText}</div>
          </a>
        </div>
        <div className="menu-trigger hidden">menu</div>
      </div>
      {/* site.menus => menu.html */}
      <nav className="menu">
        <ul className="menu__inner menu__inner--desktop">
          {shownItems.map((item) => (
            <li key={item.identifier}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
          <ul className="menu__sub-inner">
            <li
              className="menu__sub-inner-more-trigger"
              onClick={() => setShowMore((prev) => !prev)}
            >
              Show more ▾
            </li>
            <ul className={`menu__sub-inner-more${showMore ? "" : " hidden"}`}>
              {hiddenItems.map((item) => (
                <li key={item.identifier}>
                  <Link href={item.url}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </ul>
        <ul className="menu__inner menu__inner--mobile">{/*  */}</ul>
      </nav>
    </header>
  );
}
