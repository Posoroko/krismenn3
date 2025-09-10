import { requestAutoScroll } from './autoScroll.js';
import { populateAgenda } from './agenda.js';
import { checkBottomSectionVisibility } from './utils.js'
import { pageScrollContainer, bottomSection } from './domReferences.js';
import { config } from './config.js'


window.onload = function() {

    let vid = document.getElementById("introVideo");
    vid.playbackRate = config.video.speedFactor; 

    populateAgenda();
    // closeLoadingOverlay()
    pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
    requestAutoScroll(pageScrollContainer, bottomSection);
};


