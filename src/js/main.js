import '../scss/main.scss'

// import switchThemeColor from './localstaradge.js'
import { removeElementorStyle } from './wpCustomScripts.js'

import swiperSlidersSettings from './swiperSliders.js'

import fixedHeader from './headerFixed.js'

import openCloseHeaderMobMeny from './headerMobMeny.js'

import readMore from './readMoreTextObject.js'

import changeMapSwitch from './objectMapSwitch.js'

import { gallerySlider, featuresySlider, finishingSlider, simmilarSlider, simmilarSliderResizeBoxHeight } from './objectSwiperSliders.js'

import { openFeaturesInfo } from './objectFeaturesOpenBtn.js'

import readMoreReview from './objectReviewReadMore.js'

import readMoreHome from './readMoreHomeBtn.js'


removeElementorStyle()

fixedHeader()

openCloseHeaderMobMeny()

swiperSlidersSettings()

readMore()

changeMapSwitch()

gallerySlider()

featuresySlider()

openFeaturesInfo()

finishingSlider()

readMoreReview()

simmilarSlider()

simmilarSliderResizeBoxHeight()

readMoreHome()
// switchThemeColor()


