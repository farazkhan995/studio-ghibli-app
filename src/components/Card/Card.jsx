import React from "react";
// import card from "./card.css";
import './card.css';

function Card(props) {
    return (
        <div className="card">
            <div className="info">
                <div className="credentials">
                    <h3>{props.movie.title}</h3>
                    <p className="original-title">{props.movie.original_title}</p>

                </div>
                <div className="image-div">
                    <img className="img" src={props.movie.image} alt="movie"></img>
                </div>
            </div>
            <p>{props.movie.description}</p>

        </div>
    )
}

export default Card;