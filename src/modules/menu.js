const menu = () => {
    let menu = document.querySelector('.menu')
    let menuModal = document.querySelector('.popup-dialog-menu')

    menu.addEventListener('click', () => {
        menuModal.style.marginRight = 645 + 'px'
    })
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-menu') || e.target.classList.contains('.popup-menu > .row')){
            menuModal.style.marginRight = 0
        }
    })
}

export default menu 