function openFeaturesInfo() {
    const featuresList = document.querySelectorAll('.features-slider-swiper__slide-wrapper')

    if (featuresList?.length > 0) {
        console.log('gg', featuresList.length)


        featuresList.forEach((element) => {
            let btn = element.querySelector('.features-slider-swiper__slide-btn')

            btn.addEventListener('click', () => {
                element.classList.toggle('activ')
            })
        })
    }
}

export { openFeaturesInfo }