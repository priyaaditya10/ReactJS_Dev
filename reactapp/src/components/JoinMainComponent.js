import React,{ Component } from 'react';
import Header from './HeaderComponent';
import BodyComponent from './BodyComponent';
import { render } from 'react-dom';


class Join extends Component {

    
  render(){

    return (
      <div>
      <Header/>
      <BodyComponent/>
    </div>
  );
  }
}

export default Join;
