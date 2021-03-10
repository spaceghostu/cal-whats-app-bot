import axios from 'axios';
import { apiUrl, token } from '../config'
import gis from 'g-i-s'

export function _pictureOf(data) {
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
