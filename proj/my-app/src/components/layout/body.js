import React, { Component } from "react";
import { Row, Col, Card, Nav} from "react-bootstrap";
import Ticket from "../ticket/ticket-card";
import { Link } from "react-router-dom";

class Body extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         tickets: this.props.tickets
    //     };
    // }

    showTickets = (tickets, showModal) => tickets.map(
        i => <Ticket info={i} key={i.id} showModal={showModal}/>);

    allowDrop = (ev) => ev.preventDefault();   

   
    drop = (ev, status) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text/plain", ev.target.id);

        // this.setState({
        //     tickets: this.state.tickets.map(ticket => (ticket.id.toString() === data ? {...ticket, status} : ticket))
        //   });
        
        this.props.setState({tickets: this.props.tickets.map(ticket => (ticket.id.toString() === data ? {...ticket, status} : ticket))});

        // this.props.setState({tickets: this.state.tickets})

        // console.log(this.state.tickets.map(i => i.status));
        // console.log(this.props.tickets.map(i => i.status));
      }  

    render() {
        console.log("Body rerender!");
        const statuses = {
            "todoCat": "todo",
            "inprogressCat": "in progress",
            "doneCat": "done"
        }
        const elems = this.props.tickets;
        const showModal = this.props.showModal;

        const todo = elems.filter(i => i.status === "todo");
        const inProgress = elems.filter(i => i.status === "in progress");
        const done = elems.filter(i => i.status === "done");
        return (
            <Row className="justify-content-center" 
            // style={{backgroundColor: "#F8F8F8"}}
            >
                <Col id="todoCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", marginTop: "10px",marginLeft: "10px",marginRight: "10px",
                // boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" 
            }}
                onDrop={(e) => {this.drop(e, statuses["todoCat"])}} onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header bg-info text-light">
                        TO DO
                    </div>
                    <div className="card-body" style={{padding: "0.7em", backgroundColor: "rgb(231, 232, 234)", minHeight: "90%"}}>
                        
                            {this.showTickets(todo, showModal)}
                        
                    </div>
                </Col>

                <Col id="inprogressCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", marginTop: "10px", marginRight: "10px"
                // boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" 
            }}
                onDrop={(e) => {this.drop(e, statuses["inprogressCat"])}}  onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header text-light" style={{backgroundColor: "#FF8C00"}}>
                        IN PROGRESS
                    </div>
                    <div className="card-body" style={{padding: "0.7em", backgroundColor: "rgb(231, 232, 234)", minHeight: "90%"}}>
                        {this.showTickets(inProgress, showModal)} 
                    </div>
                </Col>

                <Col  id="doneCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", marginTop: "10px",
                // boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)"
             }}
               onDrop={(e) => {this.drop(e, statuses["doneCat"])}} onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header text-light bg-success">
                        DONE
                    </div>
                    <div className="card-body" style={{padding: "0.7em", backgroundColor: "rgb(231, 232, 234)" , minHeight: "90%"}}>
                        {this.showTickets(done, showModal)}
                    </div>
                </Col>


                <Col  id="doneCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", marginTop: "10px",
                // boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)"
             }}>
                    <div className="card-body" style={{padding: "0.7em", height: "100%"}}>
                    <h6 className="text-center" style={{fontWeight: "bolder"}}>Sprint V-22:</h6>
                    <Card className="shadow p-3 mb-5 rounded text-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "20px 40px 0px 40px", padding: "20px", fontWeight: "bold", color: "white" }}>
                        Days Left:
                        <h1 style={{fontSize: "400%"}}>12</h1>
                        </Card>
                    <Card className="shadow p-3 mb-5 rounded text-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "0px 40px 0px 40px", padding: "20px", fontWeight: "bold", color: "white"}}>
                    Points Eliminated:
                        <h1 style={{fontSize: "350%"}}>48 %</h1>
                        </Card>
                    <Card className="shadow p-3 mb-5 rounded text-center Justify-content-center" style={{height: "25%", backgroundColor: "rgb(16, 34, 52)", margin: "0px 40px 0px 40px", fontWeight: "bold", color: "white" }}>
                    Champ:
                    <Nav className="Justify-content-end" style={{margin: "15px 50px"}}>
								<div style={{height: "40px", width: "40px",  backgroundColor: "#F4EFEB ",  marginRight: "5px", padding: "3px", float: "right"}} className="rounded-circle">
									<Link to="/profile" href="http://localhost:3000" style={{color: "#A8A8A8"}}>
										<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
										</svg>
									</Link>
								</div>
						</Nav>
                        @ahmaazouzi 
                    </Card>
                    </div>
                </Col>


    
            </Row>
        )
    }
}

export default Body;
