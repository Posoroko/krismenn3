export {
    closeLoadingOverlay
}

function closeLoadingOverlay() {

    const overlay = document.getElementById('introOverlay');
    const pageScrollContainer = document.getElementById('scrollContainer');

    setTimeout(() => {
        overlay.style.transition = 'opacity 0.6s';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
    }, 2000);
}