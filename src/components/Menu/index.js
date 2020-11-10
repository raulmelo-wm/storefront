import { Lightning } from "@lightningjs/sdk";

import { MenuItem } from "../MenuItem";
import { Color } from "../../utils/Color";

export class Menu extends Lightning.Component {
  menuItems = [
    { label: "Home Page", action: "Home" },
    { label: "Movies Page", action: "Movies" },
    { label: "Profile Page", action: "Profile" },
  ];

  itemsRef = null;
  activeItemIndex = null;

  static _template() {
    return {
      rect: true,
      h: 1080,
      w: 320,
      color: Color.rgbaToArgb(68, 132, 160, 0.2),
      Items: {
        x: 40,
      },
    };
  }

  _setup() {
    this.itemsRef = this.tag("Items");
    this.activeItemIndex = 0;
  }

  _init() {
    /**
     * Why this logic should be inside _init() and not _setup()?
     */
    this.itemsRef.children = this.menuItems.map((item, index) => ({
      type: MenuItem,
      action: item.action,
      label: item.label,
      // prettier-ignore
      y: (index * 90) + 30,
    }));
  }

  _handleUp() {
    if (this.activeItemIndex > 0) {
      this.activeItemIndex--;
    }
  }

  _handleDown() {
    if (this.activeItemIndex >= this.itemsRef.children.length - 1) {
      return;
    }

    this.activeItemIndex++;
  }

  _handleRight() {
    this.close();
    this.signal("onMenuClose", this.menuItems[this.activeItemIndex]);
  }

  _handleLeft() {
    this.open();
  }

  _getFocused() {
    return this.itemsRef.children[this.activeItemIndex];
  }

  open() {
    this._setState("Opened");
  }

  close() {
    this._setState("");
  }
}
