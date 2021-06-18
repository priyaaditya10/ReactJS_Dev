import React from 'react';
import { Component } from 'react';
import logo from '../Images/whole.png';
import { Navbar, NavbarBrand,NavItem, NavLink, Form, FormControl, NavDropdown, Jumbotron } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';



class Header extends Component {
   render(){
    return (
        <React.Fragment>
        <Navbar light expand="md">
        <div className="container">
        
          <NavbarBrand className=" mr-auto" href="/">
              <img src={logo}
              height="24px" width="162.57px" alt="ATG.WORLD"/>
          </NavbarBrand>

          <div className="search-box">
            <Form inline>
            <FormControl type="text" placeholder="search for your favourite groups in ATG"/>
            </Form>
          </div>

            <Nav navbar>
                         <NavDropdown title="Create account.It's free!" id="navbarScrollingDropdown">
                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                         <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                         </NavDropdown>           
            </Nav>

        </div>
        </Navbar> 

          <Jumbotron  className="jumbotron-alter jumbotron-back">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6 offset-1 jumbotron-text">
                        <h1>Computer Engineering</h1>
                        <p> 142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>

        </Jumbotron>
     </React.Fragment>
    );

    } 
}

export default Header;