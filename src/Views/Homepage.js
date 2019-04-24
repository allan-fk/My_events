import React, { Component } from 'react';
// Material
import Button from '@material-ui/core/Button';
// Styled Components
import styled from 'styled-components';
import Header from '../Components/Header';
import ImgTransition from '../Components/ImgTransition';

export default class Homepage extends Component {
  render() {
    return (
      <Body>
        <Header />
        <ImgTransition />
        {/*<MyButton variant="contained" color="primary">
          Hello World
    </MyButton>*/}
      </Body>
    );
  }
}
const Body = styled.div`
    background-color: black;
  `,
  MyButton = styled(Button)``;
