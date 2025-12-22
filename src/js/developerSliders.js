import 'swiper/css';

import Swiper from 'swiper/bundle';
import { Navigation, Pagination, FreeMode, Scrollbar } from 'swiper/modules';


let currentMobPaddingSlider = (+document.querySelector('.header-2025').offsetWidth - +document.querySelector('.header-2025__container').offsetWidth) / 2



function simmilarSliderDevelopers() {
    const gallerySlider = document.querySelector('.simmilar--dev-slider-swiper')

    if (gallerySlider) {
        const swiperDevelopers = new Swiper(".simmilar--dev-slider-swiper", {
            modules: [Navigation, Pagination, Scrollbar],
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: ".simmilar--dev-slider-swiper__next",
                prevEl: ".simmilar--dev-slider-swiper__prev",
            },
            breakpoints: {
                // when window width is >= 320px
                300: {
                    slidesPerView: 1,
                    spaceBetween: 0,

                    scrollbar: {
                        el: '.simmilar-swiper-scrollbar',
                    },
                    navigation: false,
                    loop: false,


                },
                // when window width is >= 320px

                // when window width is >= 320px
                780: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                // when window width is >= 480px
                1281: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                }
            }

        });

        if (swiperDevelopers.slides.length <= swiperDevelopers.params.slidesPerView) {
            document.querySelector(".simmilar--dev-slider-swiper__next").style.display = "none";
            document.querySelector(".simmilar--dev-slider-swiper__prev").style.display = "none";
        }

    }
}


function simmilarSliderResizeBoxHeight() {
    // Берём все элементы
    const elements = document.querySelectorAll('.simmilar-slider-swiper .object');
    if (elements?.length > 0) {
        // Находим максимальную высоту
        let maxHeight = 0;
        elements.forEach(el => {
            const height = el.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        // Задаём всем одинаковую высоту
        elements.forEach(el => {
            el.style.height = maxHeight + 'px';
        });
    }
}




export { simmilarSliderDevelopers, simmilarSliderResizeBoxHeight }