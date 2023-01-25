export const addProductCart = async (body) => {
  //   const url = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart";
  //   const headers = new Headers();

  //   headers.append("Content-Type", "application/json");
  //   const body = JSON.stringify(body);
  //   console.log(body);
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers,
  //     body,
  //   });

  //   const res = await response.json();
  //   return console.log("Purchases:", res);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "session_id=s%3A2zmNoOuyxW5RdQ3YkkBMh9K1XcamUu3L.FUli0a0qfltNquXNcPi7bozJWfYKrpFhVARlBSK72qc"
  );
//   myHeaders.append("mode", "same-origin");

  var raw = JSON.stringify({
    id: "2",
    colorCode: "3",
    storageCode: "asdf",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/cart",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
