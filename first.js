setTimeout(function () {
  console.log("i am here");
  document.getElementsByClassName(
    "shopify-payment-button__button"
  )[0].textContent = "GET IT NOW (Primathon powered)";
}, 1000)();
