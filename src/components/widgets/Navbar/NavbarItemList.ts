import { RoutePath } from "../../router";

export interface NavbarItemType {
  path: string;
  text: string;
  dataTestId: string;
}

export const NavbarItemList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: "Main",
    dataTestId: "main-link",
  },
  {
    path: RoutePath.about,
    text: "About",
    dataTestId: "about-link",
  },
  {
    path: RoutePath.form,
    text: "Form",
    dataTestId: "form-link",
  },
];
