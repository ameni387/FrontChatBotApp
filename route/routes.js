const express = require('express');
const route = express.Router();
const Message= require("../models/message");
const bodyParser = require("body-parser")
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({ extended:false }));



// Create a route to handle paragraph splitting and saving
route.post('/paragraphs', async (req, res) => {
  try {
    const { text } = req.body;
    // const text="hello, hi . by"
    console.log(req.body);
    if (!req.body.text) {
      throw new Error('Content is missing');
    }
    
    const paragraphs = text.split(/[.,]/);

    // Save each paragraph to the database
    const savedParagraphs = await Message.insertMany(
      paragraphs.map(text => ({ text }))
    );
console.log('save');
    res.status(200).json(savedParagraphs);
  } catch (error) {
    console.error('Error saving paragraphs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//get all paragraphs
route.get('/allParagraphs',async (req,res)=>{
  try {
      await Message.find({})
      .then(result => {
          res.send(result)
      })   
  } catch (error) {
     console.log(error); 
  }
 
});

//delete a paragraph
route.delete('/delete_paragraphs/:id',async(req,res)=>{
  try {
    await Message.findOneAndDelete({_id: req.params.id});
    res.send('delete effectué avec succes!');

  } catch (error) {
    res.send(error)
    console.log(error);
  }
});

module.exports=route