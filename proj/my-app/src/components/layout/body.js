import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Ticket from "../ticket/ticket-card";

class Body extends Component {
    render() {
        return (
            <Row className="justify-content-center">
                <Col className="rounded-lg border-0 border-light p-0" style={{ height: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="card-header bg-info text-light">
                        TO DO
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        <Ticket />
                        <Ticket />
                    </div>
                </Col>

                <Col className="rounded-lg border-0 border-light p-0" style={{ height: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="card-header text-light" style={{backgroundColor: "#FF8C00"}}>
                        IN PROGRESS
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        <Ticket />
                    </div>
                </Col>

                <Col className="rounded-lg border-0 border-light p-0" style={{ height: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="card-header text-light bg-success">
                        DONE
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        <Ticket />
                        <Ticket />
                    </div>
                </Col>


    
            </Row>
        )
    }
}

export default Body;
