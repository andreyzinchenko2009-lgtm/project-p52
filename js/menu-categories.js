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

<<<<<<< HEAD
const initialTrack = document.createElement("div");
initialTrack.className = "carousel__track";
while (carousel.firstElementChild) {
	initialTrack.append(carousel.firstElementChild);
}
carousel.append(initialTrack);

let visibleTrack = initialTrack;
let activeCategory = "hot";

function createTrack(category) {
	const track = document.createElement("div");
	track.className = "carousel__track";
=======
function showCategory(category) {
	carousel.innerHTML = "";
>>>>>>> d5594c057729015b5ff986a57f9f50a94a859f76

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
<<<<<<< HEAD
		track.append(card);
	});

	return track;
}

function showCategory(category) {
	if (category === activeCategory) {
		return;
	}

	const outgoingTrack = visibleTrack;
	const outgoingTransform = window.getComputedStyle(outgoingTrack).transform;
	outgoingTrack.getAnimations().forEach(function (animation) {
		animation.cancel();
	});

	Array.from(carousel.children).forEach(function (track) {
		if (track !== outgoingTrack) {
			track.remove();
		}
	});

	const nextTrack = createTrack(category);
	carousel.append(nextTrack);
	visibleTrack = nextTrack;
	activeCategory = category;

	const timing = {
		duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 500 : 1000,
		easing: "cubic-bezier(0.4, 0, 0.2, 1)",
		fill: "both"
	};

	const exitAnimation = outgoingTrack.animate([
		{ transform: outgoingTransform },
		{ transform: "translateX(-100%)" }
	], timing);

	nextTrack.animate([
		{ transform: "translateX(100%)" },
		{ transform: "translateX(0)" }
	], timing);

	exitAnimation.onfinish = function () {
		if (outgoingTrack !== visibleTrack) {
			outgoingTrack.remove();
		}
	};
=======
		carousel.append(card);
	});
>>>>>>> d5594c057729015b5ff986a57f9f50a94a859f76
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
