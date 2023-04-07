'use strict'

import selectClub from './modules/clubSelect';
import openModals from './modules/openModals';
import topSlider from './modules/topSlider';
import checkAllInputs from './modules/checkAllInputs';
import sendForms from './modules/sendForms';

selectClub();
openModals();
topSlider();
checkAllInputs();
sendForms('banner-form');
sendForms('form1');
sendForms('card_order');