import React, { useState, useEffect } from "react";
import NavigationBar from "../../../Layout/NavigationBar";
import { useParams } from "react-router-dom";
import NotFound from "../../../Layout/NotFound";
import { readCard, readDeck } from "../../../utils/api";
import CardForm from "../../CardForm";

function EditCard(){
    const { deckId, cardId } = useParams();
    const [ card, setCard] = useState();
    const [deck, setDeck] = useState();
    const pathName = `Edit Card ${cardId}`

    useEffect(() => {
        const abortController = new AbortController();
        
        readDeck(deckId, abortController.signal)
          .then(response => {
            setDeck(response);
          });
         
        return () => abortController.abort();
    }, [deckId]);

    useEffect(() => {
        const abortController = new AbortController();
        
        readCard(cardId, abortController.signal)
          .then(response => {
            setCard(response);
          });
         
        return () => abortController.abort();
    }, [cardId]);
    
    if(card && card.id){
        return (
            <div>
            <NavigationBar  deck={deck} pathName={pathName}/> 
            <section className="edit-card">
                <h1>
                    Edit Card
                </h1>
                <CardForm deck={deck} card={card}/>
            </section>
            </div>
        );
    }
    else {
        return (<NotFound />);
    }
    
}

export default EditCard;