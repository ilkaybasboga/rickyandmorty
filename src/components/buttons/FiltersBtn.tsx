import React from "react";
import "./FiltersBtn.scss";
import { Box, Typography } from "@mui/material";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useCallData from "../../hooks/useCallData";

const FiltersBtn: React.FC = () => {
  const { handleCardFilter } = useCallData();   //!useCallData'dan filtrelemek için yazdığım fonksiyonu alıyorum. 

  return (
    <Box className="box-btn">
      <Typography className="text">Filter by status:</Typography>
      <Stack direction="row" spacing={2} className="stack">
        <Button
          className="btn-1"
          variant="outlined"
          onClick={(e) => handleCardFilter("Dead")}
        >
          <span className="span-1"></span>
          Dead
        </Button>
        <Button
          className="btn-2"
          variant="outlined"
          onClick={(e) => handleCardFilter("Alive")}
        >
          <span className="span-2"></span>
          Alive
        </Button>
        <Button
          className="btn-3"
          variant="outlined"
          onClick={(e) => handleCardFilter("unknown")}
        >
          <span className="span-3"></span>
          Unknown
        </Button>
        <Button
          className="btn-4"
          variant="outlined"
          onClick={(e) => handleCardFilter("")} //? Filtrelerimi resetlemek için buton ekledim
        >
          <span className="span-4">.</span>
          Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default FiltersBtn;