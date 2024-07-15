import React, { useEffect, useState } from "react";
import NavigationBar from "../../Layout/NavigationBar";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Card from "./Card"

function Study () {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
        const abortController = new AbortController();
        
        readDeck(deckId, abortController.signal)
          .then(response => {
            setDeck(response);
          });
         
        return () => abortController.abort();
    }, [deckId]);
    

    return (
        <div>
            <NavigationBar deck={deck} pathName="Study"/> 
            <section className="study">
                <h1>
                  Study: {deck.name}
                </h1>
                <Card deck={deck}/>
            </section>
        </div>
    );
}

export default Study;