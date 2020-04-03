
import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from './index.css';

import Header from "./js/components/layout/header";
import Sidebar from "./js/components/layout/sidebar";

class App extends Component {
	render(){
		return (
			<div>
				<Header />
				<div className='flex-container'>
					<Sidebar />
				</div>
			</div>
			);
	}
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;