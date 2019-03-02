import React, { Component } from "react";
import Card from "./Components/Card.jsx";
import cardsArray from "./cards.js";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			cards: []
		};
		this.setCardComponent = this.setCardComponent.bind(this);
		this.getRandomCards = this.getRandomCards.bind(this);
		/* this.updateCount = this.updateCount.bind(this); */
	}

	componentDidMount() {
		// Generate banch of random card objects ans set it to the state
		this.setState({
			cards: this.getRandomCards()
		});
	}

	// Create Card component for each card objects
	setCardComponent = array => {
		return array.map((element, index) => {
			const id = element.name + index;
			// return newly created Card component
			return (
				<Card
					key={id}
					id={id}
					name={element.name}
					img={element.img}
					count={this.state.count}
					updateCount={this.updateCount.bind(this)}
				/>
			);
		});
	};

	getRandomCards = () => {
		// Make a shuffle array of cards
		let shuffledArray = cardsArray.sort(() => 0.5 - Math.random());
		// Copy certain amount of cards
		let slicedArray = shuffledArray.slice(0, 18);
		// Duplicate and return again shuffled array to create a match for each card
		return [...slicedArray, ...slicedArray].sort(() => 0.5 - Math.random());
	};

	updateCount = count => {
		this.setState({ count: count });
	};

	render() {
		const state = this.state;
		return (
			<div id="game">
				<section className="grid">{this.setCardComponent(state.cards)}</section>
			</div>
		);
	}
}

export default App;
