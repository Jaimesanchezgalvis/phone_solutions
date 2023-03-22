import {
  Card,
  Grid,
  Text,
  Image,
  Loading,
  Button,
  Container,
} from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailBrand } from "../api/getDetailBrand";

import "../styles/components/productCard.scss";

export const ProductCard = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetailBrand(id).then((data) => {
      setData(data.data.phones);
    });
  }, [id]);

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <Container>
      <Text
        css={{
          color: "#18738f",
        }}
        weight="bold"
      >
        List of {data[0].brand} Phones:
      </Text>
      <Grid.Container gap={2} justify="center">
        {data.map(({ image, phone_name, slug }, index) => {
          return (
            <Grid md={3} key={index}>
              <Link to={slug}>
                <Card
                  isPressable
                  isHoverable
                  css={{
                    w: "100%",
                    minWidth: "278px",
                    padding: "1rem",
                  }}
                >
                  <Card.Header css={{ padding: "0" }}>
                    <Text
                      css={{
                        color: "rgb(80 84 86)",
                      }}
                      weight="bold"
                    >
                      Model: {phone_name}
                    </Text>
                  </Card.Header>
                  <Card.Body
                    css={{
                      padding: "0",
                    }}
                  >
                    <Image src={image} alt="Product Image" objectFit="cover" />
                    <hr />
                  </Card.Body>
                  <Card.Footer
                    css={{
                      padding: "0",
                      justifySelf: "center",
                    }}
                  >
                    <Button color="gradient" css={{ margin: "0 auto" }}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};
