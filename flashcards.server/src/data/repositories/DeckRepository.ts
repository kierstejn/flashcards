import db from '../db';
import DeckRead from '../../models/deck/Deck'
import DeckPres from "../../models/deck/DeckPres";
import Deck from "../../models/deck/Deck";

export const getAllDecks = (): Promise<DeckPres[]> => {
    return db('deck').select("*")
};

export const getDeck = (id: string): Promise<Deck[]> => {
    return new Promise((resolve, reject) => {
        db.raw(
            "select id, name, (" +
            "select array_to_json(array_agg(row_to_json(d))) " +
            "from " +
            "(" +
                "select id, primary_front_text as primaryFrontText, primary_back_text as primaryBackText, " +
                "secondary_front_text as secondaryFrontText, secondary_back_text as secondaryBackText " +
                "from card " +
                "where deck_id=deck.id" +
            ") d" +
            ") as cardList " +
            "from deck " +
            "where id = ?", [id]
        ).then((data) => {
            resolve(data.rows)
        }
        ).catch((err) => {
            reject(err)
        });
    });
};