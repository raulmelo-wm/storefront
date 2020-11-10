import { Lightning, Utils } from "@lightningjs/sdk";
import { Menu } from "./components/Menu";
import { Home, Movies, Profile } from "./screens";
import { Color } from "./utils/Color";

export default class App extends Lightning.Component {
  isMenuOpen = false;
  menuRef = null;
  homeRef = null;

  static getFonts() {
    return [{ family: "Roboto", url: Utils.asset("fonts/Roboto-Regular.ttf") }];
  }

  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      colorLeft: Color.rgbaToArgb(15, 1, 94),
      colorRight: Color.rgbaToArgb(123, 22, 255, 0.75),

      Menu: {
        type: Menu,
      },
      Profile: {
        type: Profile,
      },
      Home: {
        type: Home,
      },
      Movies: {
        type: Movies,
      },
    };
  }

  static _states() {
    return [
      class Menu extends this {
        _getFocused() {
          return this.menuRef;
        }
      },
    ];
  }

  _setup() {
    this.menuRef = this.tag("Menu");
    this.homeRef = this.tag("Home");
  }

  _init() {
    this._setState("Menu");
  }

  _handleUp() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  _getFocused() {
    return this.menuRef;
  }
}
