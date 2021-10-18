window.onload = function () {
  const openButton = document.getElementById("open-button");
  openButton.addEventListener("click", function () {
    const navBar = document.getElementById("slide-over");
    navBar.style.visibility = "visible";
    navBar.style.width = "80%";
  });

  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", function () {
    const navBar = document.getElementById("slide-over");
    navBar.style.width = "0";
    navBar.style.visibility = "hidden";
  });
};
