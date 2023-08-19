// See https://aka.ms/new-console-template for more information
using MongoDB.Bson;
using MongoDB.Driver;
//https://www.html.it/pag/68918/api-per-c/
public class Program
{
    public static async Task Main(string[] args)
    {
        string connectionString = "mongodb://localhost:27017";
        MongoClient client = new MongoClient(connectionString);

        IMongoDatabase database = client.GetDatabase("dbmpalestra");
        //stampo tutti i record del db
        IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>("progressi"); 

        var documents = collection.Find(new BsonDocument()).ToList();

        foreach (var document in documents)
        {
            Console.WriteLine(document);
        }

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
        var  collection1= database.GetCollection<BsonDocument>("NewProgress");
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

        var  collection2= database.GetCollection<BsonDocument>("NewProgress");
        await collection2.InsertOneAsync(records);




    }
}
