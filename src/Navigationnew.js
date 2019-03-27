
import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Navigationnew extends Component {
  
  render(){
    return (
      <div>
        <div className="topnav" id="myTopnav">
        {/* <Link to="/" className="active">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/skills">SKILLS & EXPERIENCE</Link> */}
        <button onClick={() => {this.props.updateContactVisibility(true)}} to="/contact">Contact</button>
        {/* <Link to="/contact">contact</Link>  */}
        {/* <button>  <strong>Previous</strong> </button> */}
        {/* <Link to="/resume">Resume</Link>  */}
        <button onClick={() => {this.props.updateResumeVisibility(true)}} to="/contact">Resume</button>


       
      
        
        </div>
      </div>
    )
  }
  
}


