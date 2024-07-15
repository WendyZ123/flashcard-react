import React from "react";
import { Outlet } from "react-router-dom";

function Decks(){
    return (
        <section className="decks">
            <Outlet />
        </section>
    );
}

export default Decks;