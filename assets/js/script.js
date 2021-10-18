window.onload = function () {
  const openButton = document.getElementById("open-menu-button");
  openButton.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.visibility = "visible";
    menu.style.width = "80%";
  });

  const closeButton = document.getElementById("close-menu-button");
  closeButton.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.width = "0";
    menu.style.visibility = "hidden";
  });
};
