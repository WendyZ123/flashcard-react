import React from "react";
import { useState } from "react";
import { createDeck, updateDeck } from "../utils/api";
import "./DeckForm.css";
import { useNavigate } from "react-router-dom";

function DeckForm({deck}) {
    const [newDeck, setNewDeck] = useState(deck);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { target } = event;
        setNewDeck((prevState) => ({
          ...prevState,
          [target.name]: target.value,
        }));
      };

    const createNewDeck = () => {
        createDeck(newDeck)
        .then(response => {
            navigate("/decks/" + response.id);
        });
    }

    const updateExistingDeck = () => {
        updateDeck(newDeck)
        .then(response => {
            navigate("/decks/" + response.id);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(deck.id){
            updateExistingDeck();
        }
        else {
            createNewDeck();
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigate(deck.id? `/decks/${deck.id}` : "/");
      };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Deck Name"
            onChange={handleChange}
            value={newDeck.name}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            type="textarea"
            name="description"
            placeholder="Brief description of the deck"
            onChange={handleChange}
            value={newDeck.description}
          >
            </textarea>
        </label>
        <div>
            <button type="cancel" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="blue-button">Submit</button>
        </div>
      </form>
    );
}

export default DeckForm;