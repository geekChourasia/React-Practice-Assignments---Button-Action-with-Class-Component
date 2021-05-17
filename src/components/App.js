import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);

		this.state={isClicked:false}

		handleClick=()=>{

			this.setState({isClicked:true})

		}

		
	};

    render() {
    	return(
    		<div id="main">
				{ isClicked?  <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>: null }
				<button id="click" onClick={this.handleClick}>Click Me</button>
    		</div>
    	);
    }
}


export default App;

