var Option = {
	'damping': 0.08
}

Scrollbar.init(document.querySelector('#my-scrollbar'), Option);

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right-side"
})