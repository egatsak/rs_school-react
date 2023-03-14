import React, { Component } from "react";
import { RoutePath } from "../../router/config/routeConfig";
import AppLink from "../../shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.css";

interface NavbarProps {
  children?: React.ReactNode;
}

export default class Navbar extends Component<NavbarProps> {
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
