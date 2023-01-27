import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Loading,
  Radio,
  Row,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import { addProductCart } from "../api/addProductCart";

export const AddCartProduct = ({ product }) => {
  const [productData, setProductData] = useState({});
  const [checkedColor, setCheckedColor] = useState("");
  const [checkedStorage, setCheckedStorage] = useState("");

  useEffect(() => {
    setProductData(product);
  }, [product]);

  const { id } = productData;

  const handleAddCart = () => {
    const body = {
      id: id,
      colorCode: checkedColor,
      storageCode: checkedStorage,
    };

    if (checkedColor === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select the color!",
      });
    } else if (checkedStorage === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a storage!",
      });
    } else {
      addProductCart(body).then((data) => {
        localStorage.setItem("count", data);
      });
      Swal.fire({
        icon: "success",
        title: "Added to cart!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  try {
    return (
      <Container
        fluid
        justify="center"
        alignItems="center"
        alignContent="center"
        display="flex"
        css={{
          padding: "0",
        }}
      >
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
