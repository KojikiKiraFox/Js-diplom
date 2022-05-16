const sendForm = ({ formId, someElem = [] }) => {
    const forms = document.querySelectorAll("form")
    const popupThank = document.querySelector(".popup-thank")
    const popupConsultation = document.querySelector(".popup-consultation")
    const inputs = document.querySelectorAll("input")
    
    const errorMessage = "Что то пошло не так...",
        loadMessage = "Отправка...",
        warnCheck = "Поставьте галочку"

    const statusMessage = document.createElement("div")

    popupThank.addEventListener("click", (event) => {
        let target = event.target

        if (target.matches(".close-thank") && target.closest(".popup-thank")) {
        popupThank.removeAttribute("style")
        document.querySelector("body").removeAttribute("style")
        }
    })

    const postData = (body) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        })
    }

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
        
            const policy = form.querySelector(".checkbox__input")
        
            if (!policy.checked) {
                form.appendChild(statusMessage)
                statusMessage.style.cssText = `font-size: 14px;
            color:red`
                statusMessage.textContent = warnCheck
            } else {
                statusMessage.textContent = loadMessage
                form.appendChild(statusMessage)
                statusMessage.style.cssText = `font-size: 14px;
                color:black`
            
                const formData = new FormData(form)
                let body = {}
                formData.forEach((val, key) => {
                body[key] = val
                })
                
            postData(body)
                .then((response) => {
                    if (response.status !== 201) {
                    throw new Error("status network not 201")
                    } else {
                    document.querySelector("body").removeAttribute("style")
                    popupConsultation.removeAttribute("style")
                    statusMessage.textContent = ""
                    popupThank.style.visibility = "visible"
                    document.querySelector("body").style.overflow = "hidden"

                    inputs.forEach((elem) => (elem.value = ""))
                }
                })
                .catch((error) => {
                statusMessage.textContent = errorMessage
                setTimeout(() => {
                    statusMessage.textContent = ""
                }, 3000)
                console.error(error)
                })
            }
        })
    })
}

export default sendForm