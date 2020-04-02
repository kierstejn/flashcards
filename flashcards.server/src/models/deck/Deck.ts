import Card from "../card/Card";


interface Deck {
    id: string;
    name: string;
    cardList: Card[];
}

export default Deck;