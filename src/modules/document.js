const document = () => {
    const modal = document.querySelector('.popup-transparency')
    const slides = document.querySelectorAll('.transparency-item')
    const transSlider = document.querySelector('.popup-transparency-slider')
    const transSlide = document.querySelectorAll('.popup-transparency-slider__slide')
    const total = document.querySelector('.slider-counter-content__total')
    const current = document.querySelector('.slider-counter-content__current')
    let num = 0
    let counter = 1
    current.textContent = counter
    
    const div = document.createElement('div')
    div.classList.add('documentSliderCustomWrap')
    transSlider.append(div)
    div.style.position = 'relative'
    div.style.display = 'flex'
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.transition = 'transform 0.5s'
    transSlide.forEach((val, key) => {
        div.append(transSlide[key])
        transSlide[key].style.minWidth = '432px'
    })

    total.textContent = transSlide.length

    const arrowInit = () => {
        document.querySelector('#transparency_left').style.display = 'flex'
        document.querySelector('#transparency_right').style.display = 'flex'
        if (num == -864) {
            document.querySelector('#transparency_right').style.display = 'none'
        }
        if (num == -0) {
            document.querySelector('#transparency_left').style.display = 'none'
        }
    }

    slides.forEach((btn, key) => {
        btn.addEventListener('click', (e) => {
            if (key == 0) {
                modal.style.visibility = 'visible'
                num = 0
                div.style.transform = `translateX(${num + 'px'})`
                arrowInit()
            } else
            if (key == 1) {
                modal.style.visibility = 'visible'
                num = -432
                div.style.transform = `translateX(${num + 'px'})`
                arrowInit()
            } else
            if (key == 2) {
                modal.style.visibility = 'visible'
                num = -864
                div.style.transform = `translateX(${num + 'px'})`
                arrowInit()
            }
        })
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-transparency')) {
            modal.style.visibility = 'hidden'
        }

        if (e.target.closest('#transparency_left')) {
            counter--
            num += 432
            div.style.transform = `translateX(${num + 'px'})`
            current.textContent = counter
            arrowInit()
        }

        if (e.target.closest('#transparency_right')) {
            counter++
            num += -432
            div.style.transform = `translateX(${num + 'px'})`
            current.textContent = counter
            arrowInit()
        }
    })
    arrowInit()
}

export default document