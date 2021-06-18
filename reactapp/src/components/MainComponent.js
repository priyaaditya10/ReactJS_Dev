import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Jumbo from './JumbotronComponent';
import { render } from 'react-dom';


class Main extends Component {

    
  render(){

    return (
      <div>
      <Header/>
    </div>
  );
  }
}

export default Main;
