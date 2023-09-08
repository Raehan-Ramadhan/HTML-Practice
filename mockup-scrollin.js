const Option = {
	'damping': 0.08
}
const scrollbar = Scrollbar.init(document.querySelector('#viewport'), Option);


const 	gallery = document.querySelector('.gallery'),
		pintop = gallery.getBoundingClientRect().top,
		pinbottom = gallery.getBoundingClientRect().bottom - pintop - window.innerHeight;

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

scrollbar.addListener((status) => {
	const offset = clamp(status.offset.y-pintop, 0, pinbottom);
	document.querySelector('.right-side').style.transform = `translateY(${offset}px)`
});