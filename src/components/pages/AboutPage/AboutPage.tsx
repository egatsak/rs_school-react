import React, { Component } from "react";

interface AboutPageProps {
  children?: React.ReactNode;
}

interface AboutPageState {
  count: 0;
}

export default class AboutPage extends Component<AboutPageProps, AboutPageState> {
  render() {
    return (
      <>
        <h2 className="page-heading">AboutPage</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Id neque aliquam vestibulum morbi blandit cursus. Dictumst vestibulum rhoncus est pellentesque
          elit ullamcorper. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Mattis rhoncus urna
          neque viverra justo. At varius vel pharetra vel turpis nunc. Fames ac turpis egestas maecenas pharetra. Nunc
          sed blandit libero volutpat. Aenean pharetra magna ac placerat vestibulum lectus mauris. Enim diam vulputate
          ut pharetra sit amet. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Vestibulum rhoncus
          est pellentesque elit. Ultrices eros in cursus turpis massa.
        </p>
      </>
    );
  }
}
