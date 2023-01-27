import Swal from "sweetalert2";

export const getProducts = async () => {
  const url = "https://2gm2eu9uuw.us-east-1.awsapprunner.com/api/product";
  const response = await fetch(url);
  const dataApi = await response.json();

  localStorage.setItem("data", JSON.stringify(dataApi));
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  // if the user is inactive for 1 hour, the data will be deleted from the local storage
  setTimeout(() => {
    localStorage.removeItem("data");
    Swal.fire(
      "are you there'?",
      "You can reload the page to continue browsing😎",
      "question"
    );
  }, 3600000);

  return data;
};
