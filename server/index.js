import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(json());

import { getCompliment } from './controller';
import { getFortunes } from './controller';

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortunes);

app.listen(4000, () => console.log("Server running on 4000"));

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });
  
  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });
