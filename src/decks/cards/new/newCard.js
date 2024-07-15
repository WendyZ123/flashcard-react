import React, { useEffect } from "react";
import NavigationBar from "../../../Layout/NavigationBar";
import CardForm from "../../CardForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../../utils/api";
import NotFound from "../../../Layout/NotFound";


function NewCard(){
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

     const initCard = {"front": "", "back": ""}

    if(deck){
        return (
            <div>
                <NavigationBar deck={deck} pathName="Add Card"/> 
                <section className="new-card">
                    <h1>
                        {deck.name}: Add Card
                    </h1>
                    <CardForm deck={deck} card={initCard}/>
                </section>
            </div>
        );
    }
    else {
       return (<NotFound />);
    }
    
}

export default NewCard;