

import "./Navbar.scss";
import React from "react";
import rm from "../../asset/randm.png";
import { Box } from "@mui/material";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Box className="navbar">
      <img src={rm} alt="R&M" />
    </Box>
  );
};

export default Navbar;

