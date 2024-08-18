//"use client"
import { tokens } from "@style/colors";
import { useThemeContext } from "@context/createContexts";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

export const StyleRendCellLista = ({ sroles }) => {
  const {
    mode,
  } = useThemeContext()
  const colors = tokens(mode);


  return (
    <Box
      width="60%"
      m="0 auto"
      p="5px"
      display="flex"
      justifyContent="center"
      backgroundColor={
        sroles == "admin,moderator"
          ? colors.greenAccent[600]
          : sroles == "moderator"
            ? colors.greenAccent[700]
            : colors.greenAccent[700]
      }
      borderRadius="4px"
    >
      {sroles == "moderator,admin" && <AdminPanelSettingsOutlinedIcon />}
      {sroles == "admin" && <AdminPanelSettingsOutlinedIcon />}
      {sroles == "moderator" && <SecurityOutlinedIcon />}
      {sroles == "editor" && <SecurityOutlinedIcon />}
      {sroles == "user" && <LockOpenOutlinedIcon />}
      <Typography color={(sroles == "moderator,admin") ?
        colors.primary[500]
        : colors.grey[100]
      } sx={{ ml: "5px" }}>
        {(sroles == "moderator,admin") ? "Super Usuario" : sroles}

      </Typography>
    </Box>
  )

}

export const styleGridList = () => {
  const {
    mode,
  } = useThemeContext()
  const colors = tokens(mode);

  return {
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
  }
}