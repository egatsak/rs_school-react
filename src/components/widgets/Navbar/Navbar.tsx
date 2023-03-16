import { Component } from "react";
import AppLink from "../../shared/ui/AppLink/AppLink";
import { withRouter, WithRouterProps } from "../../router/provider/withRouter";
import { RoutePath } from "../../router/";
import styles from "./Navbar.module.css";

const AppRoutesUi: Record<string, string> = {
  "/": "MAIN PAGE",
  "/about": "ABOUT PAGE",
};

class Navbar extends Component<WithRouterProps> {
  constructor(props: WithRouterProps) {
    super(props);
  }
  render() {
    return (
      <nav className={styles.navbar}>
        <div>{AppRoutesUi[this.props.location.pathname] ?? "NOT FOUND PAGE"}</div>
        <div className={styles["nav-items"]}>
          <AppLink to={RoutePath.main} className={styles.item} data-testid="main-link">
            Main
          </AppLink>

          <AppLink to={RoutePath.about} className={styles.item} data-testid="about-link">
            About
          </AppLink>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
