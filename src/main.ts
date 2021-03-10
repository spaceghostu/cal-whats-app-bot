// This is the entrypoint for the package
export * from './api/apis';
export * from './model/models';
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import wiki from 'wikijs';
import localtunnel from 'localtunnel';
import moment from 'moment';
import gis from 'g-i-s';
import giveMeAJoke from 'give-me-a-joke';
import oneLinerJoke from 'one-liner-joke';
import knockknock from 'knock-knock-jokes';
import yoMamma from 'yo-mamma';
import * as catFacts from 'get-cat-facts';
import * as facts from 'facts-generator';
import { getRandomFacts } from 'freefacts';
import imdbTrivia from "imdb-trivia";
import isPrime from "is-prime-value";

const app = express();
app.use(bodyParser.json());

const apiUrl = 'https://api.chat-api.com/instance237471';
const token = '1zr7u3x08vfu82x6';


process.on('unhandledRejection', err => {
  console.log(err);
});


let tunnel = '';
(async () => {
  const _tunnel = await localtunnel({
    port: 3000,
    subdomain: 'calcalchat'
  });

  tunnel = _tunnel.url;

  axios({
    method: 'post',
    url: `${apiUrl}/webhook?token=${token}`,
    data: {
      webhookUrl: tunnel,
    }
  }).then(res => {
    app.listen(3000, () => console.log(`Server listening on localhost:3000 tunneled to ${_tunnel.url}!`));
  });

  _tunnel.on('close', () => {
    console.log('tunnels are closed');
  });
})();


app.post('/', function (req, res) {
  console.log(req.body);
  const data = req.body.messages[0];
  console.log(data);


  if (data && data.body && data.body.match(/^Command list/g)) {
    console.log('command list');
    const commands = `
      - Tell me about <query>
      - Tell me all about <query>
      - Picture of <query>
      - Joke types
      - Give me a dad joke
      - Give me a chuck norris joke
      - Give me a random joke
      - Give me a knock knock joke
      - Give me a yo mama joke
      - Fact types
      - Give me a cat fact
      - Give me a fact fact
      - Give me a random fact
      - Give me a random random fact
      - Give me imdb trivia
      - Is prime <query>
      - Draw a card
    `;
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: commands,
      chatId: data.chatId
    });
  }

  if (data && data.body && data.body.match(/^Tell me about /g)) {
    const about = data.body.replace(/^Tell me about /g, '');
    console.log(about);
    wiki()
      .page(about)
      .then(page => page.summary())
      .then(summary => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: summary,
          chatId: data.chatId
        });
      })
      .catch(error => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: 'No Article Found',
          chatId: data.chatId
        });
      });
  }

  if (data && data.body && data.body.match(/^Tell me all about /g)) {
    const about = data.body.replace(/^Tell me all about /g, '');
    console.log(about);
    wiki()
      .page(about)
      .then(page => page.fullInfo())
      .then(summary => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: summary,
          chatId: data.chatId
        });
      })
      .catch(error => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: 'No Article Found',
          chatId: data.chatId
        });
      });
  }


  if (data && data.body && data.body.match(/^Picture of /g)) {
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: 'Hang tight...',
      chatId: data.chatId
    });

    const about = data.body.replace(/^Picture of /g, '');
    console.log(about);

    gis(about, (err, res) => {
      console.log(res[0]);
      const _body = res[Math.floor(Math.random() * 100)].url;
      console.log('Req body: ', _body);
      const newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
      console.log('newUrl', newUrl);
      axios.post(`${apiUrl}/sendFile?token=${token}`, {
        filename: newUrl,
        body: newUrl,
        message: about,
        chatId: data.chatId
      }, {
        headers: {
          'Content-type': 'application/json'
        }
      });
    });
  }


  if (data && data.body && data.body.match(/^Joke types/g)) {
    console.log('joke types');
    const jokeList = `
      Dad Jokes
      Chuck Norris Joke
      Random Joke
      Knock Knock
      Yo Mama
    `;
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: jokeList,
      chatId: data.chatId
    });
  }


  if (data && data.body && data.body.match(/^Give me a dad joke/g)) {
    console.log('dad joke');
    giveMeAJoke.getRandomDadJoke(function (joke: string) {
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: joke,
        chatId: data.chatId
      });
    });
  }

  if (data && data.body && data.body.match(/^Give me a chuck norris joke/g)) {
    console.log('chuck joke');
    giveMeAJoke.getRandomCNJoke(function (joke: string) {
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: joke,
        chatId: data.chatId
      });
    });
  }

  if (data && data.body && data.body.match(/^Give me a random joke/g)) {
    console.log('random joke');
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: getRandomJoke,
      chatId: data.chatId
    });
  }

  if (data && data.body && data.body.match(/^Give me a knock knock joke/g)) {
    console.log('knock knock joke');
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: knockknock(),
      chatId: data.chatId
    });
  }

  if (data && data.body && data.body.match(/^Give me a yo mama joke/g)) {
    console.log('yo mama joke');
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: yoMamma(),
      chatId: data.chatId
    });
  }
  // ======================= FACTS ===========================

  if (data && data.body && data.body.match(/^Fact types/g)) {
    console.log('joke types');
    const jokeList = `
      Real facts
    `;
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: jokeList,
      chatId: data.chatId
    });
  }


  if (data && data.body && data.body.match(/^Give me a cat fact/g)) {
    console.log('cat facts');
    (async () => {
      const results = await catFacts.random();
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: results,
        chatId: data.chatId
      });
    })();
  }


  if (data && data.body && data.body.match(/^Give me a fact fact/g)) {
    console.log('fact facts');
    const fetchFact = facts.getRandomFact();
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: fetchFact,
      chatId: data.chatId
    });
  }

  if (data && data.body && data.body.match(/^Give me a random fact/g)) {
    console.log('get random facts');
    getRandomFacts()
      .then((fact) => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: fact,
          chatId: data.chatId
        });
      })
      .catch((err) => {
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: 'no fact, only error',
          chatId: data.chatId
        });
      });
  }

  // if (data && data.body && data.body.match(/^Give me a random random fact/g)) {
  //   console.log('get random random facts');
  //   const fact = getRandomFact();
  //   axios.post(`${apiUrl}/sendMessage?token=${token}`, {
  //     body: fact,
  //     chatId: data.chatId
  //   });
  // }
  // =====================TRIVIA===============


  if (data && data.body && data.body.match(/^Give me imdb trivia/g)) {
    console.log('imdb trivia');

    imdbTrivia('tt0137523', function (err, movie) {
      console.log('imdb trivia inner');
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: movie,
        chatId: data.chatId
      });
    });
  }


  if (data && data.body && data.body.match(/^Is prime /g)) {
    console.log('is prime');
    const about = Number(data.body.replace(/^Is prime /g, ''));
    console.log(about);

    if (typeof about === 'number') {
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: isPrime(about),
        chatId: data.chatId
      });
    } else {
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: 'Please give me a number',
        chatId: data.chatId
      });
    }

  }

  if (data && data.body && data.body.match(/time/g)) {
    console.log('time');
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: moment().format('dddd MMMM Do YYYY, h:mm:ss a'),
        chatId: data.chatId
      });
  }

  if (data && data.body && data.body.match(/^Jack Friday/g)) {
    console.log('time');
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: 'CHICKEN',
        chatId: data.chatId
      });
  }

  if (data && data.body && data.body.match(/^Draw a card/g)) {
    console.log('draw card');
    let number = String(Math.floor(Math.random() * 15));
    number.replace('13', 'K');
    number.replace('12', 'Q');
    number.replace('11', 'J');
    number.replace('1', 'A');
    const name = data.senderName;
    const suitID = Math.floor(Math.random() * 4)
    const suites = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    const card = number + ' of ' + suites[suitID];
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: name + ' drew ' + card,
      chatId: data.chatId
    });
    
  }
  res.end();
});