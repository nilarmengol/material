import React from "react";

import { Header, Footer } from "./components/Layouts";

import Exercises from "./components/Exercises";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercises />
        <Footer />
      </React.Fragment>
    );
  }
}
