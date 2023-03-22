import { Avatar, Badge, Container, Grid, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";

import brandLogo from "../static/brandLogo.png";
import cart from "../static/cart.png";
import "../styles/components/headerComponete.scss";

const HeaderComponent = () => {
  return (
    <Container css={{ margin: "0 auto", padding: "0" }}>
      <Row justify="space-between" align="center">
        <Link to={"/"}>
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
