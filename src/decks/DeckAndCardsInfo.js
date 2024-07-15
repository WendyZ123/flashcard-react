import React, { useState } from "react";
import NavigationBar from "../Layout/NavigationBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { readDeck } from "../utils/api";
import DeckInfoDetails from "./DeckInfoDetails";
import NotFound from "../Layout/NotFound";
import CardsInfoList from "./CardsInfoList";

function DeckAndCardsInfo(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        const abortController = new AbortController();
        
        readDeck(deckId, abortController.signal)
          .then(response => {
              console.log(response);
              setDeck(response);
          });
         
        return () => abortController.abort();
      }, []);

    return (
        <div>
            <NavigationBar pathName={deck.name}/> 
            {deck.id ? <section className="deck-and-cards-info"><DeckInfoDetails deck={deck}/><CardsInfoList deck={deck}/></section>  : <NotFound />}
        </div>
    );
}

export default DeckAndCardsInfo;