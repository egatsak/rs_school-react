import { useLocation } from "react-router-dom";
import AppLink from "../../shared/ui/AppLink/AppLink";
import { NavbarItemList } from "./NavbarItemList";

import styles from "./Navbar.module.css";

const AppRoutesUi: Record<string, string> = {
  "/": "MAIN PAGE",
  "/about": "ABOUT PAGE",
  "/form": "FORM PAGE",
};

function Navbar() {
  const location = useLocation();
  return (
    <header className={styles.navbar}>
      <div>{AppRoutesUi[location.pathname] ?? "NOT FOUND PAGE"}</div>
      <nav className={styles.nav}>
        <ul className={styles["nav-items"]}>
          {NavbarItemList.map((item) => (
            <li key={item.path} className={styles.item}>
              <AppLink to={item.path} className={styles.applink} data-testid={item.dataTestId}>
                {item.text}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
