import React from "react";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import { Box } from "@mui/material";
import "./Locations.scss"
const Locations = () => {
  return (
    <Box className="box-loc">
      <Navbar />
      <Main />
    </Box>
  );
};

export default Locations;
