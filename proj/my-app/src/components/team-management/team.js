import React, { useState } from "react";
import { Row, Container, Col, Spinner, Button, Modal, Card, Tabs, Tab, Table, FormCheck, Nav } from "react-bootstrap";

// const titlesStyle = {
//     color: "grey",
//     fontWeight: "bold"
// }

// // function Team(props) {
// //     const { team } = props;
// //     const [SelectedProfile, setSelectedProfile] = useState(team[0]);

// //     const showTeam = () => team.map(i => <ProfileSummary info={i} key={i.id} onClick={i => {const profile = showProfileDetails(i); setSelectedProfile(profile)}}/>);
// //     const showProfileDetails = i => team.find( member => i === member.id);

// //     return (
// //         <Row className="justify-content-center">

// //             <Col style={{ marginTop: "1em" }} xl="4" className="">
// //                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0" className="shadow sm rounded-0">
// //                     <Card.Body style={{ padding: "0px"}}>
// //                         <Card.Title style={{padding:"1em", borderBottom:"1px solid rgba(0,0,0,.125)"}}>
// //                             Team Members
// //                             <span style={{ float: "right", marginTop: "-.5em" }}>
// //                                 <a href="#" style={{ color: "white" }}>
// //                                     <svg className="shadow sm" width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
// //                                         <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
// //                                     </svg>
// //                                 </a>
// //                             </span>
// //                         </Card.Title>  
// //                         {showTeam(props)}
// //                     </Card.Body>
// //                 </Card>
// //             </Col>

// //             <Col style={{ marginTop: ""}} xl="8">
// //                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)"}} className="rounded-0 border-0">
// //                     <Card.Body>
// //                         <ProfileDetails member={SelectedProfile}/>
// //                     </Card.Body>
// //                 </Card>
// //             </Col>
// //         </Row>
// //     )
// // }

// // ===========================================================================================================
// // function Team(props) {
// //     const { team } = props;
// //     const [CurrentTeam, setTeamView] = useState(true);


// //     return (
// //         <div>
// //             <h1>Lalalal</h1>
// //             {/* <Row>
// //                 <h3><Nav.Link onClick={() => setTeamView(true)}>Current Team</Nav.Link></h3>
// //                 <h3><Nav.Link onClick={() => setTeamView(false)}>My Teams</Nav.Link></h3>
// //             </Row>
// //             <Row>
// //                 <Col>
// //                     <TeamViewSwitch CurrentTeam={CurrentTeam} team={team} />
// //                 </Col>
// //             </Row> */}
// //         </div>
// //     )
// // }



// const TeamViewSwitch = props => {
//     const { team } = props;
//     const CurrentTeamOn = props.CurrentTeam;
//     console.log(CurrentTeamOn);
//     return CurrentTeamOn ? <CurrentTeamView team={team} /> : <MyTeamsView />
// }

// function CurrentTeamView(props) {
//     const { team } = props;
//     const [CurrentTeam, setTeamView] = useState(true);
//     const [SelectedProfile, setSelectedProfile] = useState(team[0]);


//     const showTeam = () => team.map(i => <ProfileSummary info={i} key={i.id} onClick={i => { const profile = showProfileDetails(i); setSelectedProfile(profile) }} />);
//     const showProfileDetails = i => team.find(member => i === member.id);

//     return (
//         <Row className="justify-content-center">

//             <Col style={{ marginTop: "1em" }} xl="4" className="">
//                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0" className="shadow sm rounded-0">
//                     <Card.Body style={{ padding: "0px" }}>
//                         <Card.Title style={{ padding: "1em", borderBottom: "1px solid rgba(0,0,0,.125)" }}>
//                             Team Members
//                             <span style={{ float: "right", marginTop: "-.5em" }}>
//                                 <a href="#" style={{ color: "white" }}>
//                                     <svg className="shadow sm" width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
//                                         <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
//                                     </svg>
//                                 </a>
//                             </span>
//                         </Card.Title>
//                         {showTeam(props)}
//                     </Card.Body>
//                 </Card>
//             </Col>

//             <Col style={{ marginTop: "" }} xl="8">
//                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
//                     <Card.Body>
//                         <ProfileDetails member={SelectedProfile} />
//                     </Card.Body>
//                 </Card>
//             </Col>
//         </Row>
//     )
// }

// function MyTeamsView(props) {
//     return (
//         <Row className="justify-content-center">

//             <Col style={{ marginTop: "1em" }} xl="4" className="">
//                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0" className="shadow sm rounded-0">
//                     <Card.Body style={{ padding: "0px" }}>
//                         <Card.Title style={{ padding: "1em", borderBottom: "1px solid rgba(0,0,0,.125)" }}>
//                             Current Team
//                         {/* <span style={{ float: "right", marginTop: "-.5em" }}>
//                             <a href="#" style={{ color: "white" }}>
//                                 <svg className="shadow sm" width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
//                                 </svg>
//                             </a>
//                         </span> */}
//                         </Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//     </Card.Text>
//                     </Card.Body>
//                 </Card>


//                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)", marginTop: "15px" }} className="rounded-0 border-0" className="shadow sm rounded-0">
//                     <Card.Body style={{ padding: "0px" }}>
//                         <Card.Title style={{ padding: "1em", borderBottom: "1px solid rgba(0,0,0,.125)" }}>
//                             My Teams
//                         {/* <span style={{ float: "right", marginTop: "-.5em" }}>
//                             <a href="#" style={{ color: "white" }}>
//                                 <svg className="shadow sm" width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
//                                 </svg>
//                             </a>
//                         </span> */}
//                         </Card.Title>
//                         <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//     </Card.Text>
//     <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//     </Card.Text>
//     <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//     </Card.Text>
//     <Card.Text>
//                             Some quick example text to build on the card title and make up the bulk of
//                             the card's content.
//     </Card.Text>
//                     </Card.Body>
//                 </Card>

//             </Col>

//             <Col style={{ marginTop: "" }} xl="8">
//                 <Card style={{ width: '100%', backgroundColor: "", border: "1px solid rgb(211, 211, 211)" }} className="rounded-0 border-0">
//                     <Card.Body style={{textAlign: "center"}}>
//                                 <a href="#" style={{ color: "white" }}>
//                                     <svg className="shadow sm" width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg">
//                                         <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
//                                     </svg>
//                                 </a>

//                 </Card.Body>
//                 </Card>
//             </Col>
//         </Row>
//     );
// }
// // ===========================================================================================================


// function ProfileSummary(props) {
//     const { info } = props;
//     return (
//         <Card style={{ borderTop: "none", borderLeft: "none", borderRight: "none", width: '100%', marginTop: "", cursor: "pointer" }} className="shadowzzzz sm rounded-0" onClick={() => props.onClick(info.id)}>
//             <Card.Body style={{ float: "right" }}>
//                 <Row>
//                     <div style={{ height: "50px", width: "50px", backgroundColor: "#A8A8A8", marginRight: "7px", marginLeft: "1em", padding: "5px", verticalAlign: "bottom" }} className="rounded-circle">
//                         <a href="http://localhost:3000" style={{ color: "#F4EFEB" }}>
//                             <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
//                             </svg>
//                         </a>
//                     </div>
//                     <div style={{ marginLeft: "1.5em" }}>
//                         <h6 style={{ marginBottom: "0px", color: "grey" }}>
//                             {info.fullName}
//                         </h6>
//                         {info.email}
//                     </div>
//                 </Row>
//             </Card.Body>
//         </Card>
//     );
// }

// function ProfileDetails(props) {
//     const { member } = props;
//     console.log(member)
//     return (
//         <Card style={{ width: '100%', marginTop: "", minHeight: "85vh" }} className="shadow sm rounded-0">
//             <Card.Body>
//                 <Row>
//                     <Col>
//                         <div style={{ marginBottom: "1em" }}>
//                             <h6 style={titlesStyle}>Name:</h6>
//                             {member.fullName}
//                         </div>
//                         <div style={{ marginBottom: "1em" }}>
//                             <h6 style={titlesStyle}>Email:</h6>
//                             {member.email}
//                         </div>
//                         <div style={{ marginBottom: "1em" }}>
//                             <h6 style={titlesStyle}>Spirit Animal:</h6>
//                             {member.spiritAnimal}
//                         </div>
//                     </Col>
//                     <Col>
//                         <div style={{ width: "200px", height: "200px", backgroundColor: "#d3d3d3", float: "right" }}></div>
//                     </Col>
//                 </Row>
//                 <hr></hr>
//                 <Row>
//                     <Col>
//                         <div style={{ marginBottom: ".5em" }}>
//                             <h6 style={titlesStyle}>Bio:</h6>
//                             {member.bio}
//                         </div>
//                         <div style={{ marginBottom: "1em" }}>
//                             <h6 style={titlesStyle}>Role:</h6>
//                             {member.role}
//                         </div>
//                         <div style={{ marginBottom: "1em" }}>
//                             <h6 style={titlesStyle}>Assigned Tickets:</h6>
//                             {member.tic}
//                         </div>
//                     </Col>
//                 </Row>
//             </Card.Body>
//         </Card>
//     );
// }

function Team(props) {
    return (
        <Row className="justify-content-center" style={{}}>
            <Col style={{ margin: "0em 1em 0em 0em" }} xl="7" className="p-0">
                <Card style={{ width: '100%', maxHeight: "45%", minHeight: "40vh", marginTop: "1em" }} className="rounded-0 border-0">
                    <Card.Body className="" style={{ border: "1px solid rgb(211, 211, 211)", backgroundColor: "#F6F6F6", paddingTop: "5px" }} >
                        <Row className="justify-content-center" style={{ padding: "5px", paddingBottom: "10px" }}>
                            <Col style={{borderRight: "1px solid rgb(211, 211, 211)"}}><span style={{ fontWeight: "bold" }}>Team Settings</span><span style={{ color: "grey", fontSize: "80%" }}>4</span></Col>
                            <Col style={{ fontWeight: "bold", color: "grey" }}><span> Team Members</span><span style={{ fontSize: "70%" }}></span></Col>
                        </Row>
                        <hr style={{ margin: "0px" }}></hr>
                        <Row className="justify-content-center" style={{ padding: "5px", paddingBottom: "10px" }}>
                            <Col style={{borderRight: "1px solid rgb(211, 211, 211)", height: "200px" }}>
                            <span style={{ fontWeight: "bold"}}>dsds
                            </span><span style={{ color: "grey", fontSize: "80%" }}></span></Col>
                            <Col style={{ textAlign: "right", fontSize: "", color: "grey" }}><span> dw</span><span style={{ fontSize: "70%" }}></span></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{ margin: "0em 1em 0em 0em" }} xl="4" className="p-0">
                <Card style={{ width: '100%', maxHeight: "45%", minHeight: "20vh", marginTop: "1em" }} className="rounded-0 border-0">
                    <Card.Body className="" style={{ border: "1px solid rgb(211, 211, 211)", backgroundColor: "#F6F6F6", paddingTop: "5px" }} >
                        <Row className="justify-content-center" style={{ padding: "5px", paddingBottom: "10px" }}>
                            <Col><span style={{ fontWeight: "bold" }}>Sprint 12 </span><span style={{ color: "grey", fontSize: "80%" }}>4</span></Col>
                            <Col style={{ textAlign: "right", fontSize: "", color: "grey" }}><span> </span><span style={{ fontSize: "70%" }}></span></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default Team;