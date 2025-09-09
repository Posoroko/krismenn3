import { appState } from './appState.js'
import { bottomSection, pageScrollContainer } from './domReferences.js'

export {
    checkBottomSectionVisibility,
    isVisible
}



function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
};

function checkBottomSectionVisibility() {
    console.log('scroll detected')

    if (isVisible(bottomSection)) {
        appState.userHasSeenBottomSection = true;
        console.log('User has seen bottom section');
        pageScrollContainer.removeEventListener('scroll', checkBottomSectionVisibility);
    }
};
