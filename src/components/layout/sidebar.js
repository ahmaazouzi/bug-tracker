import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFire, faClock, faChartPie, faFile, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  render() {
	  	const iconStyle = {
		color: '#000008',
		fontSize: '2em',
		verticalAlign: 'middle',
		padding: '50% 0',
	}
    return (
		<div className='sidebar'>
			<div className='side-control' style={{textAlign: 'center'}}>
				<a className='sasa' href="#">
				<FontAwesomeIcon icon={faPlus} style={iconStyle} /></a>
			</div>
			<div className='side-control'>
				<FontAwesomeIcon icon={faFire} style={iconStyle} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faClock} style={iconStyle} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faChartPie} style={iconStyle} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon  icon={faFile} style={iconStyle} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faWrench} style={iconStyle} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faUsers} style={iconStyle} />
			</div>
		</div>

    );
  }
}

export default Sidebar;


