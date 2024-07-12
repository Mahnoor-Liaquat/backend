const mongoose = require("mongoose");

// const dbURI =
//   "mongodb+srv://mahnoor:mahnoor@registerandlogin.5qylqjr.mongodb.net/Practice?retryWrites=true&w=majority";

  const DbConnect = async () => {
    try {
      const dbURI = process.env.MONGO;
      console.log('Connecting to MongoDB...');
      await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  };
  

module.exports = DbConnect;
