// main.js: Toggle introOverlay for development

// Create toggle button
const btn = document.createElement('button');
btn.textContent = 'Toggle Intro Overlay';
btn.style.position = 'fixed';
btn.style.top = '20px';
btn.style.right = '20px';
btn.style.zIndex = '9999';
btn.style.padding = '10px 18px';
btn.style.fontSize = '1rem';
btn.style.background = '#55463f';
btn.style.color = '#e6e2dc';
btn.style.border = 'none';
btn.style.borderRadius = '6px';
btn.style.cursor = 'pointer';
btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
btn.style.userSelect = 'none';

document.body.appendChild(btn);

btn.addEventListener('click', function() {
const overlay = document.getElementById('introOverlay');
if (overlay) {
    overlay.style.display = (overlay.style.display === 'none') ? '' : 'none';
}
});

// Fade out introOverlay after 2 seconds
setTimeout(function() {
  const overlay = document.getElementById('introOverlay');
  if (overlay) {
    overlay.style.transition = 'opacity 0.6s';
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 600);
  }
}, 2000);