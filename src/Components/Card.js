import React, { Component } from "react";

class CardD extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{ margin: "5%" }}>
          <video key={this.props.video.PathVideo} width="auto" height="150px" controls>
            <source src={this.props.video.PathVideo} type="video/mp4" />
          </video>
          <div class="card-body">
            <p class="card-text">{this.props.video.NameVideo}</p>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Watch
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardD;
