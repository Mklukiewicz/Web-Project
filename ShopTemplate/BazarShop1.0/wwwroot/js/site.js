document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("languageToggle");
    const dropdown = document.getElementById("languageDropdown");

    toggleButton.addEventListener("click", function (e) {
        e.stopPropagation(); // nie zamykaj od razu
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        dropdown.style.display = "none";
    });
});