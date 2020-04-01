import {Card} from "../cardModels/Card";

interface Deck {
    id: string,
    name: string,
    cardlist: Card[]
}

export default Deck;