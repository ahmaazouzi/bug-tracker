import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Ticket extends Component {
    drag = ev => {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    render() {
        const info = this.props.info;
        const footerIcon = {
            color: "#A8A8A8",
            paddingRight: "2em"
        }

        return (
            <Card id={info.id} onClick={() => this.props.showModal(info.id)} className="shadow-sm" style={{ marginBottom: "0.7em", border: "1px #E7E8EA solid", borderTop: "red .3em solid", cursor: "grab" }} data-toggle="modal" data-target="#exampleModal" draggable="true" onDragStart={event => {this.drag(event); event.target.style.cursor = "grabbing"}}>
                <Card.Body style={{ padding: "1em" }}>
                    <div className="d-flex justify-content-between">
                        <h6>Some-{info.id}
                            </h6>
                        <div style={{ height: "40px", width: "40px", backgroundColor: "#A8A8A8", padding: "3px", float: "right" }} className="rounded-circle">
                            <a href="http://localhost:3000/" style={{ color: "#F4EFEB" }}>
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p>{info.summary}</p>
                    <a href="http://localhost:3000" style={footerIcon}>
                        <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                        </svg>
                    </a>
                    <a href="http://localhost:3000" style={footerIcon}>
                        <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-clock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                    </a>
                    <a href="http://localhost:3000" style={footerIcon}>
                        <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                    </a>

                    <div className='footer-info' style={{float: "right"}}>
        <a href="http://localhost:3000"  className="card-link"><span style={{width: "30%", backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>{info.points}</span>
                        </a>
                    </div>

                </Card.Body>
            </Card>
        );
    }
}

export default Ticket;