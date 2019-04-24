import React, { Component } from 'react';
/*import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
*/
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import { Typography, Toolbar } from '@material-ui/core';


export default class Header extends Component {
  render() {
    return (
      <div>
        {/*<Navbar position="static" color="default">*/}
          <Navbar>
            <Text>
              eventbrite
            </Text>
          </Navbar>
    {/*</Navbar>*/}
      </div>
    );
  }
};

const Navbar = styled(Toolbar)`
    && {
    background-color: white;
    }
`,
Text = styled(Typography)`
    && {
    color: #f05537;
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:900');
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    }
`