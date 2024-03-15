import { useEffect, useState } from "react"

import Card from "../../Components/Card";
import CardInterface from "../../Interfaces/Card";

export default function About() {
    const [deck, setDeck] = useState([]);

    const fetchDeck = async () => {
        const Deck = await fetch("http://localhost:80/deck/");
        const Parsed = await Deck.json();

        setDeck(Parsed);

        return Parsed;
    }

    useEffect(() => {
        fetchDeck();
    })

    return (
        <div>
            {deck.map((Data: CardInterface) => (
                <Card card={Data.card} suit={Data.suit} values={Data.values}/>
            ))}
        </div>
    )
}