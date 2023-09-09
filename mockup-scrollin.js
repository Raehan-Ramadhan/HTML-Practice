import Scrollbar from "https://cdn.skypack.dev/smooth-scrollbar@8.8.4";

const Option = {
	damping: 0.08
};
const scrollbar = Scrollbar.init(document.querySelector("#viewport"), Option);

const gallery = document.querySelector(".gallery"),
	viewport = document.querySelector("#viewport"),
	details = document.querySelectorAll(".details"),
	images = document.querySelectorAll(".image");

const colors = [
	"#FFA756",
	"#B9C7EC",
	"#FD9BCF",
	"#36F667",
	"#FD9BCF",
	"#FFFFFF"
];

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

var pintop, pinbottom, bound;
function refresh() {
	pintop = scrollbar.offset.y + gallery.getBoundingClientRect().top;
	pinbottom =
		scrollbar.offset.y +
		gallery.getBoundingClientRect().bottom -
		pintop -
		window.innerHeight;

	bound = Array.from(details).map(
		(detail) =>
			scrollbar.offset.y +
			detail.getBoundingClientRect().top -
			Math.round(window.innerHeight / 2)
	);
	bound.unshift(0);
	bound.push(
		scrollbar.offset.y +
			gallery.getBoundingClientRect().bottom -
			Math.round(window.innerHeight / 2)
	);

	pinImage(scrollbar.offset);
	getColor(scrollbar.offset);
	clipImage(scrollbar.offset);
}
refresh();

function pinImage(offset) {
	const transform = clamp(offset.y - pintop, 0, pinbottom);
	document.querySelector(
		".right-side"
	).style.transform = `translateY(${transform}px)`;
}

function getColor(offset) {
	for (let i = 0; i < colors.length; i++) {
		if (offset.y > bound[i]) {
			viewport.style.backgroundColor = colors[i];
		}
	}
}

function clipImage(offset) {
	var a = Math.round(
		((offset.y - pintop) / pinbottom) * 100 * (images.length - 1)
	);
	a = clamp(a, 0, (images.length - 1) * 100);
	images.forEach(function (Val, Index) {
		Val.style.clipPath = `inset(0 0 ${a - Index * 100}% 0)`;
	});
}

scrollbar.addListener((status) => {
	pinImage(status.offset);
	getColor(status.offset);
	clipImage(status.offset);
});