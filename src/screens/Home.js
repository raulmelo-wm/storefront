import { Lightning } from "@lightningjs/sdk";

export class Home extends Lightning.Component {
  static _template() {
    return {
      text: { text: "Home Page", fontFace: "Roboto" },
      x: 380 + 50,
      y: 40,
      alpha: 0,
    };
  }
}
