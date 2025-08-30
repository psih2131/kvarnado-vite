import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function gallerySlider() {

    const gallerySlider = document.querySelector('.gallery-slider-swiper')

    if (gallerySlider) {
        const swiperGallery = new Swiper(".gallery-slider-swiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1000,
            loop: true,

            navigation: {
                nextEl: ".gallery-slider-swiper__next",
                prevEl: ".gallery-slider-swiper__prev",
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
                    spaceBetween: 45,
                }
            }

        });
    }
}

function featuresySlider() {
    const gallerySlider = document.querySelector('.features-slider-swiper')

    if (gallerySlider) {
        const swiperGallery = new Swiper(".features-slider-swiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: ".features-slider-swiper__next",
                prevEl: ".features-slider-swiper__prev",
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
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            }

        });
    }
}



function finishingSlider() {
    const gallerySlider = document.querySelector('.finishing-slider-swiper')

    if (gallerySlider) {
        const swiperGallery = new Swiper(".finishing-slider-swiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: ".finishing-slider-swiper__next",
                prevEl: ".finishing-slider-swiper__prev",
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
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }

        });

        if (swiperGallery.slides.length <= swiperGallery.params.slidesPerView) {
            document.querySelector(".finishing-slider-swiper__next").style.display = "none";
            document.querySelector(".finishing-slider-swiper__prev").style.display = "none";
        }

    }
}




function simmilarSlider() {
    const gallerySlider = document.querySelector('.simmilar-slider-swiper')

    if (gallerySlider) {
        const swiperGallery = new Swiper(".simmilar-slider-swiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: ".simmilar-slider-swiper__next",
                prevEl: ".simmilar-slider-swiper__prev",
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
                    spaceBetween: 20,
                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }

        });

        if (swiperGallery.slides.length <= swiperGallery.params.slidesPerView) {
            document.querySelector(".simmilar-slider-swiper__next").style.display = "none";
            document.querySelector(".simmilar-slider-swiper__prev").style.display = "none";
        }

    }
}



export { gallerySlider, featuresySlider, finishingSlider, simmilarSlider }