function cartFunction() {
  const menu = document.getElementById("cart-inner");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";

  }
}

document.querySelector('.btn-cart').addEventListener("click", function() {
  document.querySelector('.cart-item__products').style.display = "block";
  document.querySelector('.cart-product').innerHTML += `<h5>1.Blue Shoes<b>$149.99</b> </h5>`
})

let itemsCount = 0;
document.querySelector('.btn-cart').addEventListener("click", function() {
  itemsCount++;
  document.querySelector('.cart--number').innerHTML = itemsCount;
})


