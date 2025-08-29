export default function changeMapSwitch() {
    const btns = document.querySelectorAll('.object-location-sec__switch-element')

    if (btns?.length) {
        const locationData = document.querySelector('.object-location-sec__data')
        const mapFiltrs = document.querySelector('.map-filtrs')

        locationData.style.display = 'block'
        mapFiltrs.style.display = 'none'

        btns[0].addEventListener('click', () => {
            btns[0].classList.add('activ')
            btns[1].classList.remove('activ')

            locationData.style.display = 'block'
            mapFiltrs.style.display = 'none'
        })

        btns[1].addEventListener('click', () => {
            btns[1].classList.add('activ')
            btns[0].classList.remove('activ')

            locationData.style.display = 'none'
            mapFiltrs.style.display = 'block'
        })
    }
}