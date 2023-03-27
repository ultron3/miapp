import { MongoClient, MongoError } from 'mongodb';

const url = 'mongodb://localhost:27017/';

const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log('Connessione stabilita con successo al server MongoDB.');
    const db = client.db('dbmpalestra')
    // eseguire le operazioni sul database qui
  } catch (err) {
    console.log('Impossibile connettersi al server MongoDB. Errore:', err);
  } finally {
    await client.close();
    console.log('Connessione chiusa con successo.');
  }
}

connect();
