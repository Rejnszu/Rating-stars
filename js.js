const stars = document.querySelectorAll(".rating i");
const rate = document.querySelector(".rate");

stars.forEach(function (star, i) {
  star.addEventListener("click", function () {
    stars.forEach((star) => star.classList.remove("active"));
    rate.innerHTML = this.dataset.rate;
    for (let j = 0; j <= i; j++) {
      stars[j].classList.toggle("active");
    }
  });
});
