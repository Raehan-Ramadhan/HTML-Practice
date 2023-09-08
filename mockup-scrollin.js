const Option = {
	'damping': 0.08
}
const scrollbar = Scrollbar.init(document.querySelector('#viewport'), Option);


const 	gallery = document.querySelector('.gallery'),
		pintop = gallery.getBoundingClientRect().top,
		pinbottom = gallery.getBoundingClientRect().bottom - pintop - window.innerHeight;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function pinImage(offset) {
	const transform = clamp(offset.y-pintop, 0, pinbottom);
	document.querySelector('.right-side').style.transform = `translateY(${transform}px)`
}


scrollbar.addListener((status) => {
	pinImage(status.offset);
});