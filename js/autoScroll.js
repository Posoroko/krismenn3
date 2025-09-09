import { config } from './config.js'
import { appState } from './appState.js'
import { checkBottomSectionVisibility } from './utils.js'

export {
    scrollToElement,
    customDurationScrollToElement,
    requestAutoScroll
}

function scrollToElement(parent, child) {
    const childTop = child.offsetTop;
    
    parent.scrollTo({
        top: childTop,
        behavior: 'smooth'
    });
}

function customDurationScrollToElement(parent, child, duration = 3000) {
    console.log('smooth scrolling activated! Duration:', duration);
    
    const start = parent.scrollTop;
    const target = child.offsetTop;

    const distance = target - start;
    const startTime = performance.now();
    
    // Check if the parent has the snap class
    const hasSnapClass = parent.classList.contains('scrollSnapMandatory');
    
    // Remove snap class if it exists
    if (hasSnapClass) {
        parent.classList.remove('scrollSnapMandatory');
    }
    
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        parent.scrollTop = start + (distance * easeInOutCubic);
        
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else if(hasSnapClass){
            parent.classList.add('scrollSnapMandatory');
        }
    }
    
    requestAnimationFrame(scrollAnimation);
}

function requestAutoScroll(parent, child) {
    setTimeout(() => {
        if (!appState.userHasSeenBottomSection) {
            parent.removeEventListener('scroll', checkBottomSectionVisibility);
            customDurationScrollToElement(parent, child, config.autoScroll.duration)
        } else {
            console.log('User has already seen bottom section, not auto-scrolling');
        }
    }, config.autoScroll.delay);
}

