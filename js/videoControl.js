// Simple script to make video skip from 10 seconds to 15 seconds
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('introVideo');
  
  if (video) {
    video.addEventListener('timeupdate', () => {
      // When video reaches 10 seconds, jump to 15 seconds
      if (video.currentTime >= 10 && video.currentTime < 10.5) {
        video.currentTime = 15;
      }
    });
  }
});
