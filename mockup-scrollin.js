Scrollbar.init(document.querySelector('#my-scrollbar'));

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right-side"
})