export default function readMore() {
    let openBtnWrapper = document.querySelector('.object-description-sec__text-btn-wrapper')
    let openBtn = document.querySelector('.object-description-sec__text-btn')
    let textElement = document.querySelector('.object-description-sec__text')
    let textElementWrapper = document.querySelector('.object-description-sec__text-wrapper')

    let textHeight = textElement.offsetHeight

    if (textHeight <= 320) {
        openBtnWrapper.style.display = 'none'
    }
    else {
        let switchBtn = false

        openBtn.addEventListener('click', function () {
            switchBtn = !switchBtn

            if (switchBtn == true) {
                textElementWrapper.style.maxHeight = textHeight + 'px'
                openBtn.classList.add('activ')

            }
            else {
                textElementWrapper.style.maxHeight = 320 + 'px'
                openBtn.classList.remove('activ')

            }
        })
    }
}