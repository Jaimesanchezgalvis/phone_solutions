import { Avatar, Badge, Container, Grid, Row } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

import brandLogo from "../static/brandLogo.png";
import cart from "../static/cart.png";
import "../styles/components/headerComponete.scss";

const HeaderComponent = () => {
  return (
    <Container>
      <Row justify="space-between" align="center">
        <Link to={"/phone_solutions"}>
          <img className="logo" src={brandLogo} alt="brand logo" />
        </Link>
        <Grid justify="flex-end">
          <Grid.Container alignItems="center" gap={2}>
            <Grid justify="flex-end">
              <Badge
                color="error"
                content={localStorage.getItem("count")}
                shape="circle"
                size="md"
              >
                <Avatar size="md" src={cart} />
              </Badge>
            </Grid>
          </Grid.Container>
        </Grid>
      </Row>
    </Container>
  );
};

export default HeaderComponent;
