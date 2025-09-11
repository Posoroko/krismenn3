import { requestAutoScroll } from './autoScroll.js';
import { populateAgenda } from './agenda.js';
import { checkBottomSectionVisibility } from './utils.js'
import { pageScrollContainer, bottomSection, body } from './domReferences.js';
import { config } from './config.js'
import { closeLoadingOverlay } from './loadingOverlay.js';


window.onload = function() {
    let vid = document.getElementById("introVideo");
    
    if (vid) {
        // Set playback rate
        vid.playbackRate = config.video.speedFactor; 

        // Explicitly start the video
        vid.play().catch(error => {
            console.log("Video play failed:", error);
            // Handle autoplay policy issues if needed
        });

        vid.addEventListener('timeupdate', () => {
            if (vid.currentTime >= 2 && vid.currentTime < 2.5) {
                vid.currentTime = 5.5;
            }
        });
    }
    
    
    closeLoadingOverlay()
    body.classList.add('loadedAndReady')

    pageScrollContainer.addEventListener('scroll', checkBottomSectionVisibility);
    requestAutoScroll(pageScrollContainer, bottomSection);
    populateAgenda();
};


