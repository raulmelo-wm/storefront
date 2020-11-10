import { Lightning } from "@lightningjs/sdk";

export class Movies extends Lightning.Component {
  static _template() {
    return {
      text: { text: "Movies page", fontFace: "Roboto" },
      x: 380 + 50,
      y: 50,
    };
  }
}
