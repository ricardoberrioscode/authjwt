"use client"
import { MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { useThemeContext } from "@context/createContexts";
import Link from 'next/link'
import { tokens } from "@style/colors";

export const ItemsMenu = ({ title, to, icon, selected, setSelected }) => {
 const {
  mode,
  setIsCollap,
  isCollapsed,
  isNonMobileScreens,
 } = useThemeContext()
 const colors = tokens(mode);
 return (
  <MenuItem
   active={selected === title}
   style={{
    color: colors.grey[100],
   }}
   onClick={() => {
    setSelected(title)
    if (!isNonMobileScreens && !isCollapsed) { setIsCollap(false) }
   }}
   icon={icon}
  >
   <Typography>{title}</Typography>
   <Link href={to} />
  </MenuItem>
 );
};

