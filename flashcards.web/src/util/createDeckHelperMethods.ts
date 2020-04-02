import Deck from "../models/deck/Deck";
import Card from "../models/card/Card";
import UserCard from "../models/card/UserCard";
import UserDeck from "../models/deck/UserDeck";
import { shuffle } from 'lodash';

export const createDeck = (deck:Deck): UserDeck => {
    const newCardDeck:UserCard[] = [];
    if(deck.cardlist){
        for(let i = 0; i < deck.cardlist.length; i++) {
            if (!deck.cardlist[i].reversed) {
                newCardDeck.push({...deck.cardlist[i]});
            } else {
                newCardDeck.push({...deck.cardlist[i]});
                newCardDeck.push({...deck.cardlist[i],
                    primaryfronttext: deck.cardlist[i].primarybacktext,
                    primarybacktext: deck.cardlist[i].primaryfronttext,
                    secondarybacktext: deck.cardlist[i].secondaryfronttext,
                    secondaryfronttext: deck.cardlist[i].secondarybacktext
                });
            }
        }
    }
    const shuffledDeck: UserCard[] = shuffleDeck(newCardDeck);
    const newUserDeck: UserDeck = {...deck, cardlist: shuffledDeck};
    console.log(newUserDeck);
    return newUserDeck;
};

export const shuffleDeck = (deck: UserCard[]): UserCard[] => {
    const shuffledDeck: UserCard[] = shuffle(deck);
    return shuffledDeck;
}