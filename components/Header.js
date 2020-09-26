import Link from "next/link";

export default function Header({ logoText, menuLinks, menuMoreLinks }) {
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
          {menuLinks.map((link) => (
            <li key={link}>
              <Link href={link}>
                <a>{link}</a>
              </Link>
            </li>
          ))}
          <ul className="menu__sub-inner">
            <li className="menu__sub-inner-more-trigger">Show more ▾</li>
            <ul className="menu__sub-inner-more hidden">
              {menuMoreLinks.map((link) => (
                <li key={link}>
                  <Link href={link}>
                    <a>{link}</a>
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
