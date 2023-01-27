import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import home from "../static/home.png";
import notFound from "../static/notFound.png";

import "../styles/pages/notfound404.scss";
import { Link } from "react-router-dom";

export const NotFound404 = () => {
  return (
    <Container
      display="flex"
      justify="center"
      css={{ width: "90%", padding: "0" }}
    >
      <Grid.Container gap={2}>
        <HeaderComponent />
        <Grid sm={12} justify="center">
          <Link to={"/phone_solutions"} css={{ textDecoration: "none" }}>
            <Card
              isPressable
              isHoverable
              css={{
                w: "100%",
                minWidth: "278px",
                maxWidth: "600px",
              }}
            >
              <Card.Header css={{ padding: "0", justifyContent: "center" }}>
                <Text
                  h1
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    textAlign: "center",
                  }}
                  weight="bold"
                >
                  Opss, this is embarrassing we can't find this Site.
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ padding: "0", justifyContent: "center" }}>
                <Row justify="center" align="center" wrap="wrap">
                  <img src={notFound} alt="" />
                </Row>
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{ padding: "0", justifyContent: "center" }}>
                <Row justify="center" align="center" wrap="wrap">
                  <Text
                    h3
                    size={20}
                    weight="bold"
                    css={{ color: "#504a4a", textAlign: "center" }}
                  >
                    What do you think if we go back to home?&nbsp;
                  </Text>
                  <img src={home} alt="" />
                </Row>
              </Card.Footer>
              <Spacer y={1}/>
            </Card>
          </Link>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
