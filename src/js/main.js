import moduls from './modules/moduls';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';


    moduls();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
});