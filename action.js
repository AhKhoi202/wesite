document.getElementById("android").style.display = "none";
document.getElementById("ios").style.display = "none";

document.querySelector(".android").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("web").style.display = "none";
  document.getElementById("ios").style.display = "none";
  document.getElementById("android").style.display = "block";
});

document.querySelector(".ios").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("android").style.display = "none";
  document.getElementById("web").style.display = "none";
  document.getElementById("ios").style.display = "block";
});

document.querySelector(".web").addEventListener("click", function (e) {
  e.preventDefault();

  document.getElementById("android").style.display = "none";
  document.getElementById("ios").style.display = "none";
  document.getElementById("web").style.display = "block";
});


