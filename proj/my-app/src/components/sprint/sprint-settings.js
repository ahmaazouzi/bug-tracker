import React from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

function Sprints() {
    return (
      <Row className="justify-content-center">
        <Col style={{ marginTop: "1em"}} xl="6" className="p-0">
          <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
            <Card.Body>
              <Card.Title style={{ marginBottom: "1em", marginRight: "3em" }}>
                Tickets
                <input style={{marginLeft: "4em"}}type="radio" label="dada" id="all"></input>
                <label for="all" style={{fontSize: ".8em", paddingLeft: ".4em"}}> all</label>
                <input style={{marginLeft: "2em"}}type="radio" label="dada" id="in sprint"></input>
                <label for="all" style={{fontSize: ".8em", paddingLeft: ".4em"}}> in sprint</label>
                <input style={{marginLeft: "2em"}}type="radio" label="dada" id="not in sprint"></input>
                <label for="all" style={{fontSize: ".8em", paddingLeft: ".4em"}}> not in sprint</label>   
              </Card.Title>
              <div style={{ backgroundColor: "white", maxHeight: "65vh", overflow: "auto" }} className="shadow l">
                <Table striped bordered hover overflow style={{height: "100px", overflow: "auto", fontSize: "1em"}} className="overflow-auto">
                  <thead>
                    <tr>
                      <th>Ticket</th>
                      <th>Summary</th>
                      <th>Date Reporter</th>
                      <th>Add<br />Sprint</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr>
                    <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr>
                    <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020s</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr>
                    <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr>
                    <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr>
                    <tr>
                      <td>SPR-233</td>
                      <td>ome Some stuff</td>
                      <td>03/01/2020</td>
                      <td><FormCheck></FormCheck> </td>
                    </tr> 
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ marginTop: "1em" }} xl="6" className="p-0"> 
          <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)", maxHeight: "65vh" }} className="rounded-0 border-0">
            <Card.Body>
              <Card.Title>Sprints</Card.Title>
              <Card style={{ width: '100%', marginTop: ".5em" }} className="shadow sm rounded-0">
                <Card.Body>
                  <Tabs defaultActiveKey="currrentSprint" id="uncontrolled-tab-example">
                    <Tab eventKey="currrentSprint" title="Current Spring" style={{ marginTop: "2em" }}>
                      <div>Full many a glorious morning have I seen Flatter the mountain tops with sovereign eye, Kissing with golden face the meadows green, Gilding pale streams with heavenly alchemy; Anon permit the basest clouds to ride With ugly rack on his celestial face, And from the forlorn world his visage hide, Stealing unseen to west with this disgrace: Even so my sun one early morn did shine, With all triumphant splendour on my brow;</div>
                    </Tab>
                    <Tab eventKey="olderSprints" title="Previous Sprints" style={{ marginTop: "2em" }}>
                      <p>some bullshit</p>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
                  <Row className="justify-content-center">
            <Button style={{marginTop: "1em"}}>Save Changes</Button>
          </Row>
        </Col>
      </Row>
    )
  }

  export default Sprints;