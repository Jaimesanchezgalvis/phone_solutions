import { Card, Grid, Text, Image, Badge, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";

import "../styles/components/productCard.scss";

export const ProductCard = ({ id, model, imgUrl, brand, price }) => {
  return (
    <Grid md={3}>
      <Card
        isPressable
        isHoverable
        css={{
          w: "100%",
          minWidth: "278px",
        }}
      >
        <Link to={id}>
          <Card.Header>
            <Text
              css={{
                color: "rgb(80 84 86)",
              }}
              weight="bold"
            >
              Model: {model}
            </Text>
          </Card.Header>
          <Card.Body
            css={{
              paddingLeft: "0",
            }}
          >
            <Row justify="center">
              <Image src={imgUrl} alt="Product Image" objectFit="cover" />
            </Row>
            <hr />
          </Card.Body>
          <Card.Footer
            css={{
              paddingLeft: "0",
            }}
          >
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
          </Card.Footer>
        </Link>
      </Card>
    </Grid>
  );
};
