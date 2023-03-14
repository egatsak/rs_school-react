import { Component } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./AppLink.module.css";

export default class Applink extends Component<LinkProps> {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    const { to, children, ...otherProps } = this.props;

    return (
      <NavLink to={to} {...otherProps}>
        {children}
      </NavLink>
    );
  }
}
