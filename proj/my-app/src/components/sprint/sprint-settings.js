import React, { useState } from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

const titlesStyle = {
  color: "grey",
  fontWeight: "bold"
}

function Sprints(props) {
  const [showAllTickets, setShowAllTickets] = useState(false);
  const { sprint, tickets } = props;
  const ticketThumbs = tickets => tickets.map(ticket => <TicketThumb ticket={ticket} sprint={sprint} />);

  const handleRadioClick = e => {setShowAllTickets(!showAllTickets); console.log(showAllTickets)};

  return (
    <Row className="justify-content-center">
      <Col style={{ marginTop: "1em" }} xl="6" className="p-0">
        <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
          <Card.Body>
            <Card.Title style={{ marginBottom: "1em", marginRight: "3em" }}>
              Tickets
              <form>
              <input style={{ marginLeft: "4em" }} type="radio" name="sprintStatus" id="all" value="all" checked={showAllTickets} onChange={handleRadioClick}></input>
  <label for="all" style={{ fontSize: ".8em", paddingLeft: ".4em" }} > all<span style={{fontStyle: "italic", color: "grey", fontWeight: "bold"}}> ({tickets.length})</span></label> 
              <input style={{ marginLeft: "2em" }} type="radio" defaultChecked="checked" checked={!showAllTickets} onChange={handleRadioClick} name="sprintStatus" label="dada" id="in sprint"value="inn sprint" ></input>
              <label for="all" style={{ fontSize: ".8em", paddingLeft: ".4em" }}> in sprint<span style={{fontStyle: "italic", color: "grey", fontWeight: "bold"}}> ({sprint.assignedTickets.length})</span></label>
              </form>
            </Card.Title>
            <div style={{ backgroundColor: "white", maxHeight: "65vh", overflow: "auto" }} className="shadow l">
              <Table striped bordered hover overflow style={{ height: "100px", overflow: "auto", fontSize: "1em" }} className="overflow-auto">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Summary</th>
                    <th>Date Reporter</th>
                    <th>Add to<br />Sprint</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketThumbs(showAllTickets ? tickets : tickets.filter(t => t.sprintID === sprint.id))}
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
  const { ticket, sprint } = props;
  const toggleTicket = ticket => {
    console.log("before: ", ticket.sprintID)
    if (ticket.sprintID === 1)
      ticket.sprintID = 3;
    else
      ticket.sprintID = 1;
    console.log("after: ", ticket.sprintID)
  };

  return (
    <tr>
      <td>SPR-{ticket.id}</td>
      <td>{ticket.summary}</td>
      <td>{new Date(ticket.dateReported).toLocaleDateString("en-US")}</td>
      <td><FormCheck defaultChecked={(sprint.id === ticket.sprintID ? true : false)} onClick={ticket => {toggleTicket(ticket)}}></FormCheck> </td>
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
                  <h6 style={titlesStyle}>Name:</h6>
                  SPR-{sprint.id}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Start Date:</h6>
                  {new Date(sprint.startDate).toLocaleDateString("en-US")}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>End Date:</h6>
                  {new Date(sprint.endDate).toLocaleDateString("en-US")}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Goals:</h6>
                  {sprint.goals}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Retrospective:</h6>
                  {sprint.retrospective}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Starting Points:</h6>
                  SPR-{sprint.points}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Points Eliminated:</h6>
                  {sprint.pointsEliminated}
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h6 style={titlesStyle}>Tickets:</h6>
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