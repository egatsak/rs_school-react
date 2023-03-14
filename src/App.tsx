import { Component } from "react";
import { AppRouter } from "./components/router";
import Navbar from "./components/widgets/Navbar/Navbar";

interface AppProps {
  children?: React.ReactNode;
}

export class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    );
  }
}
