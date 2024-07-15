import React, { useEffect, useState } from "react";
import NotFound from "../../Layout/NotFound";
import "./Card.css"
import { useNavigate } from "react-router-dom";{}

function Card({deck}){
    const navigate = useNavigate();
    const [index, setIndex] = useState(1);
    const [flip, setFlip] = useState(true);

    const FlipHandler = (event) => {
        event.preventDefault();
        setFlip(!flip);
      };

    const addCardsHandler = (event) => {
    navigate(`/decks/${deck.id}/cards/new`);
    };
    

    if(deck.cards){
        const numberOfCards = deck.cards.length;
        const targetCard = deck.cards.at(index - 1);

        const NextHandler = (event) => {
            event.preventDefault();
            if(index + 1 <= numberOfCards){
                setIndex((currentIndex) => currentIndex+1);
                setFlip(true);
            }
            else {
                if (window.confirm("Restart cards?\n\rClick 'cancel' to return to the home page.")) {
                    setIndex(1);
                    setFlip(true);
                }
                else{
                    navigate("/");
                }
            }
          }; 

        if(numberOfCards > 2){
            return (
                <section className="card">
                    <h3>Card {index} of {numberOfCards}</h3>
                    <p className="card-content">{flip ? targetCard.front : targetCard.back}</p>
                    <div className="flex-row card-left-buttons">
                        <button onClick={FlipHandler}>Flip</button>
                        {!flip ? <button className="blue-button" onClick={NextHandler}>Next</button> : null}
                    </div>
                </section>
            );
        }
        else {
            return (
                <section>
                    <h3>Not enough cards.</h3>
                    <p className="card-content">You need at least 3 cards to study. There are {numberOfCards} cards in this deck.</p>
                    <div className="flex-row card-left-buttons">
                        <button className="blue-button" onClick={addCardsHandler}>+ Add Cards</button>
                    </div>
                </section>
            );
        }
        
    }
    return <NotFound />
   
}

export default Card;