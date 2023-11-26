import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";


const Layout = () => {
  return (
    <div>
      <Box width="100%" height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
