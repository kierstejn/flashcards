import express from 'express';
let cors = require('cors');
import { getDeck, getAllDecks }from './data/repositories/DeckRepository'


import db from './data/db';
import Deck from "./models/Deck";




const server = express();
const port: number = 5000;
server.use(cors());

server.get('/deck', async (req, res) => {
    const deckList: Deck[] = await getAllDecks();
    res.send(deckList);
});

server.get('/deck/:id', async (req, res) => {
    const { id } = req.params;
    const deck:Deck = await getDeck(id);
    res.send(deck)
});

server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});