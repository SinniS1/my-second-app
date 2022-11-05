import React, { Component } from "react";
import loading from "./loading.gif";

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="text-center" >
          <img style={{height:'100px'}} src={loading} alt="Loading next news" />
        </div>
      </>
    );
  }
}
