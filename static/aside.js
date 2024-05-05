document.addEventListener("DOMContentLoaded", function() {
  // Log the 'info' object to console for debugging
  console.log(info);

  if (info.title) {
    document.title = info.title;
  }

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

    previousButton.style.whiteSpace = 'nowrap';  
    previousButton.style.overflow = 'hidden';   
    previousButton.style.textOverflow = 'ellipsis';

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

});
