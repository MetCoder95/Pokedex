import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";

import { Layouts, PokeGrid } from "../Components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <header>
          <Layouts.Header />
        </header>
        <PokeGrid />
        <Layouts.Footer />
      </div>
    );
  }
}

export default App;
