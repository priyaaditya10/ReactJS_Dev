import React, {Component} from 'react';
import Card1 from '../Images/Card1.png';
import Card2 from '../Images/Card2.png';
import Card3 from '../Images/Card3.png';
import education from '../Images/education.png';
import sarah from '../Images/sarah.png';
import article from '../Images/Article.png';
import meeting from '../Images/meetup.png';
import job from '../Images/job.png';
import sarthak from '../Images/sarthak.png';
import jones from '../Images/jones.png';
import joseph from '../Images/joseph.png';
import {Card,Button, CardImg} from 'react-bootstrap';


class CardComponent extends Component
{
    render(){

        return(
            <div className="container">
          <Card>
          <Card.Img variant="top" src={Card1}/>
          <Card.Body>
            <Card.Title><Card.Img className="article-alter" src={article}/></Card.Title>
             <Card.Text>
               <div className="row">
                   <div className="col-sm-10">
                       <p className="ptext-alter">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                   </div>
                   <div className="col-sm-1 offset-1">
                       <span className="fa fa-ellipsis-h fa-lg"></span>
                   </div>
               </div>
               <div className="row">
                   <p> I've worked in UX for the better part of a decade. From now on, I plan to rei...</p>
               </div>
               <div className="row">
                   <div className="col-sm-5 text-alter">
                       <Card.Img className="img-alter" src={sarthak}/> Sarthak Kamra
                   </div>
                   <div className="col-sm-3 offset-2">
                       <span className="fa fa-eye"></span> 1.4k views
                   </div>
                   <div className="col-sm-2">
                       <span className="fa fa-share-alt-square fa-lg fa-light"></span>
                   </div>
               </div>
             </Card.Text>
            </Card.Body>
           </Card>

             <Card className="mt-3">
          <Card.Img variant="top" src={Card2}/>
          <Card.Body>
            <Card.Title><Card.Img className="education-alter" src={education}/></Card.Title>
             <Card.Text>
               <div className="row">
                   <div className="col-sm-10">
                       <p className="ptext-alter">Tax Benifits for Investments under National Pension Scheme launched by Government </p>
                   </div>
                   <div className="col-sm-1 offset-1">
                       <span className="fa fa-ellipsis-h fa-lg"></span>
                   </div>
               </div>
               <div className="row">
                   <p> I've worked in UX for the better part of a decade. From now on, I plan to rei...</p>
               </div>
               <div className="row">
                   <div className="col-sm-5 text-alter">
                       <Card.Img className="img-alter" src={sarah}/> Sarah West
                   </div>
                   <div className="col-sm-3 offset-2">
                       <span className="fa fa-eye"></span> 1.4k views
                   </div>
                   <div className="col-sm-2">
                       <span className="fa fa-share-alt-square fa-lg fa-light"></span>
                   </div>
               </div>
             </Card.Text>
            </Card.Body>
           </Card>

                <Card className="mt-3">
          <Card.Img variant="top" src={Card3}/>
          <Card.Body>
            <Card.Title><Card.Img className="meeting-alter" src={meeting}/></Card.Title>
             <Card.Text>
               <div className="row">
                   <div className="col-sm-11">
                       <p className="ptext-alter">Finance & Investment ELite Social Mixer @Lujiazui </p>
                   </div>
                   <div className="col-sm-1">
                       <span className="fa fa-ellipsis-h fa-lg"></span>
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-4">
                       <span className="fa fa-calendar"></span> Fri, 12 Oct, 2018
                   </div>
                   <div className="col-sm-4 offset-1">
                       <span className="fa fa-map-marker"></span> Ahemdabad, India
                   </div>
               </div><br/>
               <div className="row">
                   <div className="col-sm-12">
                      <button type="button" class="btn btn-outline-secondary btn-alter">Visit  Website</button>
                   </div>
               </div><br/>
               <div className="row">
                   <div className="col-sm-5 text-alter">
                       <Card.Img className="img-alter" src={jones}/> Ronal Jones
                   </div>
                   <div className="col-sm-3 offset-2">
                       <span className="fa fa-eye"></span> 1.4k views
                   </div>
                   <div className="col-sm-2">
                       <span className="fa fa-share-alt-square fa-lg fa-light"></span>
                   </div>
               </div>
             </Card.Text>
            </Card.Body>
           </Card>


           
        <Card className="mt-3">
          <Card.Body>
            <Card.Title><Card.Img className="job-alter" src={job}/></Card.Title>
             <Card.Text>
               <div className="row">
                   <div className="col-sm-11">
                       <p className="ptext-alter">Software Developer </p>
                   </div>
                   <div className="col-sm-1">
                       <span className="fa fa-ellipsis-h fa-lg"></span>
                   </div>
               </div>
               <div className="row">
                   <div className="col-sm-6">
                       <span className="fa fa-briefcase fa-lg"></span> Innovaccer Analytics Private Ltd.
                   </div>
                   <div className="col-sm-4 ">
                       <span className="fa fa-map-marker"></span> Noida, India
                   </div>
               </div><br/>
               <div className="row">
                   <div className="col-sm-12">
                      <button type="button" class="btn btn-outline-secondary btn-alter">Apply on Timesjobs</button>
                   </div>
               </div><br/>
               <div className="row">
                   <div className="col-sm-5 text-alter">
                       <Card.Img className="img-alter" src={joseph}/> Joseph Gray
                   </div>
                   <div className="col-sm-3 offset-2">
                       <span className="fa fa-eye"></span> 1.4k views
                   </div>
                   <div className="col-sm-2">
                       <span className="fa fa-share-alt-square fa-lg fa-light"></span>
                   </div>
               </div>
             </Card.Text>
            </Card.Body>
           </Card>
            </div>

        );
    }
}

export default CardComponent;