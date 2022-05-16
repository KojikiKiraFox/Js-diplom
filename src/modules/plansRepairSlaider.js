const repairSlaider = () => {
    const navList = document.querySelector('.nav-list-repair')
    const repairNavs = document.querySelectorAll('.repair-types-nav__item')
    const slideCount = document.querySelector('.slider-counter-content__current')
    const slideTotal = document.querySelector('.slider-counter-content__total')
    const repairSlides1 = document.querySelector('.types-repair1')
    const repairSlides2 = document.querySelector('.types-repair2')
    const repairSlides3 = document.querySelector('.types-repair3')
    const repairSlides4 = document.querySelector('.types-repair4')
    const repairSlides5 = document.querySelector('.types-repair5')
    let numSlides = repairSlides1
    let count = 1
    let indexSlaid = 0
    let adapSlaid = 0
    slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length

    repairNavs.forEach((btn, key) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const elem = navList.querySelector('.active')
            elem.classList.remove('active')
            e.target.classList.add('active')
            slideOff()
            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}
            slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length
            slideOn()
            slideCount.textContent = 1
            indexSlaid = 0
            count = 1
        })
    })

    const slideOff = () => {
        numSlides.style.display = 'none'
        numSlides.style.transform = 'translateY(0px)'
    }

    const slideOn = () => {
        numSlides.style.display = 'block'
    }

    const arrowInit = () => {
        document.querySelector('#nav-arrow-repair-right_base').style.display = 'flex'
        document.querySelector('#nav-arrow-repair-left_base').style.display = 'flex'
        if (adapSlaid == -680) {
            document.querySelector('#nav-arrow-repair-right_base').style.display = 'none'
        }
        if (adapSlaid == 0) {
            document.querySelector('#nav-arrow-repair-left_base').style.display = 'none'
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('#nav-arrow-repair-right_base')) {
            adapSlaid += -340
            document.querySelector('.nav-list-repair').style.transform = `translateX(${adapSlaid + 'px'})`
            arrowInit()
        }
        if (e.target.closest('#nav-arrow-repair-left_base')) {
            adapSlaid += 340
            document.querySelector('.nav-list-repair').style.transform = `translateX(${adapSlaid + 'px'})`
            arrowInit()
        }
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('#repair-types-arrow_right')) {
            count++
            indexSlaid += -547
            if (count > slideTotal.textContent) {
                count = 5
                return
            }
            slideCount.textContent = count
            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`
            numSlides.style.display = 'block'
        }

        if (e.target.closest('#repair-types-arrow_left')) {
            count--
            indexSlaid += 547
            if (count < 1) {
                count = 1
                return
            }
            slideCount.textContent = count
            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`
        }
    })
    arrowInit()
}

export default repairSlaider