import React, { Component, useState } from "react";

//import '../styles/App.css';

class App extends Component {

	constructor(props) {

		super(props);

		this.state = { isClicked: false };

		//this.printPara = this.printPara.bind(this);

	}

	printPara = () => {

		this.setState({ isClicked: true });

	}

	render() {

		return (

			<div id="main">

				<button id="click" onClick={this.printPara}>

					Click Me

        	</button>

				{this.state.isClicked ? (

					<para>

						Hello, I've learnt to use the full-stack evaluation tool. This makes

						me so happy

					</para>

				) : null}

			</div>

		);

	}

}


export default App;







