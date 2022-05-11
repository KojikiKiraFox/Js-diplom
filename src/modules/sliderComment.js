const comment = () => {
    const slider = document.querySelector('.reviews-slider')
    const slides = document.querySelectorAll('.reviews-slider__slide')

    let num = 0

    const div = document.createElement('div')
    div.classList.add('reviewSliderCustomWrap')
    slider.append(div)
    div.style.position = 'relative'
    div.style.display = 'flex'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.transition = 'transform 0.5s'
    slides.forEach((val, key) => {
        div.append(slides[key])
    })

    const init = () => {
        div.style.transform = `translateX(${num + 'px'})`
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('#reviews-arrow_right')) {
            num += -494
            init()
        }
        if (e.target.closest('#reviews-arrow_left')) {
            num += 494
            init()
        }
    })
}

export default comment