import React from "react";
import NavigationBar from "../../Layout/NavigationBar";
import DeckForm from "../DeckForm";

function NewDeck(){
     const initDeck = {"name": "", "description": ""}
    return (
        <div>
            <NavigationBar pathName="Create Deck"/> 
            <section className="new-deck">
                <h1>
                    Create Deck
                </h1>
                <DeckForm deck={initDeck}/>
            </section>
        </div>
    );
}

export default NewDeck;