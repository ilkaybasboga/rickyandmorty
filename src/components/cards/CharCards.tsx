import "./CharCards.scss";
import { Grid, Box, Typography } from "@mui/material";
// import grey from "../../asset/grey.jpg";
import useCallData from "../../hooks/useCallData";
import { Character } from "../../types/types";

function Media({ data }: { data: Character[] }) {
  const { handleCharDetails } = useCallData();

  return (
    <Grid container  className="grid">
      {data.map((item: Character, index: number) =>
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
                    <div className="span-1"></div>{" "}
                    {item.status} -{item.species}
                  </div>
                ) : item.status === "Alive" ? (
                  <div className="text-bottom">
                    <span className="span-2"></span>{" "}
                    {item.status} -{item.species}
                  </div>
                ) : (
                  <div className="text-bottom">
                    <span className="span-3"></span>{" "}
                    {item.status} -{item.species}
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
}

export default function CharCards({ data }: { data: Character[] }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* <Media loading /> */}
      <Media data={data} />
    </Box>
  );
}