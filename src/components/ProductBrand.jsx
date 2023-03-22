import { Card, Grid, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

import "../styles/components/productCard.scss";

export const ProductBrand = ({ brand_slug, brand_name }) => {
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
        <Link to={brand_slug}>
          <Card.Header>
            <Text
              css={{
                color: "rgb(80 84 86)",
              }}
              weight="bold"
            >
              {brand_name}
            </Text>
          </Card.Header>
        </Link>
      </Card>
    </Grid>
  );
};
