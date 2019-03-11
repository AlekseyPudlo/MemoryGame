import React, { Component } from "react";
import Card from "./Components/Card.jsx";
import cardsArray from "./cards.js";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			firstGuess: { name: "", id: "" },
			matches: []
		};
		this.setCardComponent = this.setCardComponent.bind(this);
		this.getRandomCards = this.getRandomCards.bind(this);
	}

	componentDidMount() {
		// Generate bench of random card objects ans set it to the state
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
					isSelected={id === this.state.firstGuess.id}
					isMatched={this.state.matches.some(
						cardName => cardName === element.name
					)}
					updateAppState={this.updateAppState.bind(this)}
				/>
			);
		});
	};

	_shuffle = array => {
		return array.sort(() => 0.5 - Math.random());
	};

	getRandomCards = () => {
		// Make a shuffle array of cards
		let shuffledArray = this._shuffle(cardsArray);
		// Copy 18 cards because we want to show grid 6x6 cards = 36 cards
		let slicedArray = shuffledArray.slice(0, 18);
		// Duplicate and return again shuffled array to create a match for each card
		return this._shuffle([...slicedArray, ...slicedArray]);
	};

	updateAppState = (cardID, cardName) => {
		let { firstGuess, matches } = this.state;

		/* if first guess name value is not empty then the first guess contains id 
		and name of one selection */
		firstGuess.name
			? /* if first guess name equals to second peak's name and 
			their id are different then card Name will be added to matches array */
			  firstGuess.name === cardName && firstGuess.id !== cardID
			  /* set new state with an empty firstGuess value and add card name 
			  to the matches array */
				? this.setState({
						firstGuess: { name: "", id: "" },
						matches: [...matches, cardName]
				  })
				  /* In case when IDs are not matched just set new state with empty firstGuess value */
				: this.setState({ firstGuess: { name: "", id: "" } })
			/* if first guess name value is empty then new values will be assigned to its name and card keys */
			: this.setState({
					firstGuess: { name: cardName, id: cardID }
			  });
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
