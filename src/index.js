
import React, { Component } from "react";
import ReactDOM from "react-dom";


import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import Dashboard from "./components/dashboard/dashboard-body";
import css from './index.css';

class App extends Component {
	render(){
		return (
			<div>
				<Header />
				<div className='flex-container'>
					<Sidebar />
					<Dashboard />
				</div>
			</div>
			);
	}
}
			

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;