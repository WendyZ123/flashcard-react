import React from "react";
import "./Deck.css"
import { useNavigate } from "react-router-dom";

function Deck({ deck, numberOfCards, deleteDeckHandler }){
  const navigate = useNavigate();

  const viewDeckHandler = (event) => {
    navigate(`/decks/${deck.id}`);
  };

  const studyDeckHandler = (event) => {
    navigate(`/decks/${deck.id}/study`);
  };

  return (
    <article className="deck-card">
      <div className="flex-column">
        <div className="flex-row deck-header">
           <h2>{deck.name}</h2>
           <span>{numberOfCards} cards</span>
        </div>
        <p>{deck.description}</p>
         <div className="flex-row deck-buttons">
           <div>
             <button data={deck.id} onClick={viewDeckHandler}>View</button>
             <button className="blue-button" data={deck.id} onClick={studyDeckHandler}>Study</button>
           </div>
           <button className="red-button" data={deck.id} onClick={deleteDeckHandler}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default Deck;