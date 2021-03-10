import axios from 'axios';
import wiki from 'wikijs';
import { apiUrl, token } from '../config'

export function _tellMeAbout(data) {
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