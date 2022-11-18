import { Link } from "react-router-dom";
import "./header.css";

export const AppHeader = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <nav className="menu">
          <ul className="menu__inner">
            <li className="menu__item">
              <Link className="menu__link" to="/">
                Fine Art Studio
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/works">
                Works
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/author">
                Author
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
