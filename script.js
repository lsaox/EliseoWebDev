77181

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video-background video');
  if (!video) return;

  video.play().catch(() => {
    // Autoplay failed, wait for user interaction
    const playOnUserGesture = () => {
      video.play();
      window.removeEventListener('click', playOnUserGesture);
    };
    window.addEventListener('click', playOnUserGesture);
  });
});