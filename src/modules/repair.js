const repair = () => {

    const itemActive = document.querySelectorAll('.repair-types-nav__item')

    itemActive.forEach(function (item) {
        item.addEventListener('click', function() {
            this.classList.toggle('active')
        })
        
    })
}

export default repair