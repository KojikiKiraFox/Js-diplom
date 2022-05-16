const contacts = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const phone = document.querySelector('.header-contacts__phone-number-accord a')
    let count = 0
    
    arrow.addEventListener('click', () => {
        if (count == 0) {
            count = 1
            phone.style.opacity = 1
            phone.style.marginTop = 20 + 'px'
            arrow.style.transform = `rotate(180deg)`
        } else if (count == 1) {
            count = 0
            phone.style.opacity = 0
            phone.style.marginTop = 0
            arrow.style.transform = `rotate(0deg)`
        }
    })
}

export default contacts