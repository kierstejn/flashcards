import Card from "../card/Card";


interface Deck {
    id: string;
    name: string;
    cardlist: Card[];
}

export default Deck;