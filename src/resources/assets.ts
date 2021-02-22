import axios from 'axios';
import { API_URL } from '../config';

export default class Assets {
  private readonly apiKey: string;
  private API_DOMAIN: string = API_URL[prompt.env.NODE_ENV]
  private url = `${this.API_DOMAIN}/assets`;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  create(data: object) {
    return axios.post(this.url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.apiKey,
      },
    });
  }

  list() {
    return axios.get(this.url, {
      headers: {
        Authorization: this.apiKey,
      },
    });
  }

  retrieve(id: string) {
    return axios.get(`${this.url}/${id}`, {
      headers: {
        Authorization: this.apiKey,
      },
    });
  }
}
