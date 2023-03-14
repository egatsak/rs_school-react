import React, { Component } from "react";

interface NotFoundPageProps {
  children?: React.ReactNode;
}

export default class NotFoundPage extends Component<NotFoundPageProps> {
  render() {
    return (
      <>
        <h2 className="page-heading">NotFoundPage</h2>
        <p>Page not found!</p>
      </>
    );
  }
}
