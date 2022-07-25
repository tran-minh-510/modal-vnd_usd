var container = document.querySelector(".container");
var overlay = document.querySelector(".overlay");
var btnModal = document.querySelectorAll(".btn-modal");
var modal = document.querySelector(".modal");
var x = document.querySelectorAll(".modal i");

for (i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", function () {
    var hash = this.getAttribute("data");
    var idModal = document.querySelector(hash);
    idModal.classList.add("appear");
    overlay.classList.add("appear");

    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape") {
        idModal.classList.remove("appear");
        overlay.classList.remove("appear");
      } else {
      }
    });

    overlay.addEventListener("click", function () {
      idModal.classList.remove("appear");
      overlay.classList.remove("appear");
    });
  });
}

for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    this.parentElement.classList.remove("appear");
    overlay.classList.remove("appear");
  });
}
