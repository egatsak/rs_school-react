import { Component } from "react";
import AppLink from "../../shared/ui/AppLink/AppLink";
import { NavbarItemList } from "./NavbarItemList";
import { withRouter, WithRouterProps } from "../../router/provider/withRouter";

import styles from "./Navbar.module.css";
import { RoutePath } from "../../router";

const AppRoutesUi: Record<string, string> = {
  "/": "MAIN PAGE",
  "/about": "ABOUT PAGE",
  "/form": "FORM PAGE",
};

class Navbar extends Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
  }
  render() {
    return (
      <header className={styles.navbar}>
        <div>{AppRoutesUi[this.props.location.pathname] ?? "NOT FOUND PAGE"}</div>
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
}

export default withRouter(Navbar);
