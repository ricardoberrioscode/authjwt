"use client";
import { useMediaQuery, ThemeProvider } from '@mui/material';
import { usePathname } from "next/navigation";
import { CssBaseline } from "@mui/material";
import { themeContext } from "@context/createContexts";
import { useMode } from '@style/themeSett';
import { useState } from 'react';

export const ThemeState = ({ children }) => {
 const [theme, colorMode, mode] = useMode()
 const pathname = usePathname()
 const isNonMobileScreens = useMediaQuery('(min-width: 426px)')



 const [isCollapsed, setIsCollapsed] = useState(true);

 const setIsCollap = () => setIsCollapsed(!isCollapsed)

 const [selected, setSelect] = useState("Dashboard");
 const setSelected = (e) => setSelect(e)

 return (
  <themeContext.Provider
   value={{ colorMode, pathname, isNonMobileScreens, mode, theme, isCollapsed, setIsCollap, selected, setSelected }}   >
   <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
   </ThemeProvider>
  </themeContext.Provider>
 )
}
