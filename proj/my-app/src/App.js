import React, { Component, useState } from 'react';

import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      error: null,
      isLoaded: false,
      tickets: []
    };
  }

  changeTicketStatus = (tickets) => {
    this.setState({ tickets: tickets });
  }

  showModal = (a) => { this.setState({ showModal: true }) };

  showCreateModal = () => this.setState({ showModal: true });

  addTicket = m => this.setState({ tickets: [...this.state.tickets, { status: m }] })

  componentDidMount() {
    fetch("https://localhost:5001/sprints/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tickets: result.assignedTickets
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<Spinit />)
    } else {
      return (
        <Router>
          <Container fluid>
            <Example showModal={this.state.showModal} setState={s => this.setState(s)} addTicket={d => this.addTicket(d)} />
            <Row>
              <Sidebar showCreateModal={this.showModal} />
              <Col>
                <Header onClick={this.showModal} />
                <Switch>
                  <Route exact path="/">
                    <Body tickets={this.state.tickets} setState={s => this.setState(s)} showModal={a => this.showModal(a)} />
                  </Route>
                  <Route path="/sprints">
                    <Sprints />
                  </Route>
                  <Route path="/team">
                    <Team />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  {/* <Route path="/messages">
                    <Messages />
                  </Route>
                  <Route path="/settings">
                    <Settings />
                  </Route> */}
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      );
    }
  }
}

function Spinit() {
  const spinnerStyle = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%"
  }

  return (
    <Container style={spinnerStyle}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>


  );
}

function Example(props) {
  const [status, setStatus] = useState("todo");

  function handleChange(event) {
    setStatus(event.target.value);
  }

  function handleSubmit() {
    alert('A name was submitted: ' + status);
  }

  function handleShows() {
    props.setState({ showModal: false });
  }

  return (
    <>
      <Modal show={props.showModal} onHide={handleShows}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit}>
            <label>
              Name:
          <input type="text" value={status} onChange={handleChange} />
            </label>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShows}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { props.addTicket(status); handleShows() }} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Settings() {
  return (
    <div>
      <h1>
        My settings
      </h1>
      <p>Settings go here, mate!</p>
    </div>)
}

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

function Team() {
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

function Messages() {
  return (
    <Container>
      <Row className="justify-content-center">
      <Col xs="8" style={{border: "1px solid rgb(211, 211, 211)", marginTop: "1em"}}>
      <Table>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length:  4}).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 6 }).map((_, index) => (
        <td key={index}>Table cell</td>
      ))}
    </tr>
  </tbody>
</Table>
</Col>
</Row>
    </Container>)
}

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


export default App;
