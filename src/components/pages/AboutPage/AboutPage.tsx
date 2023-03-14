import React, { Component } from "react";

interface AboutPageProps {
  children?: React.ReactNode;
}

interface AboutPageState {
  count: 0;
}

export default class AboutPage extends Component<AboutPageProps, AboutPageState> {
  render() {
    return <div>AboutPage</div>;
  }
}
