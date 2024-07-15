import React, { useState } from "react";
import CardsInfoDetails from "./CardsInfoDetails";
import "./CardsInfoList.css"
import { deleteCard } from "../utils/api";
import { useNavigate } from "react-router-dom";

function CardsInfoList({deck}){
    const [cardsList, setCardsList] = useState(deck.cards);
    const navigate = useNavigate();

    const deleteCardWithId = (idToDelete) => {
    setCardsList((currentCards) =>
        currentCards.filter((card) => card.id !== idToDelete)
    );

    const abortController = new AbortController();
    deleteCard(idToDelete, abortController.signal);
    abortController.abort();
    };

    const cardDeleteHandler = (event) => {
    event.preventDefault();
    if (window.confirm("Delete this card?\n\rYou will not be able to recover it.")) {
        const id = Number(event.target.getAttribute('data'))
        deleteCardWithId(id);
    }
    };

    const editCardHandler = (event) => {
        const cardId = Number(event.target.getAttribute('data'))
        navigate(`/decks/${deck.id}/cards/${cardId}/edit`);
      };

    const list = Array.isArray(cardsList) ? cardsList.map((card) => (
    <CardsInfoDetails key={card.id} card={card} cardDeleteHandler={cardDeleteHandler} editCardHandler={editCardHandler}/>
    )) : null;

    return (
        <article className="cards-info">
            <div className="flex-column">
                <h2>Cards</h2>
                <div className="cards-info-list flex-column">{list}</div>
            </div>
        </article>
    );
}

export default CardsInfoList;