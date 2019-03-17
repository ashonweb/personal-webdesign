import React , {Component} from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import { faGlasses, faSpinner, faAddressBook, faHeart } from '@fortawesome/free-solid-svg-icons'
 import { faUser,faEnvelope,faBook,faComments,faPaperPlane,faHandPointDown} from '@fortawesome/free-solid-svg-icons';
 import {Form, Button} from 'react-bootstrap';

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
                <textarea className={Form.Control} row="5"></textarea>
                
               
              </Form.Group>
              <Button className="sendbutton"variant="primary" type="submit">
                <FontAwesomeIcon icon={faPaperPlane}  />&nbsp;&nbsp;
                 Submit
              </Button>
            </Form>
          </div>  
          <div className="social">
          <p></p></div>
          </div>
        </div> 
      </div>
    )
  }
}