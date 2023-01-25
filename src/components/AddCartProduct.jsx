import {
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  Loading,
  Radio,
  Row,
  StyledButton,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { addProductCart } from "../api/addProductCart";
import cart from "../static/cart.png";

export const AddCartProduct = ({ product }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    setProductData(product);
  }, [product]);

  const [checkedColor, setCheckedColor] = useState("");
  const [checkedStorage, setCheckedStorage] = useState("");
  const [purchase, setPurchase] = useState("");

  const { id } = productData;

  const handleAddCart = () => {
    const body = {
      id: id,
      colorCode: checkedColor,
      storageCode: checkedStorage,
    };

    if (checkedColor === "") {
      alert("Please select a color");
    } else if (checkedStorage === "") {
      alert("Please select a storage");
    } else {
      addProductCart(body).then((data) => {
        setPurchase(data);
      });
    }
  };

  console.log(purchase);

  try {
    return (
      <Container
        fluid
        justify="center"
        alignItems="center"
        alignContent="center"
        css={{
          width: "90%",
        }}
      >
        <Row justify="flex-end"
        css={{
          position: "absolute",
          top: "0",
          right: "0",
        }}>
          <Grid justify="flex-end">
            <Grid.Container alignItems="center" gap={2}>
              <Grid justify="flex-end">
                <Badge
                  color="error"
                  content={purchase}
                  shape="circle"
                  size="md"
                >
                  <Avatar size="md" src={cart} />
                </Badge>
              </Grid>
            </Grid.Container>
          </Grid>
        </Row>
        <Row>
          <Grid xs={6} justify="flex-start">
            <Radio.Group
              label="Color options:"
              isRequired
              onChange={setCheckedColor}
            >
              {productData?.colors.map((color) => (
                <Radio key={color} value={color}>
                  {color}
                </Radio>
              ))}
            </Radio.Group>
          </Grid>
          <Grid xs={6} justify="flex-start">
            <Radio.Group
              label="Memory options:"
              defaultValue="A"
              isRequired
              onChange={setCheckedStorage}
            >
              {productData.internalMemory.map((internalMemory) => (
                <Radio key={internalMemory} value={internalMemory} isRequired>
                  {internalMemory}
                </Radio>
              ))}
            </Radio.Group>
          </Grid>
        </Row>
        <Button
          onPress={handleAddCart}
          shadow
          css={{ width: "80%", margin: "0 auto" }}
        >
          Add cart
        </Button>
      </Container>
    );
  } catch (error) {
    return <Loading />;
  }
};
