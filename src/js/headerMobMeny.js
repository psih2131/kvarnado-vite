export default function openCloseHeaderMobMeny() {
    const burgerButton = document.querySelector('.header-2025__burger')
    const headerElement = document.querySelector('.header-2025')

    burgerButton.addEventListener('click', () => {
        headerElement.classList.toggle('header-2025--mob-meny-activ')
    })
}