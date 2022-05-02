const formula = () => {

    const itemActive = document.querySelectorAll('.formula-item')

    itemActive.forEach(function (item) {
        item.addEventListener('mouseover', function() {
            this.classList.add('active-item')
        })
        item.addEventListener("mouseout",function() {
            this.classList.remove('active-item')
        })
    })

}

export default formula   