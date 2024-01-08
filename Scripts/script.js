const btn_open = document.querySelectorAll(".open");

btn_open.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    const card = this.parentElement.nextElementSibling;
    card.style.opacity = 0;
  });
});

btn_open.forEach(function (button) {
  button.addEventListener("mouseleave", function () {
    const card = this.parentElement.nextElementSibling;
    card.style.opacity = 1;
  });
});

//for mobile:

function TextEffect() {
  if (!isImg) {
    const card = this.parentElement.nextElementSibling;
    card.style.opacity = 0;
    isImg = true;
  } else {
    const card = this.parentElement.nextElementSibling;
    card.style.opacity = 1;
    isImg = false;
  }
}

let isImg = false;
btn_open.forEach(function (button) {
  button.addEventListener("click", TextEffect);
});
