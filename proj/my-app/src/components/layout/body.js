import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Ticket from "../ticket/ticket-card";

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
            <Row className="justify-content-center" style={{backgroundColor: "#F8F8F8"}}>
                <Col id="todoCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}
                onDrop={(e) => {this.drop(e, statuses["todoCat"])}} onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header bg-info text-light">
                        TO DO
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        
                            {this.showTickets(todo, showModal)}
                        
                    </div>
                </Col>

                <Col id="inprogressCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}
                onDrop={(e) => {this.drop(e, statuses["inprogressCat"])}}  onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header text-light" style={{backgroundColor: "#FF8C00"}}>
                        IN PROGRESS
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        {this.showTickets(inProgress, showModal)} 
                    </div>
                </Col>

                <Col  id="doneCat" className="rounded-lg border-0 border-light p-0" style={{backgroundColor: "white", height: "auto", minHeight: "85vh", margin: "14px", boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)" }}
               onDrop={(e) => {this.drop(e, statuses["doneCat"])}} onDragOver={e => this.allowDrop(e)}>
                    <div className="card-header text-light bg-success">
                        DONE
                    </div>
                    <div className="card-body" style={{padding: "0.7em"}}>
                        {this.showTickets(done, showModal)}
                    </div>
                </Col>


    
            </Row>
        )
    }
}

export default Body;
