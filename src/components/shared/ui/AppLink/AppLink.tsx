import { FC } from "react";
import { NavLink, LinkProps } from "react-router-dom";

const AppLink: FC<LinkProps> = (props) => {
  const { to, children, ...otherProps } = props;

  return (
    <NavLink to={to} {...otherProps}>
      {children}
    </NavLink>
  );
};

export default AppLink;
