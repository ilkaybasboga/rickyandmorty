import React from "react";
import "./CharCards.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Character } from "../../types/types";
// import grey from "../../asset/grey.jpg";
import useCallData from "../../hooks/useCallData";

interface CharCardsFilterProps {
  characterFilters: Character[];
}

const CharCardsFilter: React.FC<CharCardsFilterProps> = ({
  characterFilters,
}) => {
  const { handleCharDetails } = useCallData();

  return (
    <Grid container wrap="wrap" className="grid">
      {characterFilters.map((item: Character, index: number) =>
        item ? (
          <Box
            className="box-charcards"
            key={index}
            onClick={(e) => handleCharDetails(item)}
          >
            <img alt={item.name} src={item.image} />

            <Box>
              <Typography gutterBottom variant="body2" className="text-head">
                {item.name}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {item.status === "Dead" ? (
                  <div className="text-bottom">
                    <div className="span-1"></div> {item.status} -{item.species}
                  </div>
                ) : item.status === "Alive" ? (
                  <div className="text-bottom">
                    <span className="span-2"></span> {item.status} -
                    {item.species}
                  </div>
                ) : (
                  <div className="text-bottom">
                    <span className="span-3"></span> {item.status} -
                    {item.species}
                  </div>
                )}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            className="box-charcards"
            key={index}
            sx={{ width: 210, marginRight: 0.5, my: 5 }}
          >
            <img alt="" src="" className="empty-img" />

            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2" className="text-head">
                XXX
              </Typography>

              <Typography variant="caption" color="text.secondary">
                <div className="text-bottom">
                  <span className="span-3">.......</span> Unknown
                </div>
              </Typography>
            </Box>
          </Box>
        )
      )}
    </Grid>
  );
};

export default CharCardsFilter;