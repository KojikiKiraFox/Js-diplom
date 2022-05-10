const documents = () => {
    const modal = document.querySelector('.popup-transparency')
    const slides = document.querySelectorAll('.transparency-item')
    const transSlider = document.querySelector('.popup-transparency-slider')
    const transSlide = document.querySelectorAll('.popup-transparency-slider__slide')
    const counter = document.querySelector('#transparency-popup-counter')
    const total = counter.querySelector('.slider-counter-content__total')
    const current = counter.querySelector('.slider-counter-content__current')
    let num = 0
    let count = 1
    current.textContent = count
    
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

    const numSlider = () => {
        div.style.transform = `translateX(${num + 'px'})`
        current.textContent = count
    }

    const arrowInit = () => {
        document.querySelector('#transparency_left').style.display = 'flex'
        document.querySelector('#transparency_right').style.display = 'flex'
        if (num == -864) {
            document.querySelector('#transparency_right').style.display = 'none'
        }
        if (num == 0) {
            document.querySelector('#transparency_left').style.display = 'none'
        }
    }

    slides.forEach((btn, key) => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'visible'
            count = key + 1
            num = -432 * key
            numSlider()
            arrowInit()
        })
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-transparency')) {
            modal.style.visibility = 'hidden'
        }

        if (e.target.closest('#transparency_left')) {
            count--
            num += 432
            numSlider()
            arrowInit()
        }

        if (e.target.closest('#transparency_right')) {
            count++
            num += -432
            numSlider()
            arrowInit()
        }
    })
    arrowInit()
}

export default documents