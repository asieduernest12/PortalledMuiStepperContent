import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";

import { Button } from "@mui/material";
import { PortalledContainer } from "./PortalledContainer";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <PortalledContainer />
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
