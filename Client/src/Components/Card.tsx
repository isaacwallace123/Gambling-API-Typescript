import { FC } from "react";

import CardInterface from "../Interfaces/Card";

const Card: FC<CardInterface> = ({card, suit, values}): JSX.Element => {
    console.log(card);
    console.log(suit);

    return (
        <div>
            {card} : {suit}
        </div>
    )
}

export default Card;