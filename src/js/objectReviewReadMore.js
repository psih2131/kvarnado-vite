export default function readMoreReview() {

    const allReviews = document.querySelectorAll('.user-comment')

    if (allReviews?.length > 0) {

        allReviews.forEach((element) => {
            let openBtn = element.querySelector('.user-comment__read-more-btn')
            let textElement = element.querySelector('.user-comment__text')
            let textElementWrapper = element.querySelector('.user-comment__text-wrapper')
            let textHeight = textElement.offsetHeight

            if (textHeight <= 70) {
                openBtn.style.display = 'none'
            }
            else {
                let switchBtn = false

                textElementWrapper.classList.add('have-read-more')

                openBtn.addEventListener('click', function () {
                    switchBtn = !switchBtn

                    if (switchBtn == true) {
                        textElementWrapper.style.maxHeight = textHeight + 'px'
                        openBtn.classList.add('activ')

                    }
                    else {
                        textElementWrapper.style.maxHeight = 70 + 'px'
                        openBtn.classList.remove('activ')

                    }
                })
            }


        })

    }

}