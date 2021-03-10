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
import path from 'path';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());

const apiUrl = 'https://api.chat-api.com/instance237471';
const token = '1zr7u3x08vfu82x6';


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
  console.log(req.body);
  const data = req.body.messages[0];
  console.log(data);



  if (data && data.body && data.body.match(/^Tell me about /g)) {
    const about = data.body.replace(/^Tell me about /g, '');
    console.log(about);
    wiki()
      .page(about)
      .then(page => page.summary())
      .then(summary => {
        axios.post(`${apiUrl}/typing?token=${token}`, {
          chatId: data.chatId,
          on: true,
          duration: 10
        });
        axios.post(`${apiUrl}/sendMessage?token=${token}`, {
          body: summary,
          chatId: data.chatId
        }).then(res => {
          console.log(res);
        });
      });
  }


  if (data && data.body && data.body.match(/^Picture of /g)) {
    const about = data.body.replace(/^Picture of /g, '');
    console.log(about);

    gis(about, (err, res) => {
      console.log(res[0]);

      // downloadImage(res[0].url).then(res => {
      // console.log('Image downloaded:');
      const _body = res[Math.floor(Math.random() * 100)].url;
      console.log('-------------------Req body: ', _body);
      const newUrl = _body.match(/^(.+?\.(png|jpe?g))/i)[0];
      console.log('--------newUrl', newUrl)
      axios.post(`${apiUrl}/sendFile?token=${token}`, {
        filename: newUrl,
        body: newUrl,
        message: about,
        chatId: data.chatId
      }, {
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => {
        console.log(res);
      });
      // })   


    });
  }

  // res.send("It's working");
  res.end();
});

async function apiChatApi(method, params) {
  const options = {};
  options['method'] = "POST";
  options['body'] = JSON.stringify(params);
  options['headers'] = { 'Content-Type': 'application/json' };

  const url = `${apiUrl}/${method}?token=${token}`;

  const apiResponse = await fetch(url, options);
  const jsonResponse = await apiResponse.json();
  return jsonResponse;
}



app.post('/webhook', async function (req, res) {
  const data = req.body;
  for (var i in data.messages) {
    const author = data.messages[i].author;
    const body = data.messages[i].body;
    const chatId = data.messages[i].chatId;
    const senderName = data.messages[i].senderName;

    console.log(data);

    if (data.messages[i].fromMe) return;
  }
});


// axios.post(url + '/sendMessage?token=1zr7u3x08vfu82x6', {
//   body: "Just testing my whatsapp bot",
//   phone: "27662504106"
// }).then(res => {
//   console.log(res)
// })




async function downloadImage(url) {
  console.log('Getting image');
  const newUrl = url.match(/^(.+?\.(png|jpe?g))/i);
  console.log('--------newUrl', newUrl)
  const _url = newUrl;
  const _path = path.resolve(__dirname, 'images', 'code.jpg');
  const _writer = fs.createWriteStream(_path);

  const response = await axios.get(_url, {
    responseType: 'stream'
  });

  response.data.pipe(_writer);

  return new Promise((resolve, reject) => {
    _writer.on('finish', resolve);
    _writer.on('error', reject);
  });
}