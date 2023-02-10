const pg = require('pg');

const config = {
    host: '<your-db-server-name>.postgres.database.azure.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: '<alex.gnavi>',
    password: '<itstelemed2123>',
    database: '<evolus>',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS inventory;
        CREATE TABLE palestra(id serial PRIMARY KEY, name VARCHAR(50), allenamento VARCHAR(50));
        INSERT INTO GYM (name, allenamento) VALUES ('alex', 'fullbody');
        INSERT INTO GYM(name, allenamento) VALUES ('samuele', 'cardio');
        INSERT INTO GYM (name, allenamento) VALUES ('diletta', ''metabolico);
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
            process.exit();
        });
}
