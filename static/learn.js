document.addEventListener("DOMContentLoaded", function() {
  // Log info object to console for debugging
  console.log(info);

  // Dynamically set document title
  document.title = info.title;


  // Function to create and append the navigation buttons
  function reveal_move_options() {
    let movementContainer = document.getElementById('movement');
    movementContainer.innerHTML = '';  // Clear existing content
    
    let row = document.createElement('div');
    row.className = 'row d-flex justify-content-between';
    row.style.marginTop = '10px'; // Add spacing

    // Previous button column
    let previousCol = document.createElement('div');
    previousCol.className = 'col-auto ms-auto';

    let previousButton = document.createElement('button');
    previousButton.textContent = info.previousText;
    previousButton.style.whiteSpace = 'nowrap';  // Prevent text wrapping
    previousButton.style.overflow = 'hidden';    // Hide overflow text
    previousButton.style.textOverflow = 'ellipsis';  // Show ellipsis if text overflows
    previousButton.onclick = function() {
        window.location.href = info.previous; // Redirect to previous page
    };
    previousCol.appendChild(previousButton);
    row.appendChild(previousCol);
    
    // let spaceCol = document.createElement('div');
    // spaceCol.className = 'col-md-10';  // Spacer column
    // row.appendChild(spaceCol);

    // Next button column
    let nextCol = document.createElement('div');
    nextCol.className = 'col-auto me-auto'; 

    let nextButton = document.createElement('button');
    nextButton.textContent = info.nextText;
    nextButton.style.whiteSpace = 'nowrap';
    nextButton.style.overflow = 'hidden';
    nextButton.style.textOverflow = 'ellipsis';
    nextButton.onclick = function() {
        window.location.href = info.next; // Redirect to the next page
    };
    nextCol.appendChild(nextButton);
    row.appendChild(nextCol);

    movementContainer.appendChild(row);
  }

  // Call the function to setup navigation buttons
  reveal_move_options();



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