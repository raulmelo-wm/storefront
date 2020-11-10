import { Lightning } from "@lightningjs/sdk";

export class Profile extends Lightning.Component {
  static _template() {
    return {
      text: { text: "Profile Page", fontFace: "Roboto" },
      x: 380 + 50,
      y: 50,
    };
  }
}
