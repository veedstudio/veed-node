import axios from 'axios';
import { API_URL } from '../config';

export default class Render {
  private readonly apiKey: string;
  private url = `${API_URL}/renders`;


  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  create(body: object) {
    return axios.post(this.url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.apiKey,
      },
    });
  }

  retrieve(id: string) {
    return axios.get(`${this.url}/${id}`, {
      headers: {
        Authorization: this.apiKey
      }
    })
  }
}
