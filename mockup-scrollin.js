class pin extends Scrollbar.ScrollbarPlugin {
	static pluginName = 'pin';

	onInit() {
		document.querySelector('.right-side').style.transform = `translateY(${scrollbar.offset.y})`
		console.log("hello world")
		this._mount();
	}
}

const Option = {
	'damping': 0.08,
	plugins: {pin}
}
const scrollbar = Scrollbar.init(document.querySelector('#viewport'), Option);



/*
scrollbar.addListener((status) => {
	rightSide.style.transform = `translateY(${100})`
	console.log(status.offset.y)
});
*/