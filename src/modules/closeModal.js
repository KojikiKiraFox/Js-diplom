const closeModal = () => {
    const popup = document.querySelectorAll('.popup');


    popup.forEach(item => item.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('close') || !target.closest('.popup-dialog')) {
            if (!target.closest('.popup-arrow') && !target.closest('.popup-dialog-transparency')) { 
                item.classList.toggle('visible');
            }
        }
    }));
}

export default closeModal