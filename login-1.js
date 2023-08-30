const wrapper = document.querySelector(".wrapper"),
	loginLink = document.querySelector(".login-link"),
	registerLink = document.querySelector(".register-link"),
	wrapperButtonOpen = document.querySelector(".wrapperbtn-open"),
	wrapperButtonClose = document.querySelector(".wrapperbtn-close");

registerLink.addEventListener("click", () => {
	wrapper.classList.add("register-active");
});

loginLink.addEventListener("click", () => {
	wrapper.classList.remove("register-active");
});

wrapperButtonOpen.addEventListener("click", () => {
	wrapper.classList.add("active");
});

wrapperButtonClose.addEventListener("click", () => {
	wrapper.classList.remove("active");
});