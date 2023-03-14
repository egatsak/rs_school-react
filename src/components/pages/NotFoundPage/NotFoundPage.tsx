import React, { Component } from "react";

interface NotFoundPageProps {
  children?: React.ReactNode;
}

interface NotFoundPageState {
  count: 0;
}

export default class NotFoundPage extends Component<NotFoundPageProps, NotFoundPageState> {
  render() {
    return <div>NotFoundPage</div>;
  }
}
