const formLogin = document.querySelectorAll('.form-text input');
const formLabel = document.querySelectorAll('.form-text label');
for (let i = 0; i < 2; i++) {
    formLogin[i].addEventListener("mousemove", function () {
        formLabel[i].classList.add("focus")
    })
    formLogin[i].addEventListener("mouseout", function () {
        if (formLogin[i].value == "") {
            formLabel[i].classList.remove("focus")
        }

    })
}