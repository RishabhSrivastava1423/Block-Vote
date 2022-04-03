import React, { Component } from "react";

export default class Manifest extends Component {
  render() {
    return (
      <div className="card border-dark mb-3 h-100" >
        <div className="card-header text-center"> <h3>{this.props.can1} V/S {this.props.can2} </h3> </div>
        <div className="card-body text-dark">
          <p className="card-text">{this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
