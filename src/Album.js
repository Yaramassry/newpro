
import React, { Component } from "react";

class Album extends React.Component {
  render() {
    return (
     <div className="card col-lg-3 col-md-4 col-sm-6 col-12">
      <a href={this.props.url}><img className="card-img-top" src={this.props.thumbnailUrl}  /></a>
      <div className="card-body" >
        <h5 className="card-title">{this.props.title}</h5>
      </div>
    </div>
    )
  }
}

export default Album;

