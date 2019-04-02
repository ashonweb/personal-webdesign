
import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Navigationnew extends Component {
  myFunction = () =>{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  render(){
    return (
      <div>
        <div className="topnav" id="myTopnav">
        <Link to="/" className="active">HOME</Link>

        {/* <Link to="/" className="active">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/skills">SKILLS & EXPERIENCE</Link> */}
        <button onClick={() => {this.props.updateContactVisibility(true)}} to="/contact">Contact</button>
        {/* <Link to="/contact">contact</Link>  */}
        {/* <button>  <strong>Previous</strong> </button> */}
        {/* <Link to="/resume">Resume</Link>  */}
        <button onClick={() => {this.props.updateResumeVisibility(true)}} to="/contact">Resume</button>


         <a href="javascript:void(0)" className="icon" onClick={this.myFunction}>
            <FontAwesomeIcon icon={faBars} />
          </a>
      
        
        </div>
      </div>
    )
  }
  
}


