import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;  // MongoDB URI from environment variables
const dbName = process.env.MONGODB_DB;  // Database name (ContactDB or whatever you set)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, number, email } = req.body;

  if (!name || !number || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('contacts'); // 'contacts' collection
    
    // Insert data into MongoDB
    const result = await collection.insertOne({ name, number, email });

    // Close the connection
    await client.close();

    return res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
