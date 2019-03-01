import React, { Component } from "react";
import Card from "./Components/Card.jsx";
import cardsArray from "./cards.js";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		// Put each item in the cardsArray array in Card component
		const cards = cardsArray.map(element => {
			return <Card key={element.key} name={element.name} img={element.img} />;
		});
		// Duplicate array to create a match for each card
		const gameGrid = cards.concat(cards);
		// Randomize game grid on each load
		gameGrid.sort(() => 0.5 - Math.random());

		return (
			<div id="game">
				<section className="grid">{gameGrid}</section>
			</div>
		);
	}
}

export default App;
