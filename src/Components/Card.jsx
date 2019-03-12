import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	switchSelectedStatement = () => {
		this.setState(prevState => ({
			isSelected: !prevState.isSelected
		}));
	}

	handleClick = () => {
		const {id, name, cardsHandler } = this.props;

		cardsHandler(id, name);
	};

	render() {
		const { id, name, img, isSelected, isMatched } = this.props;
		const imgClassName = isMatched ? "card match" : isSelected ? "card selected" : "card";

		return (
			<img
				alt=""
				src={img}
				id={id}
				className={imgClassName}
				name={name + "_img"}
				onClick={this.handleClick.bind(this)}
			/>
		);
	}
}

export default Card;
