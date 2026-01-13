import React, { ReactNode } from "react";
import { LayoutNavigationTree, LayoutNavigationItem } from "@react-md/layout";
import { HomeSVGIcon, ListSVGIcon } from "react-md";

function NavLabel({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span className="navLabel">
      <span className="navIcon">{icon}</span>
      <span className="navText">{label}</span>
    </span>
  );
}

function createRoute(
  pathname: string,
  label: string,
  icon: ReactNode,
  parentId: string | null = null
): LayoutNavigationItem {
  return {
    itemId: pathname,
    parentId,
    href: pathname,
    // children を ReactNode にして横並びレイアウトにする
    children: <NavLabel icon={icon} label={label} />,
  };
}

const NavItems: LayoutNavigationTree = {
  "/": createRoute("/", "HOME", <HomeSVGIcon />),
  "/todo": createRoute("/todo", "TODO", <ListSVGIcon />),
};

export default NavItems;
