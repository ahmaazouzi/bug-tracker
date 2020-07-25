import React from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

function Profile(){
    return (
      <Container>
      <Row className="justify-content-center">
      <Col style={{ marginTop: "1em" }} xl="9">
          <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
            <Card.Body>
              <Card style={{ width: '100%', marginTop: "" }} className="shadow sm rounded-0">
                <Card.Body>
                  <Row>
                    <Col>
                      <div style={{ marginBottom: "1em" }}>
                        <h5>Name:</h5>
                    <p>Ahmed Maazouzi</p>
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
                    <p>Full many a glorious morning have I seen Flatter the mountain tops with sovereign eye, Kissing with golden face the meadows green, Gilding pale streams with heavenly alchemy; Anon permit the basest clouds to ride With ugly rack on his celestial face, And from the forlorn world his visage hide, Stealing unseen to west with this disgrace: Even so my sun one early morn did shine, With all triumphant splendour on my brow;</p>
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
      </Container>
    );
  }

  export default Profile