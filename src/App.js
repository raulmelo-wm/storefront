import { Lightning, Utils } from "@lightningjs/sdk";
import { Menu } from "./components/Menu";
import { Home, Movies, Profile } from "./screens";
import { Color } from "./utils/Color";

export default class App extends Lightning.Component {
  isMenuOpen = false;
  menuRef = null;
  homeRef = null;
  profileRef = null;
  moviesRef = null;

  static getFonts() {
    return [{ family: "Roboto", url: Utils.asset("fonts/Roboto-Regular.ttf") }];
  }

  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      colorLeft: Color.rgbaToArgb(15, 32, 39),
      colorRight: Color.rgbaToArgb(32, 58, 67),

      Profile: {
        type: Profile,
      },
      Home: {
        type: Home,
      },
      Movies: {
        type: Movies,
      },

      // It needs to stay lower than everyone to be render on top of the others
      Menu: {
        type: Menu,
        signals: {
          /**
           * This bind the class method onMenuClose and enables
           * receiving signals
           */
          onMenuClose: true,
        },
      },
    };
  }

  static _states() {
    return [
      class Menu extends this {
        _getFocused() {
          return this.menuRef;
        }

        $enter() {
          this.menuRef.patch({
            x: 0,
            alpha: 1,
          });
        }

        $exit() {
          this.menuRef.patch({
            x: -380,
            alpha: 0,
          });
        }
      },

      class Home extends this {
        _getFocused() {
          return this.homeRef;
        }

        $enter() {
          this.homeRef.setSmooth("alpha", 1);
        }

        $exit() {
          this.homeRef.setSmooth("alpha", 0);
        }
      },

      class Profile extends this {
        _getFocused() {
          return this.profileRef;
        }

        $enter() {
          this.profileRef.setSmooth("alpha", 1);
        }

        $exit() {
          this.profileRef.setSmooth("alpha", 0);
        }
      },

      class Movies extends this {
        _getFocused() {
          return this.moviesRef;
        }

        $enter() {
          this.moviesRef.setSmooth("alpha", 1);
        }

        $exit() {
          this.moviesRef.setSmooth("alpha", 0);
        }
      },
    ];
  }

  _setup() {
    this.menuRef = this.tag("Menu");
    this.homeRef = this.tag("Home");
    this.profileRef = this.tag("Profile");
    this.moviesRef = this.tag("Movies");
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

  _handleLeft() {
    this._setState("Menu");
  }

  /* Custom Methods */
  onMenuClose(menuItem) {
    this._setState(menuItem.action);
  }
}
