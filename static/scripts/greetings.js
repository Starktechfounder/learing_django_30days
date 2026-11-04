document.addEventListener("DOMContentLoaded", () => {
	const greetingElement = document.querySelector("#greeting");

	if (!greetingElement) return;

	const hour = new Date().getHours();
	let greeting;

	if (hour < 12) {
		greeting = "Good morning";
	} else if (hour < 18) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good evening";
	}

	greetingElement.textContent = `${greeting}! Welcome to our website.`;
});
 