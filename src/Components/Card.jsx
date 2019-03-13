import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = () => {
		const { id, name, cardsHandler } = this.props;
		cardsHandler(id, name);
	};

	render() {
		const { id, name, frontImg, backImg, isSelected, isMatched } = this.props;
		const innerCardClassName = isMatched
			? "flip-card-inner match"
			: isSelected
			? "flip-card-inner selected"
			: "flip-card-inner";

		return (
			<div className="flip-card" onClick={this.handleClick.bind(this)}>
				<div className={innerCardClassName}>
					<div className="front">
						<img className="front-img" src={frontImg} alt="" />
					</div>
					<div className="back">
						<img src={backImg} alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
