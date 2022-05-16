const menu = () => {
    const menuOpen = document.querySelector('.menu')
    const menuModal = document.querySelector('.popup-dialog-menu')

    menuOpen.addEventListener('click', () => {
        menuModal.style.marginRight = 645 + 'px'
    })

    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-menu')) {
            menuModal.style.marginRight = 0
        }
    })
}

export default menu