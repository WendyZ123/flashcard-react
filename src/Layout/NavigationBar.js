import React, { useEffect } from "react";
import { useState, Link } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar({deck, pathName}) {
    const homeNav = <Link className="nav-link" to={`/`}>Home</Link>;
    const deckNav = deck ? ( <div> <span> / </span><Link className="nav-link" to={`/decks/${deck.id}`}>{deck.name}</Link> </div>) : null;
    const currentPathNav = <div><span> / </span><span className="nav-text">{pathName}</span></div>;


    return (
        <nav>
            {homeNav}
            {deckNav}
            {currentPathNav}
        </nav>
    );
}

export default NavigationBar;