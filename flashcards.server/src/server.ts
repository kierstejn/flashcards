import express from 'express';
let cors = require('cors');
import { getDeck, getAllDecks }from './data/repositories/DeckRepository'

//Db connection
import db from './data/db';

//Models
import DeckPres from "./models/deck/DeckPres";
import Deck from "./models/deck/Deck";

const server = express();
const port = process.env.PORT || 3000;
server.use(cors());

server.get('/', (req, res) => {
   res.send("hello")
});

server.get('/deck', async (req, res) => {
    const deckList: DeckPres[] = await getAllDecks();
    res.send(deckList);
});

server.get('/deck/:id', async (req, res) => {
    const { id } = req.params;
    const deckList: Deck[] = await getDeck(id);
    if(deckList){
        res.send(deckList[0])
    } else {
        res.send({})
    }

});

console.log(process.env.DATABASE_URL)

// @ts-ignore
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});