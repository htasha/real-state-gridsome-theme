import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBed, faBath, faVectorSquare, faCrown, faBuilding, faMapMarkedAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faPhone, faBed, faBath, faVectorSquare, faCrown, faBuilding, faMapMarkedAlt, faFacebookF, faInstagram, faWhatsapp, faEnvelope, faMapMarkerAlt);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
};