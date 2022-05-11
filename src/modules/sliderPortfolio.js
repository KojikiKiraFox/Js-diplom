const portfolioSlider = () => {
    const portSlider = document.querySelector('.portfolio-slider')
    const portSlides = document.querySelectorAll('.portfolio-slider__slide')

    let num = 0

    const div = document.createElement('div')
    div.classList.add('portfolioSliderCustomWrap')
    portSlider.append(div)
    div.style.position = 'relative'
    div.style.display = 'flex'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.transition = 'transform 0.5s'
    portSlides.forEach((val, key) => {
        div.append(portSlides[key])
    })

    const arrowInit = () => {
        document.querySelector('#portfolio-arrow_left').style.display = 'flex'
        document.querySelector('#portfolio-arrow_right').style.display = 'flex'
        if (num == -704) {
            document.querySelector('#portfolio-arrow_right').style.display = 'none'
        }
        if (num == 0) {
            document.querySelector('#portfolio-arrow_left').style.display = 'none'
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('#portfolio-arrow_right')) {
            num += -352
            div.style.transform = `translateX(${num + 'px'})`
            arrowInit()
        }
        if (e.target.closest('#portfolio-arrow_left')) {
            num += 352
            div.style.transform = `translateX(${num + 'px'})`
            arrowInit()
        }
    })
    arrowInit()
}

export default portfolioSlider