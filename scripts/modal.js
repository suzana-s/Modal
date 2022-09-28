let buttonToggle = document.querySelectorAll("[data-modal-control]")

for(let i = 0; i < buttonToggle.length; i++){
    buttonToggle[i].addEventListener("click", () => {
        let valueDataModalControl = buttonToggle[i].getAttribute("data-modal-control")
        document.getElementById(valueDataModalControl).classList.toggle("show-modal")
    })
}