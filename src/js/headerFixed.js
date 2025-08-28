export default function fixedHeader() {
    window.addEventListener('scroll', () => {

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const header2025 = document.querySelector('.header-2025');

        if (scrollTop > 50) {
            header2025?.classList.add('header-2025--fixed');
        } else {
            header2025?.classList.remove('header-2025--fixed');
        }
    });
}