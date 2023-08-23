// See https://aka.ms/new-console-template for more information
using MongoDB.Bson;
using System.Threading.Tasks;
using ConsoleTables;

using MongoDB.Driver;
//https://www.html.it/pag/68918/api-per-c/
public class Program
{
    
    public static async Task Main(string[] args)
    {

        string connectionString = "mongodb://localhost:27017";
        MongoClient client = new MongoClient(connectionString);

        IMongoDatabase database = client.GetDatabase("dbmpalestra");
        IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>("NewProgress");

        var documents = await collection.Find(new BsonDocument()).ToListAsync();

        var table = new ConsoleTable("Nome", "Username",  "Indirizzo","Somatotipo","Allenamento");

        foreach (var document in documents)
        {
            string nome = document["nome"].AsString;
           // string cognome= document["cognome"].AsString;
           string username = document["username"].AsString;
            string somatotipo = document["somatotipo"].AsString;
            string indirizzo = document["indirizzo"].AsString;
            
            string allenamento = document["allenamento"].AsString;
            //string somatotipo = document["somatotipo"].AsString;

            // Aggiungi una riga alla tabella
            table.AddRow(nome,username,  indirizzo,allenamento,somatotipo);
        }

        // Stampa la tabella nella console
        table.Write();




        //La creazione di un documento avviene mediante la classe BsonDocument
        //creo una nuova collection
        client = new MongoClient();
        database = client.GetDatabase("dbmpalestra");
        var record = new BsonDocument{
            {"_id",new BsonDocument{
                {"nome","alex"},
                {"username","alexboy455"},
                {"indirizzo","torino"},
                {"allenamneto","aerobica"},
                {"somatotipo","endomorfo"}
            }}



        };
        var collection1 = database.GetCollection<BsonDocument>("NewProgress");
        await collection1.InsertOneAsync(record);

        var records = new BsonDocument{
            {"_id",new BsonDocument{
                {"nome","giorgio"},
                {"username","gigetto"},
                {"indirizzo","caluso"},
                {"allenamneto","full-contact"},
                {"somatotipo","mesomorfo"}
            }}
        };

        var collection2 = database.GetCollection<BsonDocument>("NewProgress");
        await collection2.InsertOneAsync(records);




    }
}
