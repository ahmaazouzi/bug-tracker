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
    <Row className="justify-content-center" style={{height:"90%"}}>
      <Col style={{}} xl="8" className="p-0">
        
        <Card style={{ width: '100%', minHeight: "20%", marginTop: "1em" }} className="rounded-0 border-0">
          <Card.Body className="" style={{border: "1px solid rgb(211, 211, 211)", backgroundColor: "#F6F6F6", borderBottom: "0px", paddingTop: "5px"}} >
          <Row className="justify-content-center" style={{padding: "5px", paddingBottom: "10px"}}>
              <Col><span style={{fontWeight: "bold"}}>Sprint 12 </span><span style={{color: "grey", fontSize: "80%"}}>4 tickets</span></Col>
              <Col style={{textAlign: "right", fontSize: "", color: "grey"}}><span> </span><span style={{fontSize: "70%"}}>02 Oct 2020 . 02 Nov 2020</span></Col>
          </Row>   
                  <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>55</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>55</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>5</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>1</span>
                            </span>
                            </Row>
                            

                          </Card.Body>
                          
                    </Card>  
                    <hr style={{margin: "0px"}}></hr>  
          </Card.Body>

        </Card>
        <Card style={{ width: '100%', minHeight: "20%" }} className="rounded-0 border-0">
          <Card.Body  className="" style={{border: "1px solid rgb(211, 211, 211)", paddingTop: "5px", backgroundColor: "#F6F6F6"}}>
          <Row className="justify-content-center" style={{padding: "5px", paddingBottom: "10px"}}>
              <Col><span style={{fontWeight: "bold"}}>Tickets </span><span style={{color: "grey", fontSize: "80%"}}>4 tickets</span></Col>
              <Col style={{textAlign: "right", fontSize: "80%", color: "grey"}}><Button style={{margin: "0px", padding: "2px 5px 2px 5px"}}>Create Sprint</Button></Col>
          </Row>   

          <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>55</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>55</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>5</span>
                            </span>
                            </Row>
                          </Card.Body>
                    </Card>
                    <Card style={{border: "1px solid #5B5B5B", borderLeft: "5px solid red", borderBottom: "0px", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0">
                          <Card.Body style={{padding: "5px"}} >
                            <Row style={{margin: "0px", padding: "0px"}}>
                            <b style={{width: "10%"}}>Nana</b>
                            <span style={{width: "70%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "5px"}}>I am didi snan sdnasdnnsadnsdan dsdsdsds s d sd s ds d s ds d s </span>
                            {/* <b style={{color: "grey", width: "20%"}}> Nana B</b> */}
                                                      {/* ===================================================== */}
                                                      <span style={{width: "4%"}}>
                                                      <div style={{ height: "20px", width: "20px", backgroundColor: "#A8A8A8", paddingLeft: "2px" }}>
                       
                                <svg style={{marginBottom: "6px"}} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="#F4EFEB" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                        </div>
                        </span>
                          {/* ================================ */}
                          <b style={{color: "grey", width: "11%"}}>Ahmed </b>
                            <span style={{textAlign: "right", width: "5%"}}>
                            <span style={{backgroundColor: "#000008", paddingRight: "5px", paddingLeft: "5px", color: "#F4EFEB", borderRadius: "15px", marginTop: "3px"}}>1</span>
                            </span>
                            </Row>
                            

                          </Card.Body>
                          
                    </Card> 





          </Card.Body>
        </Card>
      </Col>
      <Col style={{ height: "100%"}} xl="3" className="p-0">
      <Card style={{ width: '100%', border: "1px solid rgb(211, 211, 211)", height: "100%" }} className="rounded-0 border-0">
          <Card.Body style={{margin: "1em", backgroundColor: "rgb(231, 232, 234)"}} className="rounded-0 border-0">

            <Card className="shadow p-3 mb-5 rounded text-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "20px 40px 0px 40px", padding: "20px", fontWeight: "bold", color: "white" }}>
                          Days Left:
                          <h1 style={{fontSize: "400%"}}>12</h1>
            </Card>
            <Card className="shadow p-3 mb-5 rounded text-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "20px 40px 0px 40px", padding: "20px", fontWeight: "bold", color: "white" }}>
                          Days Left:
                          <h1 style={{fontSize: "400%"}}>12</h1>
            </Card>
            <Card className="shadow p-3 mb-5 rounded text-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "20px 40px 0px 40px", padding: "20px", fontWeight: "bold", color: "white" }}>
                          Days Left:
                          <h1 style={{fontSize: "400%"}}>12</h1>
            </Card>

          </Card.Body>
        </Card>
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
    <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)", height: "100%"}} className="rounded-0 border-0">
      <Card.Body style={{height: "100%", backgroundColor: "red", margin: "1em"}}>
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