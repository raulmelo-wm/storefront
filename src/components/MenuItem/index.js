import { Lightning } from "@lightningjs/sdk";

export class MenuItem extends Lightning.Component {
  static _template() {
    return {
      text: { text: "", fontFace: "Roboto", fontSize: 50 },
    };
  }

  set label(label) {
    this.text.text = label;
  }

  set action(action) {
    this._action = action;
  }

  get action() {
    return this._action;
  }

  _focus() {
    this.setSmooth("color", 0xffcccccc);
  }
  _unfocus() {
    this.setSmooth("color", 0xffffffff);
  }
}
