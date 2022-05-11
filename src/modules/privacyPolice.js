const privacyPolice = () => {
    const linkPrivacy = document.querySelectorAll('.link-privacy')
    const popupPrivacy = document.querySelector('.popup.popup-privacy')

    const openPrivacy = () =>{
    popupPrivacy.style.visibility = 'visible'
    }
    const closePrivacy = () =>{
    popupPrivacy.style.visibility = 'hidden'
    }

    linkPrivacy.forEach(e => {
    e.addEventListener('click', openPrivacy)
    });

    popupPrivacy.addEventListener('click', (e)=>{
    if (e.target.closest('.close.mobile-hide') || !e.target.closest('.popup-dialog.popup-dialog-privacy')) {
        closePrivacy()
    }
    })

}
export default privacyPolice