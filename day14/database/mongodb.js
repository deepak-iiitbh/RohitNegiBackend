const { MongoClient } = require('mongodb');

// Your connection string
const uri = "mongodb+srv://deepak240101266_db_user:seLrXhbJDw37aVB2@codingcamp.6xwbryw.mongodb.net/";

const client = new MongoClient(uri);

async function connectAndShowData() {
    try {
        // 1. Connect to the MongoDB cluster
        await client.connect();
        console.log("Successfully connected to MongoDB! 🎉");
        
        // 2. Select your 'coderArmy' database
        const database = client.db('coderArmy');
        
        // 3. CHANGE THIS: Replace 'YOUR_COLLECTION_NAME' with your actual collection name from Compass
        const collection = database.collection('user');

        // 4. Fetch all the documents from that collection
        

        const insertresult = await collection.insertOne(
            {"name" : "rampal" ,
             "rollno" : "240101288" 
        })
         const allData = await collection.find({}).toArray() ;
        // 5. Print the data to your terminal
        console.log("\n🎒 Here is the data you entered in Compass:");
        console.dir(allData, { depth: null, colors: true });

    } catch (error) {
        console.error("Connection or fetching failed:", error);
    } finally {
        // 6. Close the connection when done
        await client.close();
    }
}

// Run the function
connectAndShowData();
