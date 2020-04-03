import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFire, faClock, faChartPie, faFile, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  render() {
    return (
		<div className='sidebar'>
			<div className='side-control' style={{textAlign: 'center'}}>
				<a className='sasa' href="#">
				<FontAwesomeIcon icon={faPlus} /></a>
			</div>
			<div className='side-control'>
				<FontAwesomeIcon icon={faFire} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faChartPie} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon  icon={faFile} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faWrench} />
			</div>
			<div className='side-control' style={{textAlign: 'center'}}>
				<FontAwesomeIcon icon={faUsers} />
			</div>
		</div>

    );
  }
}

export default Sidebar;


