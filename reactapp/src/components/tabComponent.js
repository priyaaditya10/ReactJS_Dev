import React,{ Component } from 'react';
import { render } from 'react-dom';
import {Button, ButtonGroup, DropdownButton, Dropdown} from 'react-bootstrap';


class TabComponent extends Component {

    
  render(){

    return (
      <div className="container">
        <div className="row mr-auto mt-5 ">
          <div className="col-12 col-md-6">
               <ul className="nav">
                 <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">All Posts(32)</a>
                  </li>
                 <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Article</a>
                 </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Event</a>
                </li>
               <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Education</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Job</a>
               </li>
             </ul>
             </div>
              <div className="col-12 col-md-6">
               <ul className="nav justify-content-end">
                 <li className="nav-item">
                  <ButtonGroup className="button-1">          
                  <DropdownButton variant="secondary" as={ButtonGroup} title="Write a Post">
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
                  </ButtonGroup>
                 </li>
                   <li className="nav-item button-2">
                    <Button variant="primary"><span className="fa fa-user-plus fa-lg"></span>  Join Group</Button>{' '}
                  </li>
             
             </ul>
             </div>
            <hr/>

        </div>
     
    </div>
  );
  }
}

export default TabComponent;
