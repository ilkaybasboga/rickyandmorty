import "./CharCardsDet.scss";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import grey from "../../asset/grey.jpg";

interface MediaProps {
  data: {
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    id?: string;
  };
}

function Media({ data }: MediaProps) {
  console.log(data);

  return (
    <Grid container wrap="wrap" className="grid-Det">
      {data ? (
        <Box className="box-left-cards">
          <Box className="box-img">
          
            <img alt={data.name} src={data.image} />
          </Box>
          <Box className="box-text">
            <Typography className="text-head">{data.name}</Typography>

            <Typography variant="caption" color="text.secondary">
              {data.status === "Dead" ? (
                <div className="text-bottom">
                  <div>
                    <span className="span-1">......</span> {data.status} -
                    {data.species}
                  </div>
                  <div className="text-right">
                    {data.species}-{data.gender}
                  </div>
                </div>
              ) : data.status === "Alive" ? (
                <div className="text-bottom">
                  <div>
                    <span className="span-2">......</span> {data.status} -
                    {data.species}
                  </div>
                  <div className="text-right">
                    {data.species}-{data.gender}
                  </div>
                </div>
              ) : (
                <div className="text-bottom">
                  <div>
                    <span className="span-3">......</span> {data.status} -
                    {data.species}
                  </div>
                  <div className="text-right">
                    {data.species}-{data.gender}
                  </div>
                </div>
              )}
            </Typography>
            <Typography className="text-org-name">
              {data.origin.name}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          className="box-charcards"
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
      )}
    </Grid>
  );
}

interface CharCardsDetProps {
  data: {
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    id?: string;
  };
}

export default function CharCardsDet({ data }: CharCardsDetProps) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* <Media loading /> */}
      <Media data={data} />
    </Box>
  );
}
