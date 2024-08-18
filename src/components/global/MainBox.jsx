"use client"
import { Box } from '@mui/material'
import { useUsersState } from "@context/createContexts";
import LogUser from "@component/user-comp/LogUser";

const MainBox = ({ children }) => {
 const {
  logget,
  tken,
 } = useUsersState()

 return (
  <>
   {
    (logget === true) && tken ?
     (<Box sx={{ display: (logget) ? "block" : "none" }} >
      {children}
     </Box>)
     :
     (<LogUser />)
   }
  </>
 )
}

export default MainBox
