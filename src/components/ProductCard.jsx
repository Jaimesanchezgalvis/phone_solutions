import { Card, Grid, Text, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, model, imgUrl }) => {
  return (
    <Grid md={3}>
      <Card isPressable isHoverable>
        <Link to={id}>
          <Card.Body>
            <Text>Model: {model}</Text>
            <Image src={imgUrl} alt="Default Image" objectFit="cover" />
          </Card.Body>
        </Link>
      </Card>
    </Grid>
  );
};
