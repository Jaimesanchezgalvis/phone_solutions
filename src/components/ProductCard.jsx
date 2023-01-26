import { Card, Grid, Text, Image, Badge, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";

import "../styles/components/productCard.scss";

export const ProductCard = ({ id, model, imgUrl, brand, price }) => {
  return (
    <Grid md={3}>
      <Card isPressable isHoverable>
        <Link to={id}>
          <Card.Body>
            <Text
              css={{
                color: "rgb(80 84 86)",
              }}
              weight="bold"
            >
              Model: {model}
            </Text>
            <Image src={imgUrl} alt="Default Image" objectFit="cover" />
            <hr />
            <Row align="center" justify="center">
              <Grid>
                <Badge variant="bordered"> Brand: {brand}</Badge>
              </Grid>
              <Grid>
                <Badge color="success" variant="bordered">
                  Price: {price}€
                </Badge>
              </Grid>
            </Row>
          </Card.Body>
        </Link>
      </Card>
    </Grid>
  );
};
