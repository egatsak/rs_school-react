import { Component } from "react";
import { AppRouter } from "./components/router";
import Navbar from "./components/widgets/Navbar/Navbar";

interface AppProps {
  children?: React.ReactNode;
}

interface AppState {
  count: number;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      count: 0,
    };
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
