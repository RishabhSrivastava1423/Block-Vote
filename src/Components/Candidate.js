import React, { Component } from "react";
import { async } from "regenerator-runtime";

export default class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteState: this.props.buttonState,
      displayVote:'none',
      voteTotal:'--'
    };
  }

  alreadyVoted = async () => {
    let didVote = await window.contract.didVote();
    if (!didVote) {
      this.setState({ voteState: false });
    }
    else{
      this.setState({displayVote:'block'})
    }
  };

  addVote = async () => {
    this.props.modBtn();
    window.contract.addVote({ candidate: this.props.title });
    this.setState({displayVote:'block'})
  };
  
  getTotal = async ()=>{
    let total = await window.contract.getVotes({candidate:this.props.title});
    this.setState({voteTotal : total})
  }

  componentDidMount() {
    this.alreadyVoted();
    this.getTotal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ voteState: true });
    }
  }


  render() {
    return (
      <div className="card h-100">
        <img
          src={this.props.picture}
          className="card-img-top center mx-auto "
          alt="..."
          style={{ display: "block" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            <h3>{this.props.title} </h3>{" "}
          </h5>
          <p className="card-text">{this.props.description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <div classname="ms-2 me-auto" style={{display : this.state.displayVote}}>
              Vote Count :
              <span classname="badge bg-primary rounded-pill"> {(this.state.voteTotal === '--') ? '--': this.state.voteTotal}</span>
            </div>
            <button
              className="btn btn-outline-primary me-md-2 ms-auto"
              type="button"
              disabled={this.state.voteState}
              onClick={this.addVote}
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
