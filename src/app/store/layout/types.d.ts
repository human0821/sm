declare namespace StoreLayout {
  export interface Lightbox {
    toggler: boolean;
    slides: string[];
  }
  export interface Menu {
    id: number;
    name: string;
    status: boolean;
    subMenu: Omit<AdminMenu, "submenu">[];
  }
  export interface State {
    showBanner: boolean;
    showMenu: boolean;
    showNews: boolean;
    menu: Menu[] | [];
    lightbox: Lightbox;
  }
}
