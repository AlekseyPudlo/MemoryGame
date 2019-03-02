import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false
		};
		/* this.updateIsSelectedStatement = this.updateIsSelectedStatement.bind(this); */
	}

	updateIsSelectedStatement = () => {
		this.setState(prevState => ({
			isSelected: !prevState.isSelected
		}));
	};

	handleClick = () => {
		const { id, count, updateCount } = this.props;
		let isSelected = this.state.isSelected;

		if (!isSelected) {
			if (count < 2) {
				updateCount(count + 1);
				this.updateIsSelectedStatement();
			}
		} else {

		}
	};

	render() {
		const { id, name, img } = this.props;
		const imgClasses = this.state.isSelected ? "card selected" : "card";

		return (
			/* The "img" or "div" element commented below is to remember possibility of
            using image not as a beckground-image of css, maybe this usage
            will be more appropriate for card flipping option... */
			<img
				alt=""
				src={img}
				id={id}
				className={imgClasses}
				name={name}
				onClick={this.handleClick.bind(this)}
			/>
			/*  <div
				className="card"
				key={key}
				name={name}
				style={{
					backgroundImage: "url(" + img + ")"
				}}
				onClick={this.handleClick}
			/> */
		);
	}
}

export default Card;
