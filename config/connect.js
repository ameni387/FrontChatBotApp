const mongoose = require('mongoose')
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://amani:amani@cluster0.jq48tve.mongodb.net/splitDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
  
  module.exports = mongoose;