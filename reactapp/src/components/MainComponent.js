import React,{ Component } from 'react';
import Header from './HeaderComponent';
import TabComponent from './tabComponent';
import BodyComponent from './BodyComponent';
import { render } from 'react-dom';


class Main extends Component {

    
  render(){

    return (
      <div>
      <Header/>
      <TabComponent/>
      <BodyComponent/>
    </div>
  );
  }
}

export default Main;
