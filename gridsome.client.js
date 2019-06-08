import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBed, faBath, faVectorSquare, faCrown, faBuilding, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faPhone, faBed, faBath, faVectorSquare, faCrown, faBuilding, faMapMarkedAlt);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
};