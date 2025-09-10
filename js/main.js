import { requestAutoScroll } from './autoScroll.js';
import { populateAgenda } from './agenda.js';
import { checkBottomSectionVisibility } from './utils.js'
import { pageScrollContainer, bottomSection } from './domReferences.js';
import { config } from './config.js'


window.onload = function() {

    let vid = document.getElementById("introVideo");
    

    if (vid) {
        vid.playbackRate = config.video.speedFactor; 

        vid.addEventListener('timeupdate', () => {

        if (vid.currentTime >= 2 && vid.currentTime < 2.5) {
            vid.currentTime = 5.5;
        }
        });
    }

    populateAgenda();
    // closeLoadingOverlay()
    pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
    requestAutoScroll(pageScrollContainer, bottomSection);
};


