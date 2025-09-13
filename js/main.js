import { requestAutoScroll } from './autoScroll.js';
import { populateAgenda } from './agenda.js';
import { checkBottomSectionVisibility } from './utils.js'
import { pageScrollContainer, bottomSection, body } from './domReferences.js';
import { config } from './config.js'
import { closeLoadingOverlay } from './loadingOverlay.js';


window.onload = function() {
    
    this.setTimeout(startVidCloseLoadingOverlay, 1000)

    
};


function startVidCloseLoadingOverlay() {
    let vid = document.getElementById("introVideo");
    
    if (vid) {
        vid.playbackRate = config.video.speedFactor;

        vid.play().catch(error => {
            console.log("Video play failed:", error);
        });
            
        // Close the loading overlay once video can play
        closeLoadingOverlay();
        body.classList.add('loadedAndReady');

        pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
        requestAutoScroll(pageScrollContainer, bottomSection);
        populateAgenda();

    } else {
        // No video on this page, close overlay immediately
        closeLoadingOverlay();
        body.classList.add('loadedAndReady');
    }

    
    
}