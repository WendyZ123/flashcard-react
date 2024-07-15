import React from "react";
import "./CardsInfoDetails.css"

function CardsInfoDetails({card, cardDeleteHandler, editCardHandler}){
    return (
        <div className="cards-info-details">
            <div className="flex-column">
                <div className="flex-row card-details">
                    <p className="card-front">{card.front}</p>
                    <p className="card-back">{card.back}</p>
                </div>  
                <div className="flex-row card-buttons">
                    <button data={card.id} onClick={editCardHandler}>Edit</button>
                    <button className="red-button" data={card.id} onClick={cardDeleteHandler}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default CardsInfoDetails;