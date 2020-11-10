import { Lightning } from "@lightningjs/sdk";
import { Color } from "../../utils/Color";

export class MenuItem extends Lightning.Component {
  static _template() {
    return {
      text: {
        text: "",
        fontFace: "Roboto",
        fontSize: 40,
        mount: 0.5,
      },
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
    this.patch({
      smooth: {
        color: Color.hexToArgb("#ffffff", 0.5),
      },
    });
  }
  _unfocus() {
    this.patch({
      smooth: {
        color: Color.hexToArgb("#ffffff"),
      },
    });
  }
}
