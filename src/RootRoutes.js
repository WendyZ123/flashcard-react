import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import NotFound from "./Layout/NotFound";
import DeckList from "./home/DeckList";
import Decks from './decks';
import Study from './decks/study/Study.js';
import NewDeck from './decks/new/NewDeck.js';
import DeckAndCardsInfo from './decks/DeckAndCardsInfo.js';
import EditDeck from './decks/edit/EditDeck.js';
import NewCard from './decks/cards/new/newCard.js';
import EditCard from './decks/cards/edit/EditCard.js';

function RootRoutes(){
  return (
     <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="" element={<DeckList />}/>
            <Route path="decks" element={<Decks />}>
               <Route path=":deckId" element={<DeckAndCardsInfo />} />
               <Route path=":deckId/study" element={<Study />} />
               <Route path=":deckId/edit" element={<EditDeck />} />
               <Route path="new" element={<NewDeck />}/>
               <Route path=":deckId/cards/new" element={<NewCard />} />
               <Route path=":deckId/cards/:cardId/edit" element={<EditCard />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
         </Route>
     </Routes>
  )
}

export default RootRoutes;