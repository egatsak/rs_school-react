import { Component } from "react";
import AppLink from "../../shared/ui/AppLink/AppLink";
import { RoutePath } from "../../router/";
import styles from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <AppLink to={RoutePath.main} className={styles.item} data-testid="main-link">
          Main
        </AppLink>

        <AppLink to={RoutePath.about} className={styles.item} data-testid="about-link">
          About
        </AppLink>
      </nav>
    );
  }
}
