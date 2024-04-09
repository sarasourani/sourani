let navbar = document.querySelector(".nav-top");

document.querySelector("#menuButton").onclick = function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};