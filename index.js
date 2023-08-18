let couponCount = 0;

function onClickHandler(data) {
  //   console.log(data.parentNode.parentNode.children[0].innerText.split("!")[0]);
  const productName =
    data.parentNode.parentNode.children[0].innerText.split("!")[0];
  const price = parseFloat(
    data.parentNode.parentNode.children[2].children[0].innerText
  );
  const cart = document.getElementById("cart");
  const couponContent = document.getElementById("coupon-content");
  const product = document.createElement("p");
  const count = cart.childElementCount - 1;
  const totalPriceEl = document.getElementById("total-price");
  let totalPrice = parseFloat(totalPriceEl.innerText);
  product.innerHTML = `<p class="ml-2 mt-4">${count}. ${productName} -- $ ${price}</p>`;
  couponContent.classList.remove("hidden");
  cart.insertBefore(product, couponContent);
  totalPrice += price;
  totalPriceEl.innerText = totalPrice;
}

// coupon handler
function couponHandler(data) {
  const couponBtn = document.getElementById("btn-coupon");

  if (data.value === "coupon" && couponCount === 0) {
    couponBtn.classList.remove("btn-disabled");
  } else {
    if (couponBtn.classList.value.includes("btn-disabled")) {
      return;
    } else {
      couponBtn.classList.add("btn-disabled");
    }
  }
}
// coupon button handler

function couponBtnHandler() {
  if (couponCount === 0) {
    const totalPriceEl = document.getElementById("total-price");
    let totalPrice = parseFloat(totalPriceEl.innerText) * 0.75;
    totalPriceEl.innerText = totalPrice;
    couponCount++;
  } else {
    return;
  }
}
