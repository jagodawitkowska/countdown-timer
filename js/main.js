const settingsBtn = document.querySelector(".settings-btn");
const settings = document.querySelector(".settings");

const eventNameInput = document.querySelector("#event-name");
const eventDayInput = document.querySelector("#event-day");
const eventMonthInput = document.querySelector("#event-month");
const eventYearInput = document.querySelector("#event-year");

const saveBtn = document.querySelector(".save");

const eventName = document.querySelector(".event-name");
const daysCard = document.querySelector(".days");
const hoursCard = document.querySelector(".hours");
const minutesCard = document.querySelector(".minutes");
const secondsCard = document.querySelector(".seconds");

const updateInfo = () => {
	if (eventNameInput.value !== "") {
		eventName.textContent = eventNameInput.value;
	}
	let eventDate = new Date(
		`${eventMonthInput.value} ${eventDayInput.value} ${eventYearInput.value}`
	);

	let currentDate = new Date();
	let result = eventDate - currentDate;

	daysCard.textContent = Math.floor(result / 1000 / 60 / 60 / 24);
	hoursCard.textContent = Math.floor(result / 1000 / 60 / 60) % 24;
	minutesCard.textContent = Math.floor(result / 1000 / 60) % 60;
	secondsCard.textContent = Math.floor(result / 1000) % 60;
};

saveBtn.addEventListener("click", () => {
	updateInfo();
	settings.classList.remove("show");
});
settingsBtn.addEventListener("click", () => {
	settings.classList.toggle("show");
});

setInterval(updateInfo, 1000);
