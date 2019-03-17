import React , {Component} from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import {  faHeart,  faMapMarkerAlt, faPhone,} from '@fortawesome/free-solid-svg-icons';
 import{faTwitter,faGithub,faBitbucket, faLinkedin, faAngellist, faPinterest, faInstagram,faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons';
 import { faUser,faEnvelope,faBook,faComments,faPaperPlane,faHandPointDown} from '@fortawesome/free-solid-svg-icons';
 import {Form, Button, } from 'react-bootstrap';

export default class Contact extends Component {
  render(){
    return(
      <div className= "aboutbackground">
        <div className="hover">
          <div>
            <h1>I'd <FontAwesomeIcon icon={faHeart} className="font-images"/> to Answer you.</h1>
            <h5>Let's Talk <FontAwesomeIcon icon={faHandPointDown} className="font-images"/></h5>
          </div>
          <div>
          <div className="formsection">
            <Form>
            <Form.Group className="displaycontainer">
                <Form.Label>
                  <FontAwesomeIcon icon={faUser} className="font-images" /> &nbsp;&nbsp;
                </Form.Label>
                <Form.Control type="username" placeholder="Enter username" required />
              </Form.Group>
              <Form.Group className="displaycontainer">
                <Form.Label>       
                  <FontAwesomeIcon icon={faEnvelope} className="font-images" /> &nbsp;&nbsp;
                </Form.Label>
              <Form.Control type="email" placeholder="Enter email"  required/>
              </Form.Group>
              <Form.Group className="displaycontainer">
                <Form.Label>   
                  <FontAwesomeIcon icon={faBook} className="font-images" /> &nbsp;&nbsp;
                </Form.Label>
                <Form.Control type="Subject" placeholder="Enter Subject"  required/>
              </Form.Group>
              <Form.Group className="displaycontainer">
                <Form.Label>   
                  <FontAwesomeIcon icon={faComments} className="font-images" /> &nbsp;&nbsp;
              </Form.Label>
                <textarea className={Form.Control} row="5" placeholder="Message"></textarea>
                
               
              </Form.Group>
              <Button className="sendbutton"variant="primary" type="submit">
                <FontAwesomeIcon icon={faPaperPlane}  />&nbsp;&nbsp;
                 Submit
              </Button>
            </Form>
          </div>  
          <div className="social">
            <div className="contactmeitems">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="font-images" /> <span className="location"><b>Bangalore,Karnataka India </b></span>
            </div>
            <div className="contactmeitems" >
              <FontAwesomeIcon icon={faPhone} className="font-images" /> <span className="location"><b>9663478727</b></span>
            </div>
            <div className="contactmeitems" >
              <FontAwesomeIcon icon={faEnvelope} className="font-images" /> <span className="location"><b>bhagyameghpal14@gmail.com </b></span>
            </div>
            <hr/>
            <div className="social-icon-sections">
              <div className="social-icons">
              <a href="https://twitter.com/meghpalbhagya"><FontAwesomeIcon icon={faTwitter} className="font-images" /></a>
              </div>
              <div className="social-icons">             
               <a href="https://github.com/ashonweb"><FontAwesomeIcon icon={faGithub} className="font-images" /></a>
              </div>
            
              <div className="social-icons">
                  
               <a href="https://angel.co/ashonweb"><FontAwesomeIcon icon={faAngellist} className="font-images" /></a>
             
              </div>
       
              <div className="social-icons">
                  
               <a href="https://instagram.com/bhagyameghpal"><FontAwesomeIcon icon={faInstagram} className="font-images" /></a>
             
              </div>
              <div className="social-icons">
                  
               <a href="https://freecodecamp.org/ashonweb"><FontAwesomeIcon icon={faFreeCodeCamp} className="font-images" /></a>
             
              </div>
             
            </div>
          </div>
          
           
        </div>
          
       </div> 
      </div>
    )
  }
}