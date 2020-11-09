import { Lightning, Utils } from "@lightningjs/sdk";
import { Menu } from "./components/Menu";

export default class App extends Lightning.Component {
  menuRef = null;

  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  constructor(ctx) {
    super(ctx);
    this.menuRef = this.tag("Menu");
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset("images/background.png"),
      },
      Menu: {
        type: Menu,
      },
    };
  }

  _getFocused() {
    return this.menuRef;
  }
}
