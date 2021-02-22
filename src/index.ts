import Assets from './resources/assets';
import Render from "./resources/render";

export default class Veed {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  assets() {
    return new Assets(this.apiKey);
  }

  render() {
    return new Render(this.apiKey);
  }
}
