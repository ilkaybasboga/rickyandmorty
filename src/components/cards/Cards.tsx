import React from "react";
import "./Cards.scss";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useCallData from "../../hooks/useCallData";

interface Item {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

interface Props {
  data: Item[];
}

const Cards: React.FC<Props> = ({ data }) => {
  const { handleLocationFilter } = useCallData();
  // console.log(data)

  return (
    <Box className="box-card">
      {data.map((item: Item) => (
        <Box className="card" key={item.id}>
          <CardContent
            className="card-content"
            onClick={(e: React.MouseEvent) => handleLocationFilter(`${item.name}`)}
          >
            <Typography
              className="text-head"
              variant="h5"
              component="div"
              mb={2}
            >
              {item.name}
            </Typography>
            <Typography>
              <span className="span-1">Type</span>:{item.type}
            </Typography>
            <Typography>
              <span className="span-2">Dimension</span>:
              {item.dimension === "unknown" ? "-" : item.dimension}
            </Typography>
            <Typography>
              <span className="span-3">Residents count</span>:
              {item.residents.length}
            </Typography>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;