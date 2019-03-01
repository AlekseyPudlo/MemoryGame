import React, { Component } from "react";
import "../css/Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false
		};
	}

	handleClick = () => {
		this.setState({
			selected: !this.state.selected
		});
	};

	render() {
		const { key, name, img } = this.props;
        const imgClasses = this.state.selected ? "card selected" : "card";
        
		return (
			/* The "img" or "div" element commented below is to remember possibility of
            using image not as a beckground-image of css, maybe this usage
            will be more appropriate for card flipping option... */
			<img
				alt=""
				src={img}
				className={imgClasses}
				key={key}
				name={name}
				onClick={this.handleClick}
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