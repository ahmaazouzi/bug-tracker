import React from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

function Sprints(props) {
  const { sprint } = props;
  const ticketThumbs = tickets => tickets.map(ticket => <TicketThumb ticket={ticket} />);

  return (
    <Row className="justify-content-center">
      <Col style={{ marginTop: "1em" }} xl="6" className="p-0">
        <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
          <Card.Body>
            <Card.Title style={{ marginBottom: "1em", marginRight: "3em" }}>
              Tickets
              <form>
              <input style={{ marginLeft: "4em" }} type="radio"  name="sprintStatus" id="all" value="all"></input>
              <label for="all" style={{ fontSize: ".8em", paddingLeft: ".4em" }}> all</label> 
              <input style={{ marginLeft: "2em" }} type="radio" name="sprintStatus" label="dada" id="in sprint"value="inn sprint" ></input>
              <label for="all" style={{ fontSize: ".8em", paddingLeft: ".4em" }}> in sprint</label>
              <input style={{ marginLeft: "2em" }} type="radio" name="sprintStatus" label="dada" id="not in sprint" value="not in sprint"></input>
              <label for="all" style={{ fontSize: ".8em", paddingLeft: ".4em" }}> not in sprint</label>
              </form>
            </Card.Title>
            <div style={{ backgroundColor: "white", maxHeight: "65vh", overflow: "auto" }} className="shadow l">
              <Table striped bordered hover overflow style={{ height: "100px", overflow: "auto", fontSize: "1em" }} className="overflow-auto">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Summary</th>
                    <th>Date Reporter</th>
                    <th>Add<br />Sprint</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketThumbs(sprint.assignedTickets)}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col style={{ marginTop: "1em" }} xl="6" className="p-0">
        <SprintInfo sprint={sprint} />
        <Row className="justify-content-center">
          <Button style={{ marginTop: "1em" }}>Save Changes</Button>
        </Row>
      </Col>
    </Row>
  )
}

function TicketThumb(props) {
  const { ticket } = props;
  return (
    <tr>
      <td>SPR-{ticket.id}</td>
      <td>{ticket.summary}</td>
      <td>{new Date(ticket.dateReported).toLocaleDateString("en-US")}</td>
      <td><FormCheck></FormCheck> </td>
    </tr>
  )
}

function SprintInfo(props) {
  const { sprint } = props;
  return (
    <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)", maxHeight: "65vh" }} className="rounded-0 border-0">
      <Card.Body>
        <Card.Title>Sprints</Card.Title>
        <Card style={{ width: '100%', marginTop: ".5em" }} className="shadow sm rounded-0">
          <Card.Body>
            <Tabs defaultActiveKey="currrentSprint" id="uncontrolled-tab-example">
              <Tab eventKey="currrentSprint" title="Current Sprint" style={{ marginTop: "2em" }}>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Name:</h6>
                  SPR-{sprint.id}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Start Date:</h6>
                  SPR-{new Date(sprint.startDate).toLocaleDateString("en-US")}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>End Date:</h6>
                  SPR-{new Date(sprint.endDate).toLocaleDateString("en-US")}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Goals:</h6>
                  SPR-{sprint.goals}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Retrospective:</h6>
                  SPR-{sprint.retrospective}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Starting Points:</h6>
                  SPR-{sprint.points}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Points Eliminated:</h6>
                  SPR-{sprint.pointsEliminated}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6>Tickets:</h6>
                  {sprint.assignedTickets.map(ticket => <TicketID id={ticket.id}/> )}
                </div>
              </Tab>
              <Tab eventKey="olderSprints" title="Previous Sprints" style={{ marginTop: "2em" }}>
                <p>some bullshit</p>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

function TicketID(props){
  const { id } = props;
  return (
    <span>
    <a href="#">
      SPRT-{id}
    </a>, </span>
  );
}

export default Sprints;