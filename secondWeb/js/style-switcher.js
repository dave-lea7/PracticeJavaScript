const colorSwitchToggle = document.querySelector(".style-switcher-toggler");

colorSwitchToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

