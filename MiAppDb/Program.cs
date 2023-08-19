// See https://aka.ms/new-console-template for more information
using MongoDB.Bson;
using MongoDB.Driver;

public class Program
{
    public static void Main(string[] args)
    {
        string connectionString = "mongodb://localhost:27017";
        MongoClient client = new MongoClient(connectionString);

        IMongoDatabase database = client.GetDatabase("dbmpalestra");

        IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>("progressi"); 

        var documents = collection.Find(new BsonDocument()).ToList();

        foreach (var document in documents)
        {
            Console.WriteLine(document);
        }
    }
}
