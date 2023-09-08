const Option = {
	'damping': 0.08
}
const scrollbar = Scrollbar.init(document.querySelector('#viewport'), Option);

scrollbar.addListener((status) => {
	document.querySelector('.right-side').style.transform = `translateY(${status.offset.y}px)`
});