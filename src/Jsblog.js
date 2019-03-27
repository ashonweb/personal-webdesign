import React,{Component} from 'react';
export default class Html extends Component {

  render(){
    return(
      <div className="containerforaboutme">
          <div className="jsblogtitle">
            <h1>JavaScript !</h1>
          </div>
          <hr></hr>
          <div className="jsblogcontent">
            <p> Why Study JavaScript?</p>
            <p>JavaScript is one of the 3 languages all web developers must learn:</p>
            <ul>
              <li> HTML to define the content of web pages
              </li>
              <li> CSS to specify the layout of web pages
              </li>
              <li> JavaScript to program the behavior of web pages
              </li>
            </ul>
            <p>What is JavaScript ?</p>
            <p>JavaScript is a most popular and widely spreading programming language used to make 
              web pages interactive. It is what gives a page life—the interactive elements 
              and animation that engage a user. If you've ever used a search box on a home page,
              checked a live baseball score on a news site, or watched a video, 
              it has likely been produced by JavaScript.
            </p>
            <p> Where JavaScript program runs ?</p> 
            <p>JavaScript program runs inside the browser and after 2009 it was able to run outside browser
               as well.
               Every browser has a JavaScript engine inside it. Here JavaScript engine is like a complier
              which converts the JavaScript code into machine code which the browser can understand.
              <br />
              After 2009 person name ryan bhal made a program which was the combination  google's js
              engine that is V8 and a c++ program
              called it as a node, which made JavaScript program to run outside the browser.
              <p>Both browser and node provide a run time environment for JS code</p>
            </p>
            
            




          </div>
      </div>
    )

  }


}
