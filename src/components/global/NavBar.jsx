'use client'
import { Box, Button, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { tokens } from "@style/colors";
import { useUsersState, useThemeContext } from "@context/createContexts";

const NavBar = () => {
  // console.log("navBar");
  const router = useRouter();
  const {
    logOut,
    logget,
    tken,
  } = useUsersState()
  const {
    colorMode, mode,
    isNonMobileScreens
  } = useThemeContext()
  const colors = tokens(mode);

  return (
    <Box
      display={tken ? "flex" : "none"}
      justifyContent="space-between" p={2}
      borderBottom={1}
    >
      {/* SEARCH BAR */}
      {isNonMobileScreens &&
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      }
      {/* ICONS */}
      <Box display="flex">
        {logget && <div
          onClick={() => router.push(`/`)}
        >
          <Button
            onClick={logOut}
            color="primary" variant="contained">
            LOGOUT
          </Button>
        </div>
        }
        <IconButton
          onClick={colorMode.toggleColorMode}>
          {mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>

  );
};

export default NavBar;
