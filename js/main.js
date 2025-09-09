import { requestAutoScroll } from './autoScroll.js';
import { populateAgenda } from './agenda.js';
import { checkBottomSectionVisibility } from './utils.js'
import { pageScrollContainer, bottomSection } from './domReferences.js';
import { closeLoadingOverlay } from './loadingOverlay.js';


window.onload = function() {

    let vid = document.getElementById("introVideo");
    vid.playbackRate = 0.8; 

    populateAgenda();
    // closeLoadingOverlay()
    pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
    requestAutoScroll(pageScrollContainer, bottomSection);
};


