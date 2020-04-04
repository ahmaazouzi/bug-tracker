import React, { Component} from 'react';

class Dashboard extends Component{
	render(){
		return (
			<div>
				<div className='to_be_done'>
					<div className="inner_div">
						<h3 className="section_title">TO DO <span className="h3_span_info">6 Items: 10 items</span></h3>
					</div>
				</div>
				<div className='being_done'>
					<div className="inner_div">
						<h3 className="section_title">IN PROGRESS <span className="h3_span_info">6 Items: 10 items</span></h3>
					</div>
				</div>
				<div className="done">
					<div className="inner_div">
						<h3 className="section_title">COMPLETE <span className="h3_span_info">6 Items: 10 items</span></h3>
					</div>
				</div>
			</div>
			)
	}
} 

export default Dashboard;
