import { Component } from "react";
import { AppRouter } from "./components/router";
import Navbar from "./components/widgets/Navbar/Navbar";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    );
  }
}
