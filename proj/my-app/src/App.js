import React, { Component, useState } from 'react';

import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
import { Row, Container, Col, Spinner, Button, Modal } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
                  <Route path="/messages">
                    <Messages />
                  </Route>
                  <Route path="/settings">
                    <Settings />
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
    <div>
      <h1>
        My Sprints
      </h1>
      <p>Here, we fix them sprints</p>
    </div>)
}

function Team() {
  return (
    <div>
      <h1>
        My team
      </h1>
      <p>Here you discipline (or get disciplined by yout team</p>
    </div>)
}

function Messages() {
  return (
    <div>
      <h1>
        Messages
      </h1>
      <p>
        Here, you sneakily see messages!
      </p>
    </div>)
}


export default App;
