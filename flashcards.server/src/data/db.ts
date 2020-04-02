import knex from 'knex'

const db = knex({
    client: 'pg',
    connection: {
        connectionString: 'postgresql-contoured-95888',
        ssl: true
    }
});

export default db;