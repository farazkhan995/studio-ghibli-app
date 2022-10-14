import React from "react";
import Cardlist from "./Cardlist.css";
import './Cardlist.css';
import Card from "../Card/Card";
function CardList(props) {
        return(
            <div className="cardList">
                {props.movies.map((movie)=> (
                    <Card key = {movie.id} movie ={movie}/>
                ))}
            </div>
        );
};

export default CardList;