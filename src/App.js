import React, { Component } from "react";
import Card from "./Components/Card.jsx";
import cardsArray from "./cards.js";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			selectedID: "",
			firstGuess: "",
			matches: []
		};
		this.setCardComponent = this.setCardComponent.bind(this);
		this.getRandomCards = this.getRandomCards.bind(this);
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
					isSelected={id === this.state.selectedID}
					isMatched={this.state.matches.some(
						cardName => cardName === element.name
					)}
					updateAppState={this.updateAppState.bind(this)}
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

	updateAppState = (cardID, cardName) => {
		let { firstGuess, matches } = this.state;

		firstGuess
			? firstGuess === cardName
				? this.setState({ selectedID: "", firstGuess: "", matches: [...matches, cardName] })
				: this.setState({ selectedID: "", firstGuess: "" })
			: this.setState({ selectedID: cardID, firstGuess: cardName });
	};

	render() {
		return (
			<div id="game">
				<section className="grid">
					{this.setCardComponent(this.state.cards)}
				</section>
			</div>
		);
	}
}

export default App;
