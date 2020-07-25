import React from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

function Team() {

    const showTickets = (tickets, showModal) => tickets.map(
        i => <TicketSummary info={i} key={i.id} showModal={showModal}/>);

    return (
        <Row className="justify-content-center">
            <Col style={{ marginTop: "1em" }} xl="4" className="">
                <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
                    <Card.Body>
                        <Card.Title style={{ marginBottom: "1em" }}>Team Members<span style={{ float: "right", marginTop: "-.5em" }}>
                            <a href="#" style={{ color: "white" }}>
                                <svg className="shadow sm" width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                                </svg>

                            </a>
                        </span></Card.Title>

                        <Card style={{ width: '100%', marginTop: ".5em" }} className="shadow sm rounded-0">
                            <Card.Body style={{ floa: "right" }}>
                                <Row>
                                    <div style={{ height: "50px", width: "50px", backgroundColor: "#A8A8A8", marginRight: "7px", padding: "5px", verticalAlign: "bottom" }} className="rounded-circle">
                                        <a href="http://localhost:3000" style={{ color: "#F4EFEB" }}>
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </a>

                                    </div>
                                    <div style={{ marginLeft: "1.5em" }}>
                                        <h5 style={{ marginBottom: "0px" }}>
                                            Ahmed Maazouzi
                                        </h5>
                                             email.email@emilano.com
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '100%', marginTop: ".5em" }} className="shadow sm rounded-0">
                            <Card.Body style={{ floa: "right" }}>
                                <Row>
                                    <div style={{ height: "50px", width: "50px", backgroundColor: "#A8A8A8", marginRight: "7px", padding: "5px", verticalAlign: "bottom" }} className="rounded-circle">
                                        <a href="http://localhost:3000" style={{ color: "#F4EFEB" }}>
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </a>

                                    </div>
                                    <div style={{ marginLeft: "1.5em" }}>
                                        <h5 style={{ marginBottom: "0px" }}>
                                            Ahmed Maazouzi
                  </h5>
                  email.email@emilano.com
                  </div>
                                </Row>




                            </Card.Body>
                        </Card>

                        <Card style={{ width: '100%', marginTop: ".5em" }} className="shadow sm rounded-0">
                            <Card.Body style={{ floa: "right" }}>
                                <Row>
                                    <div style={{ height: "50px", width: "50px", backgroundColor: "#A8A8A8", marginRight: "7px", padding: "5px", verticalAlign: "bottom" }} className="rounded-circle">
                                        <a href="http://localhost:3000" style={{ color: "#F4EFEB" }}>
                                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </a>

                                    </div>
                                    <div style={{ marginLeft: "1.5em" }}>
                                        <h5 style={{ marginBottom: "0px" }}>
                                            Ahmed Maazouzi
                  </h5>
                  email.email@emilano.com
                  </div>
                                </Row>




                            </Card.Body>
                        </Card>

                    </Card.Body>
                </Card>
            </Col>
            <Col style={{ marginTop: "1em" }} xl="6">
                <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
                    <Card.Body>
                        <Card style={{ width: '100%', marginTop: "" }} className="shadow sm rounded-0">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div style={{ marginBottom: "1em" }}>
                                            <h5>Name:</h5>
                    Ahmed Maazouzi
                    </div>
                                        <div style={{ marginBottom: "1em" }}>
                                            <h5>Email:</h5>
                    baloon.Drum@aol.org
                    </div>
                                        <div style={{ marginBottom: "1em" }}>
                                            <h5>Spirit Animal:</h5>
                    Winged Fire Snake
                    </div>
                                    </Col>
                                    <Col>
                                        <div style={{ width: "200px", height: "200px", backgroundColor: "#d3d3d3", float: "right" }}></div>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col>
                                        <div style={{ marginBottom: ".5em" }}>
                                            <h5>Bio:</h5>
                    Full many a glorious morning have I seen Flatter the mountain tops with sovereign eye, Kissing with golden face the meadows green, Gilding pale streams with heavenly alchemy; Anon permit the basest clouds to ride With ugly rack on his celestial face, And from the forlorn world his visage hide, Stealing unseen to west with this disgrace: Even so my sun one early morn did shine, With all triumphant splendour on my brow;
                    </div>
                                        <div style={{ marginBottom: "1em" }}>
                                            <h5>Role:</h5>
                    Admin
                    </div>
                                        <div style={{ marginBottom: "1em" }}>
                                            <h5>Assigned Tickets:</h5>
                    Ticket-1, Ticket-2, Ticket-3
                    </div>
                                    </Col>


                                </Row>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

function TicketSummary(){
    return (<p>nana</p>);
}

export default Team;