import {Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchdIcon from "@mui/icons-material/Search";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return 
    <Box display= "flex" justifyContent="space-between" p={2}> 
          {/* SearchBar */}
          <Box 
          display="flex" 
          backgroundColor={colors.primary[400]} 
          borderRadius="3px">
         <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
         <IconButton type="button" sx={{ p:1}}>
            <SearchdIcon />
         </IconButton>
          </Box>

            <IconButton></IconButton>
    </Box>;

};

export default Topbar;