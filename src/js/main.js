import "../scss/main.scss";

// import switchThemeColor from './localstaradge.js'
import { removeElementorStyle } from "./wpCustomScripts.js";

import swiperSlidersSettings from "./swiperSliders.js";

import fixedHeader from "./headerFixed.js";

import openCloseHeaderMobMeny from "./headerMobMeny.js";

import readMore from "./readMoreTextObject.js";

import changeMapSwitch from "./objectMapSwitch.js";

import {
  gallerySlider,
  featuresySlider,
  finishingSlider,
  simmilarSlider,
  simmilarSliderResizeBoxHeight,
} from "./objectSwiperSliders.js";

import { openFeaturesInfo } from "./objectFeaturesOpenBtn.js";

import readMoreReview from "./objectReviewReadMore.js";

import readMoreHome from "./readMoreHomeBtn.js";

import loadApart from "./loadListAparts.js";

import { simmilarSliderDevelopers } from "./developerSliders.js";

// import customSelect from './customSelect.js'

removeElementorStyle();

fixedHeader();

openCloseHeaderMobMeny();

swiperSlidersSettings();

readMore();

changeMapSwitch();

gallerySlider();

featuresySlider();

openFeaturesInfo();

finishingSlider();

readMoreReview();

simmilarSlider();

simmilarSliderResizeBoxHeight();

readMoreHome();

loadApart();

simmilarSliderDevelopers();


document.querySelector('.mapBtnTest').addEventListener('click', () => {
  document.querySelector('.map-objects-popup').style.display = 'block'
})

// async function serverRequest() {
//     try {
//         const response = await fetch('https://ecatalog-service.nmarket.pro/BasePro/?login=ssafonenko691_yandex_ru&password=4ZW5V9bdE2&regionGroupId=77')

//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

//         const xmlText = await response.text() // получаем XML как текст
//         console.log(xmlText)
//     } catch (error) {
//         console.error('Ошибка при запросе:', error)
//     }
// }

// serverRequest()

// switchThemeColor()
