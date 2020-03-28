import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  render() {
    return (
     <h1>I am an idiot!</h1>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
