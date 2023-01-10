const axios = require("axios");
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {
        const fortunes = [
          "You will find a lucky penny",
          "There will be unpredictable rain, carry an umbrella",
          "You will stumble upon good luck today",
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
    
        res.status(200).send(randomFortunes);
      },

      getQuotes: (req, res) => {
        const quotes = [
          "Do not bite off more than you can chew",
          "An apple a day keeps the octor away",
          "Treat others how you would like to be treated",
        ];
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuotes = quotes[randomIndex];
    
        res.status(200).send(randomQuotes);
      },
      getEmotions: (req, res) => {
        const emotions = [
          "Happy",
          "Sad",
          "Angry",
        ];
        let randomIndex = Math.floor(Math.random() * emotions.length);
        let randomEmotions = emotions[randomIndex];
    
        res.status(200).send(randomEmotions);
      },

}
