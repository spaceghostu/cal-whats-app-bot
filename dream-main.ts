import { apiUrl, token } from './config';
export * from './api/apis';
export * from './model/models';
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import wiki from 'wikijs';
import localtunnel from 'localtunnel';
import moment from 'moment';
import gis from 'g-i-s';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import chalk from 'chalk';
import colorize from 'json-colorizer';

const app = express();
app.use(bodyParser.json());

let tunnel = '';
(async () => {
  const _tunnel = await localtunnel(
    {
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
    app.listen(3000, () => console.log(
      'Server listening on',
      chalk.bgGreen.black('localhost:3000'),
      'tunneled to',
      chalk.bgCyan.black(_tunnel.url)
    ));
  });

  _tunnel.on('close', () => {
    console.log('tunnels are closed');
  });
})();


app.post('/', function (req, res) {
  const command = _command(req);
  if (command) {
    console.log(
      chalk.bold.bgBlue.black('Command: '),
      chalk.bgGray.yellow.bold(command),
    );
  }

  switch (String(command)) {
    case 'Tell me about ':
      _replyWithInfo(req);
      break;
    case 'Picture of ':
      _replyWithImage(req);
      break;

    default:
      console.log(chalk.bgRed.white('Noting happened'))
      break;
  }

  res.end();
});


function _command(req): string | void | RegExpMatchArray {
  const message: string = (
    req &&
    req.body &&
    !req.body.ack &&
    _.isArray(req.body.messages) &&
    req.body.messages[0] &&
    req.body.messages[0].body
  );
  const command = message && message.match(/^(Tell me about |Picture of )/g);
  if (command !== null) return command;
}



function _replyWithImage(req) {
  const about = req &&
    req.body &&
    _.isArray(req.body.messages) &&
    req.body.messages[0] &&
    req.body.messages[0].body &&
    req.body.messages[0].body.replace(/^Picture of /g, '');
  console.log(chalk.green('Picture of '), chalk.bold.underline.greenBright(about));

  axios.post(`${apiUrl}/sendMessage?token=${token}`, {
    body: 'Hang tight...',
    chatId: req.body.chatId
  }).then(res => {
    gis(about, (err, res) => {
      const _body = res[Math.floor(Math.random() * 100)].url;
      console.log(chalk.bold.yellow('Req body: '), chalk.underline(_body));
      const newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
      console.log(chalk.bold.yellow('url'), chalk.underline(newUrl));
      axios.post(`${apiUrl}/sendFile?token=${token}`, {
        filename: newUrl,
        body: newUrl,
        message: about,
        chatId: req.body.chatId
      }, {
        headers: {
          'Content-type': 'application/json'
        }
      });
    });
  });
}


function _replyWithInfo(req) {
  const about = req &&
    req.body &&
    _.isArray(req.body.messages) &&
    req.body.messages[0] &&
    req.body.messages[0].body &&
    req.body.messages[0].body.replace(/^Tell me about /g, '');

  console.log(
    chalk.bold.bgBlue.black('About:   '),
    chalk.bgGray.yellow.bold(about),
  );
  wiki()
    .page(about)
    .then(page => page.summary())
    .then((summary) => {
      axios.post(`${apiUrl}/sendMessage?token=${token}`, {
        body: summary,
        chatId: req.body.chatId
      });
    })
    .catch(error => console.log(error))
}



// function _match(str: string) {
//   const regex = /^(Tell me about |Picture of )$/g;
//   return str.match(regex)[0];
// }