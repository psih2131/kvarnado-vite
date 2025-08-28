import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export default function swiperSlidersSettings() {
    const swiper = new Swiper(".post-slider-swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            300: {
                slidesPerView: 1,
                spaceBetween: 0,

                // centeredSlides: true
            },
            // when window width is >= 320px

            // when window width is >= 320px
            780: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            1281: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            1540: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }

    });
}