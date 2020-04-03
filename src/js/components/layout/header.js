import React, { Component } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faCog, faBell } from '@fortawesome/free-solid-svg-icons'
class Header extends Component {
  render() {
    return (
	    <header >
			<h1>
				<FontAwesomeIcon icon={faCube} style={{paddingRight: '10px'}}/>
				BUG TRACKER
				<span style={{display: 'block', float: 'right'}}>
					<FontAwesomeIcon icon={faCog} style={{padding: '0 20px'}}/>
					<FontAwesomeIcon icon={faBell} style={{padding: '0 20px'}}/>
				</span>
			</h1>
		</header>
    );
  }
}

export default Header;

