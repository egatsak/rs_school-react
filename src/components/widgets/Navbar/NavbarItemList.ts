import { RoutePath } from "../../router";

export interface NavbarItemType {
  path: string;
  text: string;
}

export const NavbarItemList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: "Main",
  },
  {
    path: RoutePath.about,
    text: "About",
  },
  {
    path: RoutePath.form,
    text: "Form",
  },
];
