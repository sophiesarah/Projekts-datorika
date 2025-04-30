
function addClickListener(id, img1, img2) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", function () {
      const img = this;
      img.src = (img.src.includes(img1)) ? img2 : img1;
    });
  }
}

addClickListener("id4", "bilde1.png", "bilde5.png");
addClickListener("id5", "bilde2.png", "bilde6.png");
addClickListener("id6", "bilde3.png", "bilde7.png");
addClickListener("id7", "bilde9.png", "bilde8.png");
addClickListener("id8", "bilde10.png", "bilde4.png");
