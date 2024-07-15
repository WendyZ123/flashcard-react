import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckInfoDetails({deck}){
    const navigate = useNavigate();

    const editDeckHandler = (event) => {
        navigate(`/decks/${deck.id}/edit`);
      };

    const studyDeckHandler = (event) => {
        navigate(`/decks/${deck.id}/study`);
      };

    const addCardsHandler = (event) => {
        navigate(`/decks/${deck.id}/cards/new`);
      };

    const deleteDeckWithId = (idToDelete) => {
        const abortController = new AbortController();
        deleteDeck(idToDelete, abortController.signal);
        abortController.abort();
      };
    
    const deleteDeckHandler = (event) => {
    event.preventDefault();
    if (window.confirm("Delete this deck?\n\rYou will not be able to recover it.")) {
        const id = deck.id
        deleteDeckWithId(id);
    }
    };

    return (
        <article className="deck-info-details">
            <div className="flex-column">
                <h4>{deck.name}</h4>
                <p>{deck.description}</p>
                <div className="flex-row deck-buttons">
                <div>
                    <button onClick={editDeckHandler}>Edit</button>
                    <button className="blue-button" onClick={studyDeckHandler}>Study</button>
                    <button className="blue-button" onClick={addCardsHandler}>+ Add Cards</button>
                </div>
                <button className="red-button" onClick={deleteDeckHandler}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default DeckInfoDetails;