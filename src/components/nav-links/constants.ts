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
  {
    name: "Login",
    pathname: "/login",
  },
];
export type TNavLinkMenu = {
  name: string;
  pathname: string;
};
