import React, { Component } from "react";

interface MainPageProps {
  children?: React.ReactNode;
}

interface MainPageState {
  count: 0;
}

export default class MainPage extends Component<MainPageProps, MainPageState> {
  render() {
    return <div>MainPage</div>;
  }
}
