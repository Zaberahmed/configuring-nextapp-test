import React from "react";
import Link from "next/link";
import { NavLinkMenus, TNavLinkMenu } from "./constants";

const NavLinks = () => {
  return <NavLinkList />;
};

const NavLinkList = () => {
  const menus: TNavLinkMenu[] = NavLinkMenus;
  return (
    <ul className="flex items-center p-2 gap-5">
      {menus?.map((menu) => (
        <Link
          href={{ pathname: `${menu.pathname}` }}
          key={menu.name}>
          <li>{menu.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
