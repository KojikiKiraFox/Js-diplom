const repair = () => {
    const navList = document.querySelector('.nav-list-repair')
    const repairNavs = document.querySelectorAll('.repair-types-nav__item')
    const arrowRight = document.querySelector('#repair-types-arrow_right')
    const arrowLeft = document.querySelector('#repair-types-arrow_left')

    const slideCount = document.querySelector('.slider-counter-content__current')
    const slideCoutTotal = document.querySelector('.slider-counter-content__total')

    const slideItem = document.querySelectorAll('.types-repair1 > .repair-types-slider__slide')

    let count = 0

    slideCoutTotal.textContent = slideItem.length
    const prevSlide = (index, strClass) => {
        repairNavs[index].classList.remove(strClass)
    }

    const nextSlide = (index, strClass) => {
        repairNavs[index].classList.add(strClass)
    }

    repairNavs.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const elem = navList.querySelector('.active')
            elem.classList.remove('active')
            e.target.classList.add('active')
        })
    })
    
    arrowRight.addEventListener('click', () => {
        slideCount.textContent = count + 1
        count++
        if (count == slideCoutTotal.textContent) {
            count = 0
        }
    })

    arrowLeft.addEventListener('click', () => {

        count--
        if (count == -1) {
            count = slideCount.textContent
        }

        
    })
}

export default repair