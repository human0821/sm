import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";
import type { LinkProps } from "@mui/material/Link";

import React from "react";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom";

/* eslint-disable react/display-name */
const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }>(
  (props, ref) => {
    const { href, ...other } = props;
    // Map href (Material UI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
  },
);

export const MuiLink: {
  defaultProps?: ComponentsProps["MuiLink"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiLink"];
  variants?: ComponentsVariants<Theme>["MuiLink"];
} = {
  defaultProps: {
    component: LinkBehavior,
  } as LinkProps,
};
