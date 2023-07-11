import React from "react";
import "./CharDetMain.scss";
import { Box } from "@mui/material";
import CharCardsDet from "../cards/CharCardsDet";
import CharRightCards from "../cards/CharRightCards";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";

const CharDetMain: React.FC = () => {
  const { charDetails, filterLoc, character } = useSelector<
  RootState,
  RootState["get"]
>((state) => state.get);

  const charDet = charDetails;

  const filterLocation = filterLoc.payload;
  const characters = character
    .filter((item) => item.location.name === filterLocation)
    .map((x) => x)
    .slice(0, 6);

  return (
    <Box className="box-main">
      <CharCardsDet data={charDet} />
      <CharRightCards data={characters} />
    </Box>
  );
};

export default CharDetMain;