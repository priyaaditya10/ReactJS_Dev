import React,{ Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { render } from 'react-dom';


class App extends Component {

    
  render(){

    return (
      <div>
     <Main/>
    </div>
  );
  }
}

export default App;
