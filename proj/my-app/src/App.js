import React, { Component, useState } from 'react';

import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
import Profile from "./components/user-management/user";
import Team from "./components/team-management/team";
import Sprints from "./components/sprint/sprint-settings";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      error: null,
      isLoaded: false,
      tickets: [],
      sprint: {}
    };
  }

  changeTicketStatus = (tickets) => {
    this.setState({ tickets: tickets });
  }

  showModal = (a) => { this.setState({ showModal: true }) };

  showCreateModal = () => this.setState({ showModal: true });

  addTicket = m => this.setState({ tickets: [...this.state.tickets, { status: m }] })

  componentDidMount() {
    // fetch("https://localhost:5001/sprints/1")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         tickets: result.assignedTickets
    //       });
    Promise.all([
      fetch("https://localhost:5001/teams/1"),
      fetch("https://localhost:5001/sprints/1")
    ])
        .then(res => Promise.all(res.map(r => r.json())))
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              team: (result[0]).members,
              tickets: (result[1]).assignedTickets,
              sprint: result[1]
            });
 // ====================
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
    const { error, isLoaded, sprint } = this.state;
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
                    <Sprints sprint={sprint}/>
                  </Route>
                  <Route path="/team">
                    <Team team={this.state.team} />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
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

export default App;