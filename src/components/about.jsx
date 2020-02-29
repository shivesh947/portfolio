import React, { Component } from "react";
import '../assests/stylesheet/about.css'
import aboutlogo from '../assests/images/aboutme.svg'
class About extends Component {

 componentDidMount(){
  var i=0,linkdata='';
  for(i=0;i<this.props.aboutdata[0].links.length;i++)
  {
    var datais=this.props.aboutdata[0].links[i];
    linkdata="<div classame='col s6'><div className='row' style='padding:10px'><div classame='col s12'>"+datais.type+"</div><div classame='col s12'><a href="+datais.url+">Click here</a></div></div></div>"+linkdata;
  }
  document.getElementById('linkdata').innerHTML=linkdata;
 }

  render() {
    console.log(this.props.aboutdata[0].imageLink);
    return (
      <div id="about" className="aboutch">
        <div className="row container">
         <center><img src={aboutlogo} id="aboutlogo"/></center>

         <div className="col s12 m4" id="insidecard">
            <div className="card">
            <center>
              <div className="card-image">
                <img src={this.props.aboutdata[0].imageLink} />
                <span className="card-title" style={{fontSize:"20px"}}>
                  {this.props.aboutdata[0].heading}
                </span>
              </div>
              <div className="card-content">
               
               <p>{this.props.aboutdata[0].Name}</p>
              <p>{this.props.aboutdata[0].developertype}</p>
              <input type="button" className="waves-effect waves-light btn" value="Profile"/>
              </div>
              </center>
            </div>
          </div>

          <div className="col s12 m5">
          <p>{this.props.aboutdata[0].description}</p>
          </div>
          <div className="col s12 m3">
          <p>{this.props.aboutdata[0].Email}</p>
          <p>{this.props.aboutdata[0].Phonenumber}</p>
          <div className="row" id="linkdata">
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
