import React,{Component} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlasses, faSpinner, faWindowClose, faClosedCaptioning, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitter,faGithub,faLinkedin,faAngellist,faFreeCodeCamp,} from '@fortawesome/free-brands-svg-icons';
import resume from './bmeghpal_resume_final.pdf';

export default class Resume extends Component{
  closeModal = () => {
    this.props.updateResumeVisibility(false);
   
  }

  render() {
   return(
     <Modal className="contact" isOpen={this.props.showResume}>
      <Modal className="contactok" isOpen={this.props.showResume} >
      
      <FontAwesomeIcon icon={faTimes} className="close" onClick={this.closeModal}/>
        <div className="resume ">
          <h4><i>Find out what I've accomplished over the years</i></h4>
          <h3><b>DIG A LITTLE DEEPER</b></h3>
        </div>
         
          <div className="resume-link">
          {/* <div>
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
          </div> */}
          
          <a href={resume} title="Download My Resume" >Download Resume</a>

          </div>
        
      </Modal>
     </Modal>
   )
 }
}


