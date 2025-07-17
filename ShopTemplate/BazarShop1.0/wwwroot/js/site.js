document.addEventListener("DOMContentLoaded", function () {

    const languageBtn = document.querySelector(".languageToggle");
    const popup = document.getElementById("languagePopup");
    const closeBtn = document.querySelector(".closePopup");

    languageBtn?.addEventListener("click", function () {
        console.log("Kliknięto globus");
        popup.classList.add("show");
    });

    closeBtn?.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    popup?.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });
});