import Link from "next/link";

export default function Header({ logoText, menuItems }) {
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
      <nav className="mneu">
        <ul className="menu__inner menu__inner--desktop">
          {menuItems.map((item, i) => (
            <li>
              <Link href={item}>
                <a>{item}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="menu__inner menu__inner--mobile">{/*  */}</ul>
      </nav>
    </header>
  );
}
