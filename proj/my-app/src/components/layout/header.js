import React, { Component } from "react";
import { Row, Navbar, Nav, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
				<Row>
					<Navbar expand="lg" style={{ width: "100%", borderBottom: "1px solid #D3D3D3", backgroundColor: "#E7E8EA" }} className="justify-content-between">
						{/* <Nav><h2>SPRINT22: 5 DAYS LEFT</h2></Nav> */}
						<Nav style={{ width: "45%" }}>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-secondary">Search</Button>
						</Nav>
						<Nav className="Justify-content-end">
								<div style={{height: "40px", width: "40px",  backgroundColor: "#A8A8A8",  marginRight: "5px", padding: "3px", float: "right"}} className="rounded-circle">
									<Link to="/profile" href="http://localhost:3000" style={{color: "#F4EFEB"}}>
										<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
										</svg>
									</Link>
								</div>
						</Nav>
					</Navbar>
				</Row>
		);
	}
}

export default Header;

