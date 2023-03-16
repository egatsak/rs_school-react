import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    );
  }
}
