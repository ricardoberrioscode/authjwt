"use client"
import { Typography, Box, useTheme } from "@mui/material";
import { useThemeHook } from "@theme/themeSett";
import { tokens } from "@style/colors";
import { useThemeContext, useUsersState } from "@context/createContexts";

const Header = ({ title, subtitle }) => {
 //console.log("Hwader")
 const {
  // loger,
  logget,
  //logOut
 } = useUsersState()
 const {
  mode,
  //isNonMobileScreens,

 } = useThemeContext()
 const colors = tokens(mode);
 return (
  <Box mb="30px"
   display={logget ? "flex" : "none"}
   sx={{
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center"
   }}
  >
   <Typography
    variant="h2"
    color={colors.grey[100]}
    fontWeight="bold"
    sx={{ m: "0 0 5px 0" }}
   >
    {title}
   </Typography>
   <Typography variant="h5" color={colors.greenAccent[400]}>
    {subtitle}
   </Typography>
  </Box>
 );
};

export default Header;
