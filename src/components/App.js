import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {makeStyles} from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from '../components/ui/Header'
import Buttons from '../components/ui/Buttons'
import TextBox from '../components/ui/TextBox';
import TextBoxSig from '../components/ui/TextBoxSig';
import ExampleComponent from "react-rounded-image";
import MyPhoto from "./utils/Taylor_Swift.png";

import './App.css';

const styles = makeStyles((theme) => ({
  photo: {
    width: '50%',

    marginLeft: '10%',
    float: 'left'
  },
  rightElems: {
    float: 'right',
    position: 'absolute',
    right: '10',
    width: '40%'
  }
}));

function App() {

  return (<div className="App cover">
    <ThemeProvider theme={theme}>

      <Header/>

      <div className="roundImage">
        <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="300" imageHeight="300" roundedSize="10"/>
      </div>
      <div className="coverTrap">
        <TextBox className='rightElems'></TextBox>
        <TextBoxSig className='rightElems'></TextBoxSig>

      </div>
      <div className='rightElems'><Buttons/></div>

    </ThemeProvider>

  </div>);

}

export default App;
