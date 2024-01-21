export const NavLinkMenus: TNavLinkMenu[] = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About",
    pathname: "/about",
  },
  {
    name: "Contact",
    pathname: "/contact",
  },
];
export type TNavLinkMenu = {
  name: string;
  pathname: string;
};
