import Deck from "../models/deck/Deck";
import Card from "../models/card/Card";
import UserCard from "../models/card/UserCard";
import UserDeck from "../models/deck/UserDeck";
import {dark} from "grommet";

export const createDeck = (deck:Deck): UserDeck => {
    const newCardDeck:UserCard[] = [];
    if(deck.cardlist){
        for(let i = 0; i < deck.cardlist.length; i++) {
            if (!deck.cardlist[i].reversed) {
                newCardDeck.push({...deck.cardlist[i]});
            } else {
                newCardDeck.push({...deck.cardlist[i]});
                newCardDeck.push({...deck.cardlist[i]});
            }
        }
    }
    const newUserDeck: UserDeck = {...deck, cardlist: newCardDeck};
    console.log(newUserDeck);
    return newUserDeck;
};