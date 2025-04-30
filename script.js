document.getElementById("id4").addEventListener("click", function () {
  const img = this;
  img.src = (img.src.includes("bilde1.png")) ? "bilde5.png" : "bilde1.png";
});

document.getElementById("id5").addEventListener("click", function () {
  const img = this;
  img.src = (img.src.includes("bilde2.png")) ? "bilde6.png" : "bilde2.png";
});

document.getElementById("id6").addEventListener("click", function () {
  const img = this;
  img.src = (img.src.includes("bilde3.png")) ? "bilde7.png" : "bilde3.png";
});

document.getElementById("id7").addEventListener("click", function () {
  const img = this;
  img.src = (img.src.includes("bilde9.png")) ? "bilde8.png" : "bilde9.png";
});

document.getElementById("id8").addEventListener("click", function () {
  const img = this;
  img.src = (img.src.includes("bilde10.png")) ? "bilde4.png" : "bilde10.png";
});