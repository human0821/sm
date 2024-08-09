declare namespace ApiMenuResponse {
  export interface GetMenu {
    id: number;
    name: string;
    status: boolean;
    sub_menu: Omit<GetMenu, "sub_menu">[];
  }
}
