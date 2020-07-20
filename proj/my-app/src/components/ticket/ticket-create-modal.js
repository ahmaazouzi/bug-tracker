import React, { Component } from "react";
import { Button, Col, Row, Modal, Container } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Header from "../layout/header";

class TicketCreateModal extends Component {
    render() {
        const inputBGColor = {
            backgroundColor: "#f5f5f5"
        }
        return (
            <Modal.Dialog className="modal-lg" role="document" style={{display: "hidden"}}>
                <Modal.Header closeButton>
                    <h5 class="modal-title" id="exampleModalLabel">Create a new issue:</h5>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <div class="mb-3">
                                    <h6>Summary:</h6>
                                    <textarea class="form-control" aria-label="With textarea" style={inputBGColor}></textarea>
                                </div>
                                <div class="mb-3">
                                    <h6>Points:</h6>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={inputBGColor}></input>
                                </div>

                                <div class="mb-3">
                                    <h6>Description</h6>
                                    <div class="input-group">
                                        <textarea class="form-control" aria-label="With textarea" style={inputBGColor}></textarea>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <h6>Assignee:</h6>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Reported" aria-describedby="basic-addon1" style={inputBGColor}></input>
                                    <a href="#">Assign to me</a>
                                </div>

                                <div class="mb-3">
                                    <h6>Status:</h6>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Reported" aria-describedby="basic-addon1" style={inputBGColor}></input>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div class="col-md-8 offset-md-2"></div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}

export default TicketCreateModal;