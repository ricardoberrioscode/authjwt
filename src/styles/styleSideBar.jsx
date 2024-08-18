import { tokens } from "@style/colors";
import { useThemeContext, useUsersState } from "@context/createContexts";


export const styleSideBar = () => {
  const {
    mode,
    isNonMobileScreens,

    isCollapsed,
  } = useThemeContext()
  const colors = tokens(mode);
  const {
    logget,
    tken
  } = useUsersState()

  return {
    "& .pro-sidebar-inner": {
      background: `${colors.primary[400]} !important`,
      width: isNonMobileScreens ? (isCollapsed ? "38px" : "inherit")
        :
        (isCollapsed ? "38px" : "inherit"),
    },
    "& .pro-sidebar": {
      minWidth: "20px",
      display: (tken) ? "flex" : "none"
    },
    "& .pro-sidebar.collapsed": {
      width: "40px",
      minWidth: "20px"
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 3px 5px 2px !important",
    },
    "& .pro-inner-item:hover": {
      color: "#868dfb !important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
    "& .MuiTypography-root": {
      display: isCollapsed ? "none" : "flex"
    },
    "& ::-webkit-scrollbar": {
      // display: isCollapsed ? "none" : "flex"
    },
  }
}