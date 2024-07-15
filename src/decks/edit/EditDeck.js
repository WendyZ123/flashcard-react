import React, { useState, useEffect } from "react";
import DeckForm from "../DeckForm";
import NavigationBar from "../../Layout/NavigationBar";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import NotFound from "../../Layout/NotFound";

function EditDeck(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        
        readDeck(deckId, abortController.signal)
          .then(response => {
            setDeck(response);
          });
         
        return () => abortController.abort();
    }, [deckId]);
    
    if(deck && deck.id){
        return (
            <div>
            <NavigationBar  deck={deck} pathName="Edit Deck"/> 
            <section className="edit-deck">
                <h1>
                    Edit Deck
                </h1>
                <DeckForm deck={deck} />
            </section>
            </div>
        );
    }
    else {
        return (<NotFound />);
    }
    
}

export default EditDeck;