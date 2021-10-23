window.onload = function () {
  const year = document.getElementById("footer-bottom-year");
  const body = document.body;
  const menu = document.getElementById("menu");
  const openButton = document.getElementById("open-menu-button");
  const closeButton = document.getElementById("close-menu-button");

  year.innerHTML = new Date().getFullYear();

  openButton.addEventListener("click", function () {
    body.style.overflow = "hidden";
    menu.style.visibility = "visible";
    menu.style.width = "100%";
  });

  closeButton.addEventListener("click", function () {
    body.style.overflow = "visible";
    menu.style.width = "0";
    menu.style.visibility = "hidden";
  });
};
