import React , {Component} from 'react'
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
          <a href="#home" className="active">HOME</a>
          <a href="#about">ABOUT</a>
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