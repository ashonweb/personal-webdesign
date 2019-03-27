import React,{Component } from 'react';
import face from './faceapp.PNG';
import drum from './drummachine.png'
import diamond from './diamondgame.png';
import calc from './calc.png';
import todo from './todo.png';
import wiki from './wiki.png';
import article from './article.png';

export default class Projects extends Component {
  render(){
  return(    
  <div className="projectsection">
    <div className="firstblock">
      <div className="projectone-backg">
        <div className="middle">
        <div class="text">
            FACE DETECTION APPLICATION
            <br /> <br /><hr className="description"></hr> <br />
            <p> Retriving the information about the face by using POST method of fetch API</p>
            <p> Technologies used <br/>React, ReactRouter, Git</p>
            <p><a href="https://bmeghpal-face-detect.surge.sh/#/">Click here to see live</a></p>        
          </div>
        </div>
      
      </div>
      {/* <div className="projectone">
        <img src={face} alt="da" className="faceapp" />
        <div class="middle">
          <div class="text">
            FACE DETECTION APPLICATION
            <br /> <br /><hr className="description"></hr> <br />
            <p> Retriving the information about the face by using POST method of fetch API</p>
            <p> Technologies used <br/>React, ReactRouter, Git</p>
            <p><a href="https://bmeghpal-face-detect.surge.sh/#/">Click here to see live</a></p>        
          </div>
        </div>
      </div> */}
    </div>
    <div className="secondblock">
      <div className="first-row">
        <div className="protwo-back">
         <div class="Projecttwodescription">
            <div class="drumtext">
              DRUM MACHINE APPLICATION <br />
              <hr className="description"></hr><br />
              <p> An audio application which initiates different sounds on different input keys</p>
              <p> Technologies used <br />React, Git</p>
              <p><a href="https://drummachineapp_bmeghpal.surge.sh/">Click here to see live</a></p>
            </div>
          </div>
        </div>
        <div className="prothree-back">
          <div class="Projecttwodescription">
            <div class="diatext">
              DIAMOND SEARCH GAME <br />
              <hr className="description"></hr><br />
              <p> A game application which is about searching a total of 8 diamonds in 8x8 grid system</p>
              <p>Score is generated based on blocks which are left after the complete search</p>
              <p> Technologies used <br />React, Git</p>
              <p><a href="https://diamond-game.surge.sh/">Click here to see live</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        {/* <div className="projectfour">
          <img src={calc} alt="da" className="calcapp" />
          <div class="Projecttwodescription">
            <div class="calctext">
              CALCULATOR APPLICATION <br/>
              <hr className="description"></hr><br/>
              <p> A simple Calculator app which does basic arithmatic operations</p>
              <p> Technologies used <br/>React, Git</p>
              <p><a href="https://calculator-bmeghpal.surge.sh/">Click here to see live</a></p>
            </div>
          </div> 
        </div> */}
        {/* <div className="projectfive">
          <img src={todo} alt="da" className="calcapp" />
          <div class="projectfivedesc">
            <div class="calctext">
              TODO APPLICATION <br/>
              <hr className="description"></hr><br/>
              <p>A to do application which does the basic operations i.e addition,deletion,updation</p>
              <p> Technologies used <br/>React, Git</p>
              <p><a href="https://bmeghpal_todoapp.surge.sh/">Click here to see live</a></p>
            </div>
          </div> 
        </div> */}
        <div className ="profour-back">
          <div class="Projecttwodescription">
            <div class="calctext">
              CALCULATOR APPLICATION <br/>
              <hr className="description"></hr><br/>
              <p> A simple Calculator app which does basic arithmatic operations</p>
              <p> Technologies used <br/>React, Git</p>
              <p><a href="https://calculator-bmeghpal.surge.sh/">Click here to see live</a></p>
            </div>
          </div> 
        </div>
        <div className="profive-back">
          <div class="projectfivedesc">
            <div class="calctext">
              TODO APPLICATION <br/>
              <hr className="description"></hr><br/>
              <p>A to do application which does the basic operations i.e addition,deletion,updation</p>
              <p> Technologies used <br/>React, Git</p>
              <p><a href="https://bmeghpal_todoapp.surge.sh/">Click here to see live</a></p>
            </div>
          </div>  
        </div>
      </div>
      <div className="third-row">
        <div className="prosix-back">
          <div class="projectsixdesc">
            <div class="calctext">
              WIKIPEDIA VIEWER APPLICATION <br/>
              <hr className="description"></hr><br/>
              <p>A wikipedia search machine which produce the first 10 results based on search</p>
              <p> Technologies used <br/>JavaScript, CSS,HTML,Fetch API</p>
              <p><a href="https://wiki-bmeghpal-viwer.surge.sh/">Click here to see live</a></p>
            </div>
          </div> 
        </div>
        <div className="proseven-back">
          <div class="projectsevendesc">
            <div class="calctext">
              RANDOM QUOTE ENGINE <br/>
              <hr className="description"></hr><br/>
              <p>Random Quote Engine generates a new quote on a click event</p>
              <p> Technologies used <br/>JavaScript,BootStrap, CSS,HTML,Fetch API</p>
              <p><a href="https://random-article-bmeghpal.surge.sh/">Click here to see live</a></p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  )
  }
}