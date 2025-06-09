// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

let dbInstance = null;

// MongoDB connection URI and database name from environment variables
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;

async function connectToDatabase() {
    // Return existing database instance if already connected
    if (dbInstance) {
        return dbInstance;
    }

    // Task 2: Connect to MongoDB
    const client = new MongoClient(url);
    await client.connect();

    // Task 3: Connect to the database and store it in dbInstance
    dbInstance = client.db(dbName);

    // Task 4: Return the database instance
    return dbInstance;
}

module.exports = connectToDatabase;