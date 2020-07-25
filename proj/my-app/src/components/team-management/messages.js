import React  from React;
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck } from "react-bootstrap";

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

  export default Messages;