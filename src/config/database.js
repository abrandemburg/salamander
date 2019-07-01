import knex from 'knex'

const database = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '884171',
        database: 'test'
    }
})

export default database