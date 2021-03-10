import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import wiki from 'wikijs';
import localtunnel from 'localtunnel';
import gis from 'g-i-s';
import { apiUrl, token } from './config'

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
      });
  }


  if (data && data.body && data.body.match(/^Picture of /g)) {
    axios.post(`${apiUrl}/sendMessage?token=${token}`, {
      body: 'Hang tight...',
      chatId: data.chatId
    });

    const about = data.body.replace(/^Picture of /g, '');
    console.log(about);

    gis(about, (err: any, res: any) => {
      console.log(res[0]);
      const _body = res[Math.floor(Math.random() * 100)].url;
      console.log('Req body: ', _body);
      const newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
      console.log('newUrl', newUrl)
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
  res.end();
});
