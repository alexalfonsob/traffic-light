import React from 'react';
import './traffic.css';

export class TrafficLight  extends React.Component {
    constructor(){
      super();
        this.state = {
          isRed: false,
          isYellow: false,
          isGreen: false
        }
    }

    handleToggle(e) {

      e === "red" ? this.setState({isRed: true}) : this.setState({isRed: false});
      e === "yellow" ? this.setState({isYellow: true}) : this.setState({isYellow: false});
      e === "green" ? this.setState({isGreen: true}) : this.setState({isGreen: false});
      
    }

    render(){
      const {isRed} = this.state;
      const {isYellow} = this.state;
      const {isGreen} = this.state;

      return(
        <div>
          <div className="base-center">
            <div className="base-figure"></div>
          </div>

          <div className="base-center">
            <div className="body-figure">
            <div className= {isRed === true ? "red-off selected" : "red-off"} onClick={() => this.handleToggle("red")}></div>
            <div className= {isYellow === true ? "yellow-off selected" : "yellow-off"} onClick={() => this.handleToggle("yellow")}></div>
            <div className= {isGreen === true ? "green-off selected" : "green-off"} onClick={() => this.handleToggle("green")}></div>
            </div>
          </div>
        </div>
      );
    }
}
