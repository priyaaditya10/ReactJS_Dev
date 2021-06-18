import React,{ Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { render } from 'react-dom';


class JumbotronComponent extends Component {

    
  render(){

    return (
      <div>
       
       <Jumbotron fluid className="jumbotron-alter">
       <Container className="jumbotron-text">
        <h1 className="jumbotron-h1">Computer Engineering</h1>
       <p className="jumbotron-p">
        142,765 Computer Engineers follow this
      </p>
     </Container>
     </Jumbotron>
    </div>
  );
  }
}

export default JumbotronComponent;