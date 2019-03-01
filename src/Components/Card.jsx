import React from "react";
import "../css/Card.css";

const Card = ({ key, name, img }) => {
    var divStyle = {
        backgroundImage: 'url(' + img + ')'
    }
    return(
        /* The img element commented below is to remember possibility of
            using image not as a beckground-image of css, maybe this usage
            will be more appropriate for card flipping option... */
        /* <img src={img} /> */
        <div className="card" key={key} name={name} style={divStyle}>

        </div>
    );
}

export default Card;