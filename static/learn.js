document.addEventListener("DOMContentLoaded", function() {
  function populateData(data) {
    const titleElement = document.querySelector('.learn-title');
    const pointsElement = document.querySelector('.points');
    const subtopics = [document.querySelector('.subtopic1'), document.querySelector('.subtopic2')];
    const previousButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');

    // Set title
    titleElement.textContent = data.title;

    // Set points
    pointsElement.innerHTML = `<li>${data.point1}</li><li>${data.point2}</li>`;

    // Set subtopics
    subtopics.forEach((element, index) => {
      const subtopicData = data[`subtopic${index + 1}`];
      element.innerHTML = `<h3>${subtopicData.topic}</h3>`;

      // Add images
      subtopicData.imgs.forEach(img => {
        element.innerHTML += `<img src="${img}" alt="Image for ${subtopicData.topic}">`;
      });

      // Add audio
      for (const [key, value] of Object.entries(subtopicData.audio)) {
        element.innerHTML += `<audio controls><source src="${value}" type="audio/mpeg">${key}</audio>`;
      }
    });

    // Set previous and next buttons
    previousButton.setAttribute('href', data.previous);
    nextButton.setAttribute('href', data.next);
  }

  if (window.data) {
    populateData(window.data);
  } else {
    console.error('No data available');
  }
});
