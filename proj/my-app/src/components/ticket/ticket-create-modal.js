import React, { Component } from "react";
import { Button, Col, Row, Modal, Container } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Header from "../layout/header";

import { Formik, Field, Form, ErrorMessage, TextArea } from 'formik';
import * as Yup from 'yup';

class TicketCreateModal extends Component {
    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    render() {

        return (
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Formik
                                initialValues={
                                    {
                                        summary: 'ddd',
                                        points: 4,
                                        description: 'ddddd',
                                        // assignee: '',
                                        sprintID: 1,
                                        status: 'inprogress',
                                        reporterID: 1,
                                        teamID: 1,
                                        
                                    }
                                }
                                validationSchema={Yup.object({
                                    summary: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('Required'),
                                    // points: Yup.number()
                                    //     .max(20, 'Must be 20 characters or less')
                                    //     .required('Required'),
                                    description: Yup.string()
                                        .required('Required'),
                                    // assignee: Yup.string()
                                    //     .required('Required'),
                                    status: Yup.string()
                                        .required('Required'),
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        // alert(JSON.stringify(values, null, 2));
                                        console.log(JSON.stringify(values));
                                        // setSubmitting(false);
                                    }, 400);
                                    this.postData('https://localhost:5001/tickets', values)
                                        .then(values => {
                                            console.log(values); // JSON data parsed by `data.json()` call
                                        });
                                }}
                            >
                                <Form>
                                    <InputField type="textarea" name="summary" label="Summary" placeholder="Provide a brief description of your ticket ..." />
                                    <InputField type="text" name="points" label="Points" placeholder="Estimate the difficulty of the issue" />
                                    <InputField type="textarea" name="description" label="Description" placeholder="Describe your issue in some detail ... " />
                                    {/* <InputField type="text" name="assignee" label="Assignee" placeholder=" Assign the issue to someone" /> */}
                                    <InputField type="text" name="status" label="Status" placeholder="Status" />
                                    <button type="submit">Submit</button>
                                </Form>

                            </Formik>
                        </Col>
                    </Row>
                </Container>

                <div class="col-md-8 offset-md-2"></div>
            </Modal.Body>
        );
    }
}

function InputField(props) {
    const StyledErrorMessage = props => (<span style={{ color: "red" }}><ErrorMessage name={props.name} /></span>);
    const inputBGColor = {
        backgroundColor: "#f5f5f5"
    }
    const { type, name, label, placeholder } = props;

    return (
        <div class="mb-3">
            <h6>{label}:</h6>
            {
                type === "textarea"
                    ?
                    <Field component="textarea" class="form-control" name={name} style={inputBGColor} placeholder={placeholder} />
                    :
                    <Field type={type} class="form-control" name={name} style={inputBGColor} placeholder={placeholder} />
            }
            <StyledErrorMessage name={name} />
        </div>
    )
}

export default TicketCreateModal;