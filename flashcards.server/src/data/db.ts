import knex from 'knex'

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'flashcards'
    }
});

export default db;