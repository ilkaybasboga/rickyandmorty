import "./CharRightCards.scss";
import { Grid, Box, Typography } from "@mui/material";
import { Item } from "../../types/types";
// import grey from "../../asset/grey.jpg";



interface MediaProps {
  data: Item[];
}

function Media({ data }: MediaProps) {
  return (
    <Grid wrap="wrap" className="grid-right">
      <Typography className="text-top">Other Characters</Typography>
      <Box className="boxrightcards">
        {data.map((item, index) =>
          item ? (
            <Box className="box-char-right-cards" key={index}>
              <Box>
                <img alt={item.name} src={item.image} />
              </Box>

              <Box className="text-right">
                <Typography className="text-head">{item.name}</Typography>

                <Typography className="text-org-name">
                  {item.origin.name}
                </Typography>
                <Typography className="text-org-name">
                  {item.type}-{item.gender}
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
      </Box>
    </Grid>
  );
}

interface CharRightCardsProps {
  data: Item[];
}

export default function CharRightCards({ data }: CharRightCardsProps) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media data={data} />
    </Box>
  );
}