const portfolioModal = () => {
    const slideFrames = document.querySelectorAll('.portfolio-slider__slide-frame')
    const modal = document.querySelector('.popup-portfolio')
    const portText = document.querySelectorAll('.popup-portfolio-text')
    const portSlider = document.querySelector('.popup-portfolio-slider')
    const counter = document.querySelector('#popup-portfolio-counter')
    const countTotal = counter.querySelector('.slider-counter-content__total')
    const countCurrent = counter.querySelector('.slider-counter-content__current')

    let num = 0
    let count = 1

    portSlider.style.transition = 'transform 0.5s'
    counter.style.top = '8.5%'
    countTotal.textContent = slideFrames.length - 10

    const numSlider = () => {
        portSlider.style.transform = `translateY(${num + 'px'})`
        countCurrent.textContent = count
    }

    const Init = () => {
        document.querySelector('#popup_portfolio_left').style.display = 'flex'
        document.querySelector('#popup_portfolio_right').style.display = 'flex'
        document.querySelector('#popup_portfolio_left').style.top = '5%'
        document.querySelector('#popup_portfolio_right').style.top = '5%'
        if (num == -5688) {
            document.querySelector('#popup_portfolio_right').style.display = 'none'
        }
        if (num == 0) {
            document.querySelector('#popup_portfolio_left').style.display = 'none'
        }
    }

    slideFrames.forEach((btn, key) => {
        btn.addEventListener('click', () => {
            modal.style.visibility = 'visible'
            num = -632 * (key - 10)
            count = 1 * (key - 9)
            numSlider()
            Init()
        })
    })
    
    portText.forEach((val, key) => {
        portText[key].style.display = 'block'
    })


    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-portfolio')) {
            modal.style.visibility = 'hidden'
        }
        if (e.target.closest('#popup_portfolio_right')) {
            count++
            num += -632
            numSlider()
            Init()
        }
        if (e.target.closest('#popup_portfolio_left')) {
            count--
            num += 632
            numSlider()
            Init()
        }
    })
}
export default portfolioModal