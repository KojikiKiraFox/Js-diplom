const scroll = () => {
    const anchors = document.querySelectorAll('.popup-menu-nav__item > a[href*="#"], .button-footer > a[href*="#"]')
    let menuModal = document.querySelector('.popup-dialog-menu')

    anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        menuModal.style.marginRight = 0

        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    })

}
export default scroll