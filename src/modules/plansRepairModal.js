const repairModal = () => {
    const modal = document.querySelector('.popup-repair-types')
    const menuModal = document.querySelector('.popup-dialog-menu')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.no-overflow')) {
            modal.style.visibility = 'visible'
            menuModal.style.marginRight = 0
        }
        if (e.target.closest('.link-list-repair')) {
            modal.style.visibility = 'visible'
        }
    })



    document.addEventListener('click', (e) => {
        if (e.target.closest('.close') || e.target.classList.contains('popup-repair-types')) {
            modal.style.visibility = 'hidden'
        }
    })
}

export default repairModal