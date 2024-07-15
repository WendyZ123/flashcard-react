import React from "react";
import { useState } from "react";
import { createCard, updateCard } from "../utils/api";
import { useNavigate } from "react-router-dom";

function CardForm({deck, card}) {
    const [newCard, setNewCard] = useState(card);
    const cancelButtonText = card.id ? "Cancel" : "Done";
    const submitButtonText = card.id ? "Submit" : "Save";
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { target } = event;
        setNewCard((prevState) => ({
          ...prevState,
          [target.name]: target.value,
        }));
      };

    const createNewCard = () => {
        createCard(deck.id, newCard)
        .then(response => {
            setNewCard({"front": "", "back": ""});
        });
    }

    const updateExistingCard = () => {
        updateCard(newCard)
        .then(response => {
            navigate("/decks/" + deck.id);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(card.id){
            updateExistingCard();
        }
        else {
            createNewCard();
        }
        
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate("/decks/" + deck.id);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="front">
          Front
          <textarea
            id="front"
            type="textarea"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={newCard.front}
          >
            </textarea>
        </label>
        <label htmlFor="back">
          Back
          <textarea
            id="back"
            type="textarea"
            name="back"
            placeholder="Back side of card"
            onChange={handleChange}
            value={newCard.back}
          >
            </textarea>
        </label>
        <div className="buttons">
            <button type="cancel" onClick={handleCancel}>{cancelButtonText}</button>
            <button type="submit" className="blue-button">{submitButtonText}</button>
        </div>
      </form>
    );
}

export default CardForm;