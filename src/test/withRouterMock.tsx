import React from "react";
import { WithRouterProps } from "../components/router/provider/withRouter";

export const withRouter = (Component: React.ComponentType<WithRouterProps>) => {
  return (props: WithRouterProps) => {
    return <Component {...props} /* location={{ pathname: "pathname" } } */ />;
  };
};
