import { FC } from "react";
import { AppRouter } from "./components/router";
import Navbar from "./components/widgets/Navbar/Navbar";

export const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};
