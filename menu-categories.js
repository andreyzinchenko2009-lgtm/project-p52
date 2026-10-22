document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".carousel-category");
  const tracks = document.querySelectorAll(".carousel__track");
  const favoriteButtons = document.querySelectorAll(".card__favorite-btn");
  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedCategory = button.getAttribute("data-category");

      categoryButtons.forEach(function (btn) {
        btn.classList.remove("carousel-category--active");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("carousel-category--active");
      button.setAttribute("aria-pressed", "true");

      tracks.forEach(function (track) {
        if (track.id === `track-${selectedCategory}`) {
          track.removeAttribute("hidden");
          track.classList.add("carousel__track--active");
        } else {
          track.setAttribute("hidden", "true");
          track.classList.remove("carousel__track--active");
        }
      });
    });
  });
  favoriteButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const heartIcon = btn.querySelector("i");
      btn.classList.toggle("is-active");

      if (btn.classList.contains("is-active")) {
        heartIcon.className = "fa-solid fa-heart";
      } else {
        heartIcon.className = "fa-regular fa-heart";
      }
    });
  });
});