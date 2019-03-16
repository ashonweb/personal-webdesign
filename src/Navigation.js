import React , {Component} from 'react'
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Navigation extends Component {
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
          <Link to="/app" className="active">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <a href="#skills">SKILLS</a>
          <a href="#about">WRITING</a>
          <a href="#skills">CONTACT</a>
          <a href="javascript:void(0)" className="icon" onClick={this.myFunction}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    )
  }
  
}