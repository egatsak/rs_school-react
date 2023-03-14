import { Component } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { AppRouter } from "./components/router";

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
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button data-testid="incrementBtn" onClick={() => this.setState({ count: this.state.count + 1 })}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <AppRouter />
      </div>
    );
  }
}
