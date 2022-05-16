const portfolioModal = () => {
    const slideFrames = document.querySelectorAll('.portfolio-slider__slide-frame')
    const modalSlides = document.querySelectorAll('.popup-portfolio-slider__slide')
    const modal = document.querySelector('.popup-portfolio')
    const close = modal.querySelector('.close')
    const portText = document.querySelectorAll('.popup-portfolio-text')
    const portSlider = document.querySelector('.popup-portfolio-slider')
    const counter = document.querySelector('#popup-portfolio-counter')
    const countTotal = counter.querySelector('.slider-counter-content__total')
    const countCurrent = counter.querySelector('.slider-counter-content__current')
    
    let num = 0
    let count = 1
    let countText = 0

    portSlider.style.transition = 'transform 0.5s'

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth <= 576) {
            counter.style.top = '85%'
            portSlider.style.display = 'flex'

            modalSlides.forEach((val, key) => {
                modalSlides[key].style.minWidth = '556px'
            })
        }
        if (document.documentElement.clientWidth > 576) {
            counter.style.top = '8.5%'
            portSlider.style.display = 'block'

            modalSlides.forEach((val, key) => {
                modalSlides[key].style.minWidth = '804px'
            })
        }
    })
    if (document.documentElement.clientWidth <= 576) {
        counter.style.top = '85%'
        portSlider.style.display = 'flex'

        modalSlides.forEach((val, key) => {
            modalSlides[key].style.minWidth = '556px'
        })
    }

    if (document.documentElement.clientWidth > 576) {
        counter.style.top = '8.5%'
    }

    countTotal.textContent = slideFrames.length - 10

    const numSlider = () => {
        if (document.documentElement.clientWidth <= 576) {
            portText.forEach((val, key) => {
                portText[key].style.display = 'none'
            })
            portText[countText].style.display = 'flex'
            portSlider.style.transform = `translateX(${num + '%'})`
        } else {
            portSlider.style.transform = `translateY(${num + 'px'})`
            portText.forEach((val, key) => {
                portText[key].style.display = 'none'
            })
            portText[countText].style.display = 'block'
        }
        countCurrent.textContent = count
    }

    const Init = () => {
        document.querySelector('#popup_portfolio_left').style.display = 'flex'
        document.querySelector('#popup_portfolio_right').style.display = 'flex'
        if (document.documentElement.clientWidth > 576) {
            document.querySelector('#popup_portfolio_left').style.top = '5%'
            document.querySelector('#popup_portfolio_right').style.top = '5%'
        } else {
            document.querySelector('#popup_portfolio_left').style.top = '50%'
            document.querySelector('#popup_portfolio_right').style.top = '50%'
        }
        if (document.documentElement.clientWidth <= 576) {
            if (num == -900) {
                document.querySelector('#popup_portfolio_right').style.display = 'none'
            }
            if (num == 0) {
                document.querySelector('#popup_portfolio_left').style.display = 'none'
            }
        } else {
            if (num == -5688) {
                document.querySelector('#popup_portfolio_right').style.display = 'none'
            }
            if (num == 0) {
                document.querySelector('#popup_portfolio_left').style.display = 'none'
            }
        }
    }

    slideFrames.forEach((btn, key) => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'visible'
            if (document.documentElement.clientWidth <= 576) {
                num = -100 * (key - 10)
            } else {
                num = -632 * (key - 10)
            }
            countText = 1 * (key - 10)
            count = 1 * (key - 9)
            numSlider()
            Init()
        })
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-portfolio')) {
            modal.style.visibility = 'hidden'
        }
        if (e.target.closest('#popup_portfolio_right')) {
            countText++
            count++
            if (document.documentElement.clientWidth <= 576) {
                num += -100
            } else {
                num += -632
            }
            numSlider()
            Init()
        }
        if (e.target.closest('#popup_portfolio_left')) {
            countText--
            count--
            if (document.documentElement.clientWidth <= 576) {
                num += 100
            } else {
                num += 632
            }
            numSlider()
            Init()
        }
    })
}

export default portfolioModal