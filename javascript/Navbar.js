/*----navbar-mobil----*/
function menuFunction() {
  const menu = document.querySelector(".navbar-mobil");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";

  }
}
/*------cart-----*/

function cartFunction() {
  const menu = document.getElementById("cart-inner");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";

  }
}
