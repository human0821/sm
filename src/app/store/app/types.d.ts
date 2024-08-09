declare namespace StoreApp {
  export interface Modal {
    show: boolean;
    component?: React.ReactNode;
    width?: number;
  }

  export interface State {
    modal: Modal;
  }
}
