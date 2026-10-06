const menuItems = {
	hot: [
		{ name: "Espresso", image: "espresso.png" },
		{ name: "Latte", image: "latte.png" },
		{ name: "Honey Raf", image: "rapht.png" }
	],
	cold: [
		{ name: "Iced Espresso", image: "espresso.png" },
		{ name: "Iced Latte", image: "latte.png" },
		{ name: "Cold Honey Raf", image: "rapht.png" }
	],
	sweet: [
		{ name: "Honey Raf", image: "rapht.png" },
		{ name: "Vanilla Latte", image: "latte.png" },
		{ name: "Caramel Espresso", image: "espresso.png" }
	]
};

const categoryButtons = document.querySelectorAll(".carousel-category");
const carousel = document.querySelector(".carousel");

function showCategory(category) {
	carousel.innerHTML = "";

	menuItems[category].forEach(function (item) {
		const card = document.createElement("div");
		card.className = "card";

		const image = document.createElement("img");
		image.className = "card__img";
		image.src = "./image/images-for-cards/" + item.image;
		image.alt = item.name;

		const title = document.createElement("h2");
		title.className = "card__title";
		title.style.color = "#2e1a10";
		title.textContent = item.name;

		card.append(image, title);
		carousel.append(card);
	});
}

categoryButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		categoryButtons.forEach(function (categoryButton) {
			categoryButton.classList.remove("carousel-category--active");
			categoryButton.setAttribute("aria-pressed", "false");
		});

		button.classList.add("carousel-category--active");
		button.setAttribute("aria-pressed", "true");
		showCategory(button.id);
	});
});
