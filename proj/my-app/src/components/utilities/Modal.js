import React, { Component } from "react";

class Icon  extends Component {
    render(path){
        return (
            <p style={{paddingTop: "1em"}} className="text-center">
                <a href="#" style={{color: "white"}}>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <br></br>
                    Add ticket
                </a>
            </p>
        );
    }
}

export default Icon;
