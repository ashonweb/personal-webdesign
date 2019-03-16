import React,{Component} from 'react';

export default class SkillsExperience extends Component {
  render() {
    return (
      <div >
        <div className="aboutbackground">>
          <div className="hover">
            <div className = "text-skills"> 
              <div className="partone">
                <div className="year">
                  <div className="startyear text">
                    Oct 2018- Present <br />
                    TCS BANGALORE <br /><span className="position">Developer</span>
                  </div>
                  <div className="training text">
                    <ul className="items">
                      <li>Client:Aviva</li>
                      <li>Worked on  building react based User interface</li>
                      <li>Skills:React,Javascript,CSS,Bootstrap,HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="year">
                  <div className="startyear text">

                    Feb 2016- Oct 2018 <br />
                    TCS BANGALORE <br /><span className="position">Sytem Engineer </span>
                  </div>

                  <div className="training text">
                    <ul className="items">
                      <li>Project:Single-Sign-On(SSO)</li>
                      <li>Client:American Express Technologies ltd,Phoenix,Arizona</li>
                      <li>Responsibilites</li>
                      <ul>
                        <li>
                          Developing and maintaing internal tools for clients
                      </li>
                        <li>
                          Managing day-to-day activities to keep application availabilty (99.94%) and performance as per SLA
                      </li>
                        <li>
                          Effective knowledge on CA siteminder,Federatio,Layer 7
                      </li>
                      </ul>
                      <li>Took initiative to improve UI for client portal</li>
                      <li>Skills:Javascript,CSS,Bootstrap,HTML</li>
                      <li>Monitoring tools:Wily,Dynatrance,Sitescope,Splunk</li>
                    </ul>
                  </div>
                </div>

                <div className="year">
                  <div className="startyear text">

                    Nov 2015- Feb 2016 <br />
                    TCS Trivandrum <br /><span className="position">Asst.System Engineer Trainee</span>
                  </div>
                  <div className="training text">
                    <ul className="items">
                      <li>started  career at TCS ,Trivandrum as trainee</li>
                      <li>Worked on building online payment portal for AMEX</li>
                      <li>Skills:JAVA</li>
                      <li> Architecture:MVC</li>
                      <li>Database:Oracle</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="parttwo">
              <p className="primaryskills">Primary Skills</p>
              <div className="skillssection">
                <div className="skillitems">
                      <p className="primaryskills">React</p>
                </div>
                <div className="circle-wrap">
                  <div className="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      45%
                   </div>
                  </div>
                </div>
              </div>
              <div className="skillssection">
                <div className="skillitems">
                      <p className="primaryskills">Javascript</p>
                </div>
                <div className="circle-wrap">
                  <div className="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      60%
                   </div>
                  </div>
                </div>
              </div>
              <div className="skillssection">
                <div className="skillitems">
                      <p className="primaryskills">Bootstrap</p>
                </div>
                <div className="circle-wrap">
                  <div className="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      70%
                   </div>
                  </div>
                </div>
              </div>
              <div className="skillssection">
                <div className="skillitems">
                      <p className="primaryskills">CSS/HTML</p>
                </div>
                <div className="circle-wrap">
                  <div className="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      70%
                   </div>
                  </div>
                </div>
              </div>
              <div className="skillssection">
                {/* <div className="skillitems">
                      <p>React</p>
                </div>
                <div className="circle-wrap">
                  <div className="circle">
                    <div class="mask full">
                      <div class="fill"></div>
                    </div>
                    <div class="mask half">
                      <div class="fill"></div>
                    </div>
                    <div class="inside-circle">
                      70%
                   </div>
                  </div>
                </div> */}
                 <div className="skillitems">
                      
                 <ul >
    <li class="listStylered">
        <p className="miscellous"> Node.</p>
    </li>
    <li class="listStyleblue">
        <p className="miscellous"> Git</p>
    </li>
    <li class="listStylegreen">
        <p className="miscellous"> C</p>
    </li>
    <li class="listStyleyellow">
        <p className="miscellous"> C++</p>
    </li>
    <li className="liststyle">
        <p className="miscellous"> wily,sitescope,Dynatrance,splunk</p>
    </li>
</ul>
                      
                </div>
                <div className="multicolor">
                <div className="inside-circle">
                </div>
                </div>
              </div>
              
               
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}