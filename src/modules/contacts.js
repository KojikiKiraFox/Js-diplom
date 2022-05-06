const contacts = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const number = document.querySelector('.header-contacts__phone-number-accord a')
    let count = 0

    arrow.addEventListener('click', function(){
        if(count == 0){
            number.style.opacity = 1
            number.style.marginTop = 20 + 'px'
            arrow.style.transform = 'rotate(180deg)'
            count++
        }else if(count == 1){
            number.style.opacity = 0
            number.style.marginTop = 0 + 'px'
            arrow.style.transform = 'rotate(0deg)'
            count = 0
        }
    })
}
export default contacts