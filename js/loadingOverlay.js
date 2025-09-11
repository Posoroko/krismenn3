export {
    closeLoadingOverlay
}

function closeLoadingOverlay() {

    const overlay = document.getElementById('introOverlay');

    setTimeout(() => {
        overlay.style.transition = 'opacity 0.6s';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
    }, 20);
}