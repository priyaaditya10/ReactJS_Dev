import React, {Component} from 'react';
import CardComponent from './CardComponent';

class BodyComponent extends Component
{
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-3">
                    <CardComponent/>
                </div>
                <div className="col-md-3 mt-5 offset-2">
                    <div className="row">
                        <div className="col-md-9">
                           <p> <span className="fa fa-map-marker fa-lg"></span> Noida, India</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa fa-pencil fa-lg"></span>
                        </div>
                    </div>
                    <hr/>
                     <div className="row location-alter">
                        <div className="col-md-12">
                           <p> <span className="fa fa-exclamation-circle fa-lg"></span> Your location will help us to serve better   and extend a personalized experience</p>
                        </div>
                    </div>
                 </div>  
            </div>
        </div>
        );


    }
}

export default BodyComponent;