document.addEventListener("DOMContentLoaded", function() {
  // Log info object to console for debugging
  console.log(info);

  // Dynamically set document title
  document.title = info.title;

  // Get all audio elements and images on the page
 // Get all audio elements
  var audioElements = document.querySelectorAll('audio');

  // Loop through all audio elements to make sure they can be played
  audioElements.forEach(function(audio, index) {
    // Load the audio file explicitly
    audio.load();

    // Add event listeners for play and error events
    audio.addEventListener('play', function() {
      console.log('Audio ' + (index + 1) + ' is playing.');
    });
    audio.addEventListener('error', function(e) {
      console.error('Error occurred while loading audio ' + (index + 1) + ':', e);
    });
  });

  // Get all image elements
  var imageElements = document.querySelectorAll('img');

  // Loop through all image elements to confirm they are loaded
  imageElements.forEach(function(img, index) {
    // Add event listeners to check if images are loaded
    img.addEventListener('load', function() {
      console.log('Image ' + (index + 1) + ' is loaded.');
    });
    img.addEventListener('error', function(e) {
      console.error('Error occurred while loading image ' + (index + 1) + ':', e);
    });
  });
  
});
