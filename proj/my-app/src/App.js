import React, { Component} from 'react';
import Form from './components/form';

import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Body from "./components/layout/body";
import TicketCreateModel from "./components/ticket/ticket-create-modal";
import { Row, Container, Col } from "react-bootstrap";
import Ticket from './components/ticket/ticket-card';

class App extends Component {
	render(){
		return (
      <Container fluid>
        <TicketCreateModel />
        <Row>
          <Sidebar />
          <Col>
            <Header />
            <Body />
          </Col>
        </Row>
      </Container>
			);
	}
}

export default App;
