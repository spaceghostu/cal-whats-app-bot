import axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
import localtunnel from 'localtunnel';
import { commands } from './commands';
import { apiUrl, token } from './config';
import { _tellMeAbout } from './commands/tell-me-about'
import { _pictureOf } from './commands/picture-of'

const app = express();
app.use(bodyParser.json());

process.on('unhandledRejection', err => {
  console.log(err);
});


let tunnel = '';
(async () => {
  const _tunnel = await localtunnel({ port: 3000 });

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
  const data = req.body.messages[0];
  console.log(data);

  const command = commands.find(command => {
    if (data.body.startsWith(command)) return command;
  });

  console.log(command);

  switch (command) {
    case 'Tell me about':
      _tellMeAbout(data);
      break;

    case 'Picture of':
      _pictureOf(data);
      break;

    default:
      break;
  }

  res.end();
});



