import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';

import theme from './ui/Theme';
import Header from '../components/ui/Header'
import Buttons from '../components/ui/Buttons'
import TextBox from '../components/ui/TextBox';
import TextBoxSig from '../components/ui/TextBoxSig';

import ExampleComponent from "react-rounded-image";
import MyPhoto from "./utils/Taylor_Swift.png";

function App() {
  return (<div className="App">
    <ThemeProvider theme={theme}>

      <div className="cover">
        <Header/>

        <div>
          <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="300" imageHeight="300" roundedSize="10"/>
        </div>
        <div className="coverTrap">
          <TextBox></TextBox>
          <TextBoxSig></TextBoxSig>

        </div>
        <Buttons/>
      </div>
    </ThemeProvider>

  </div>);

}

export default App;
