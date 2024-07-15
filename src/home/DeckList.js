import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import { listDecks, deleteDeck } from "../utils/api"
import "./DeckList.css"
import { useNavigate } from "react-router-dom";

function DeckList(){
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const abortController = new AbortController();
    
    listDecks(abortController.signal)
      .then(response => {
          setDecks(response);
      });
     
    return () => abortController.abort();
  }, []);

  const deleteDeckWithId = (idToDelete) => {
    setDecks((currentDecks) =>
      currentDecks.filter((deck) => deck.id !== idToDelete)
    );

    const abortController = new AbortController();
    deleteDeck(idToDelete, abortController.signal);
    abortController.abort();
  };

  const deleteDeckHandler = (event) => {
    event.preventDefault();
    if (window.confirm("Delete this deck?\n\rYou will not be able to recover it.")) {
      const id = Number(event.target.getAttribute('data'))
      deleteDeckWithId(id);
    }
  };

  const createDeckHandler = (event) => {
    navigate("/decks/new");
  };

  const list = Array.isArray(decks) ? decks.map((deck) => (
    <Deck key={deck.id} deck={deck} numberOfCards={deck.cards.length} deleteDeckHandler={deleteDeckHandler}/>
  )) : null;
  
  return (
    <div>
      <button className="create-deck" onClick={createDeckHandler}>+ Create Deck</button>
      <section className="flex-column">{list}</section>
    </div>
  );
}

export default DeckList;