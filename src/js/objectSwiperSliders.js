import 'swiper/css';

import Swiper from 'swiper/bundle';
import { Navigation, Pagination, FreeMode, Scrollbar } from 'swiper/modules';

let currentMobPaddingSlider = (+document.querySelector('.header-2025').offsetWidth - +document.querySelector('.header-2025__container').offsetWidth) / 2

console.log(currentMobPaddingSlider, document.querySelector('.header-2025').offsetWidth)

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
                    slidesPerView: 3,
                    spaceBetween: 15,

                    // centeredSlides: true
                },
                // when window width is >= 320px

                // when window width is >= 320px
                780: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
                // when window width is >= 480px
                1281: {
                    slidesPerView: 3,
                    spaceBetween: 45,
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
            modules: [Navigation, Pagination, FreeMode, Scrollbar],
            slidesPerView: 5,
            spaceBetween: 20,
            speed: 500,


            navigation: {
                nextEl: ".features-slider-swiper__next",
                prevEl: ".features-slider-swiper__prev",
            },




            // pagination: {
            //     el: ".features-swiper-pagination",
            //     clickable: true,
            // },
            breakpoints: {
                // when window width is >= 320px
                300: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,

                    scrollbar: {
                        el: '.features-swiper-scrollbar',
                    },
                    navigation: false,
                    loop: false,


                    slidesOffsetBefore: currentMobPaddingSlider,
                    slidesOffsetAfter: currentMobPaddingSlider,
                    // centeredSlides: true
                },
                // when window width is >= 320px

                // when window width is >= 320px
                780: {
                    slidesPerView: 3,
                    spaceBetween: 20, loop: true,

                },
                // when window width is >= 480px
                1281: {
                    slidesPerView: 4,
                    spaceBetween: 20, loop: true,

                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 5,
                    spaceBetween: 20, loop: true,

                }
            }

        });
    }
}



function finishingSlider() {
    const gallerySlider = document.querySelector('.finishing-slider-swiper')

    if (gallerySlider) {
        const swiperGallery = new Swiper(".finishing-slider-swiper", {
            modules: [Navigation, Pagination, FreeMode, Scrollbar],
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
                    slidesPerView: 'auto',
                    spaceBetween: 15,

                    scrollbar: {
                        el: '.finishing-swiper-scrollbar',
                    },
                    navigation: false,
                    loop: false,


                    slidesOffsetBefore: currentMobPaddingSlider,
                    slidesOffsetAfter: currentMobPaddingSlider,

                    // centeredSlides: true
                },
                // when window width is >= 320px

                // when window width is >= 320px
                780: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    loop: true,
                },
                // when window width is >= 480px
                1281: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: true,
                },
                // when window width is >= 640px
                1540: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    loop: true,
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
            modules: [Navigation, Pagination, Scrollbar],
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
                    slidesPerView: 'auto',
                    spaceBetween: 15,

                    scrollbar: {
                        el: '.simmilar-swiper-scrollbar',
                    },
                    navigation: false,
                    loop: false,


                    slidesOffsetBefore: currentMobPaddingSlider,
                    slidesOffsetAfter: currentMobPaddingSlider,
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




export { gallerySlider, featuresySlider, finishingSlider, simmilarSlider, simmilarSliderResizeBoxHeight }