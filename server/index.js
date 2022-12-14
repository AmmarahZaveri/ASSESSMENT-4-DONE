const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getEmotions, getQuotes } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortunes); 
app.get("/api/qoute", getQuotes); 
app.get("/api/emotion", getEmotions); 

app.listen(4000, () => console.log("Server running on 4000"));



