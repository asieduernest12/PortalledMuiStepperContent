import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  typography: {
    useNextVariants: true,
  },
});

const formSteps = [
  { index: 0, label: 'form 0', component: <>form 0 component</> },
  { index: 1, label: 'form 1', component: <>form 1 component</> },
  { index: 0, label: 'form 2', component: <>form 2 component</> },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Stack direction="row">
            <Box
              className="sidepanel-showStepperIndexes"
              sx={{ flex: '0 0 20%' }}
            ></Box>
            <Box className="portalledComponent" sx={{ flex: '0 1' }}></Box>
          </Stack>
        </MuiThemeProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
