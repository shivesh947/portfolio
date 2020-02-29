import React, { Component } from "react";
import edulogo from '../assests/images/advancetraininglogo.svg'

class Educationdata extends Component{
    componentDidMount() {
        console.log(this.props.educationdata);
      }
    render() {
    const numbers = this.props.educationdata;
    const listItems = numbers.map((number,index) => (
    <a href={number.link} key={index}>
    <div className="col m4 s12">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={number.imageLink} />
            <span className="card-title">{number.Name}</span>
            </div>
            <div className="card-content">
              <p>{number.year}</p>
              <p>{number.month}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </a>
    ));
        return (
            <div>
                <div className="row" data-aos="fade-left">
                    <div className="col12">
                        <img src={edulogo} />
                    </div>
                </div>
                <div className="row" data-aos="fade-right">
                   {listItems}
                </div>
            </div>
        )
    }
    
}

export default Educationdata;