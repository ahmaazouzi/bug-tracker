import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        const notificationBadge =  {
            fontSize: "10px",
            marginLeft: "-15px",
            marginTop: "-10px",
            padding: "5px 10px",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white"
          };
        return (
            <Col xs={1} style={{ backgroundColor: "#102234", height: "auto", minHeight: "100vh" }}>

                <h3 style={{ color: "white", paddingTop: ".25em", paddingBottom: "2em" }} className="text-center">
                    <a href="http://localhost:3000" style={{ color: "white" }}>
                        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-hexagon-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 4.577L8 1v14l6-3.577V4.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                        </svg>
                    </a>
                </h3>

                <p onClick={this.props.showCreateModal} style={{paddingTop: "2em"}} className="text-center">
                    <a href="#" style={{color: "white"}}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                        </svg>
                        <br></br>
                        Add ticket
                    </a>
                </p>

                <p style={{paddingTop: "1em"}} className="text-center">
                    <Link to="/" href="http://localhost:3000" style={{color: "white"}}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                            <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>                        
                        </svg>
                        <br></br>
                        Home
                    </Link>
                </p>

                <p style={{paddingTop: "1em"}} className="text-center">
                    <Link to="/sprints" href="http://localhost:3000" style={{color: "white"}}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
                            <path fillRule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>                       
                        </svg>
                        <br></br>
                        Sprints
                    </Link>
                </p>

                <p style={{paddingTop: "1em"}} className="text-center">
                    <Link to="/team" href="http://localhost:3000" style={{color: "white"}}>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>                       
                        </svg>
                        <br></br>
                        Team
                    </Link>
                </p>


                {
                    <p style={{paddingTop: "1em", whiteSpace: "nowrap"}} className="text-center">
                    <Link to="/messages" href="http://localhost:3000" style={{color: "white"}}>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pie-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
                  </svg>
                        <br></br>
                        Stats
                    </Link>
                    </p>
                }

                { <p style={{paddingTop: "1em", whiteSpace: "nowrap"}} className="text-center">
                    <Link to="/messages" href="http://localhost:3000" style={{color: "white"}}>
                        <span><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                        </svg><span style={notificationBadge}>2</span></span>
                        <br></br>
                        Messages
                    </Link>
                </p>}

            </Col>
        )
    }
}

export default Sidebar;

