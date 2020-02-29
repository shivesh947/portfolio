import React, { Component } from "react";
import "./App.css";
import Skillpage from "./components/skillpage";
import Navbar from "./components/navbar";
import Firstpage from "./components/firstpage";
import About from "./components/about";
import Projectcase from "./components/projectcase";
import Educationdata from "./components/educationdata";
import Floatingnavbutton from "./components/flotingbutton";


class App extends Component {
  state = {
    loading: true,
    person: null
  };
  async componentDidMount() {
    const url = "http://localhost:3004/persondata";
    const response = await fetch(url);
    const data = await response.json();
    var newdata = JSON.stringify(data);
    this.setState({ person: data, loading: false });
    console.log(this.state.person.skill);
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.loding || !this.state.person ? (
            <div>
              {console.log("loding")}
              <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                    <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>{console.log("loding done")}</div>
              <div className="row">
                <div className="col12">
                  <Navbar />
                </div>
              </div>

              <div className="row" id="home">
                <Firstpage />
              </div>

              <div className="row" id="about">
                <About aboutdata={this.state.person.aboutus} />
              </div>

              <div className="row container" id="Skills">
                <Skillpage skilldata={this.state.person.skill}/>
              </div>

              <div className="row container" id="Portfolio" >
                <Projectcase projectdata={this.state.person.projects}/>
              </div>

              <div className="row container" id="Education" >
                <Educationdata educationdata={this.state.person.education}/>
              </div>


              <Floatingnavbutton/>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
