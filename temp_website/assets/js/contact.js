const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});




async function connectToMongoDB() {
  // Replace with your MongoDB Atlas credentials
  const uri = 'mongodb+srv://pratyushprakhar21:vKZgN88J3nkq70PX @testingcluster.65tpmce.mongodb.net/?retryWrites=true&w=majority';
  
  const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect();
      console.log('Connected to MongoDB');

      const database = client.db('Venko-testing');
      const collection = database.collection('Venko-testing');

      // Fetch documents from MongoDB
      const documents = await collection.find().toArray();

      // Display documents on the page
      const messagesContainer = document.getElementById('messages');
      documents.forEach(doc => {
          const div = document.createElement('div');
          div.textContent = doc.content;
          messagesContainer.appendChild(div);
      });
  } finally {
      await client.close();
  }
}

connectToMongoDB();