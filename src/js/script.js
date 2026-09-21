console.log('JavaScript подключен');


import Swiper from 'swiper';
import 'swiper/css';


import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],


    slidesPerView: 1,
    spaceBetween: 20,

    loop: true,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },
});

