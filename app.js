const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express'); 
const req = require('express/lib/request');
const remarque=require('./model/remarque') ; 

const app = express();
mongoose.connect('mongodb+srv://samehajala123:Sam13280215@cluster0.gcrqsil.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((e) => console.log(e));
app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res) => {
    // Use res.sendFile to serve an HTML file
    res.sendFile(path.join(__dirname, './public', 'index.html'));
  });
  app.post("/traiterContact",(req,res)=>{
    const name=req.body.inp1 ; 
    const email=req.body.inp2 ; 
    const sujet=req.body.inp3 ; 
    const desc=req.body.textare ; 
    console.log(name) ; 
    console.log(email) ;
    console.log(sujet) ;
    console.log(desc) ;
    const jsonObject = {
        name: name,
        Email: email,
        Subject: sujet,
        Description: desc
      };
      const finalRemarque = JSON.stringify(jsonObject) ;
      const remarqueToSave=new remarque({...jsonObject}) ; 
      remarqueToSave.save().then(() => res.redirect("/"))
    .catch(error => res.status(400).json({ error }));
}); 
module.exports = app;