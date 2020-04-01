import db from '../db';
import Deck from '../../models/Deck'

export const getDeck = (id: string): Promise<Deck> => {
    return db<Deck>('deck').where({id: id}).select('*').first()
};

export const getAllDecks = (): Promise<Deck[]> => {
    return db<Deck>('deck').select('*')
};