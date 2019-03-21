import React,{Component} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlasses, faSpinner, faWindowClose, faClosedCaptioning, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faGithub,faLinkedin,faAngellist,faFreeCodeCamp,} from '@fortawesome/free-brands-svg-icons';


export default class Contact extends Component{
  closeModal = () => {
    this.props.updateContactVisibility(false);
   
  }

  render() {
   return(
     <Modal className="contact" isOpen={this.props.showContact}>
      <Modal className="contactok" isOpen={this.props.showContact} >
      
      <FontAwesomeIcon icon={faTimes} className="close" onClick={this.closeModal}/>
        <div className="contactme ">
          <h4>Contact Me</h4>
          <h1><a href="mailto:bhagyameghpal@gmail.com">bhagyameghpal14@gmail.com</a></h1>
          
          </div>
         
          <div className="social">
          <div>
            <p>SOCIAL</p>
            <div>
            <a href="mailto:meghpalbhagya@gmail.com" className="social-links">
                 <FontAwesomeIcon icon={faEnvelope} />
               </a>
               <a href="https://twitter.com/meghpalbhagya" className="social-links">
                 <FontAwesomeIcon icon={faTwitter} />
               </a>
               <a href="https://github.com/ashonweb" className="social-links">
                 <FontAwesomeIcon icon={faGithub} />
               </a>
               <a href="https://angel.co/ashonweb" className="social-links">
                 <FontAwesomeIcon icon={faAngellist} />
               </a>
               <a href="https://twitter.com/meghpalbhagya" className="social-links">
                 <FontAwesomeIcon icon={faFreeCodeCamp} />
               </a>
            </div>
          </div>
          </div>
        
      </Modal>
     </Modal>
   )
 }
}


