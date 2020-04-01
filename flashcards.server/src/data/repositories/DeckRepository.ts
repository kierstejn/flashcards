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
                "select id, front_text as fronttext, back_text as backtext " +
                "from card " +
                "where deck_id=deck.id" +
            ") d" +
            ") as cardlist " +
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