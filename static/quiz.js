function convertYouTubeLinkToEmbed(url) {
    if (url.includes("watch?v=")) {
        return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be")) {
        return url.replace("youtu.be", "www.youtube.com/embed/");
    }
    return url;  // Consider handling other cases or errors
}

function createAndAppendLink(question, audioUrl, radioOptions) {
    let row = document.createElement('div');
    row.className = 'row mb-3';

    // Audio column
    let audioCol = document.createElement('div');
    audioCol.className = 'col-md-5';
    
    if (audioUrl.includes("youtube.com") || audioUrl.includes("youtu.be")) {
            // Create iframe for YouTube video
            mediaElement = document.createElement('iframe');
            //mediaElement.width = "560";  // Set width (you can make this responsive as well)
            //mediaElement.height = "315"; // Set height
            mediaElement.src = convertYouTubeLinkToEmbed(audioUrl);
            mediaElement.frameBorder = "0";
            mediaElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            mediaElement.allowFullscreen = true;
        } else {
            // Create audio element for MP3
            mediaElement = document.createElement('audio');
            mediaElement.controls = true;
            //mediaElement.src = audioUrl; // Set the source of the audio file
            let source = document.createElement('source');
                source.src = audioUrl;
                source.type = 'audio/mpeg';
            mediaElement.appendChild(source);
        }

    
    audioCol.appendChild(mediaElement);
    

    row.appendChild(audioCol);

    // Radio buttons column
    let radioCol = document.createElement('div');
    radioCol.className = 'col-md-5';
    radioOptions.forEach((option, index) => {
        let formCheck = document.createElement('div');
        formCheck.className = 'form-check form-check-inline';

        let radioInput = document.createElement('input');
        radioInput.className = 'form-check-input';
        radioInput.type = 'radio';
        radioInput.name = `radioGroup${question.id}`;
        radioInput.id = `radio${question.id}-${index}`;
        radioInput.value = option.value;

        let radioLabel = document.createElement('label');
        radioLabel.className = 'form-check-label';
        radioLabel.htmlFor = `radio${question.id}-${index}`;
        radioLabel.textContent = option.label;

        formCheck.appendChild(radioInput);
        formCheck.appendChild(radioLabel);
        radioCol.appendChild(formCheck);
    });
    row.appendChild(radioCol);

    // Result column
    let resultCol = document.createElement('div');
    resultCol.className = 'col-md-2';
    resultCol.id = `result${question.id}`;  // Unique ID for the result column
    row.appendChild(resultCol);

    document.getElementById('question_list').appendChild(row);
}


function reveal_move_options() {
    let movementContainer = document.getElementById('movement');
        movementContainer.innerHTML = '';  // Clear existing content
    
    let row = document.createElement('div');
    row.className = 'row d-flex justify-content-between';
    
    // Previous button column
    let previousCol = document.createElement('div');
    previousCol.className = 'col-auto ms-auto';  // Taking half the row
    
    let previousButton = document.createElement('button');
    previousButton.textContent = question_data.previous_text;

    
    
    previousButton.onclick = function() {
            window.location.href = question_data.previous; // Redirect to the next quiz
        };
    previousCol.appendChild(previousButton);
    row.appendChild(previousCol);
    
 //   let spaceCol = document.createElement('div');
  //  spaceCol.className = 'col-md-10';  // Taking half the row
   // row.appendChild(spaceCol);

    // Next button column (You might not need the spaceCol if not used for anything specific)
    let nextCol = document.createElement('div');
    nextCol.className = 'col-auto me-auto';  // Taking the other half of the row
    let nextButton = document.createElement('button');
    nextButton.textContent = question_data.next_text;
    nextButton.onclick = function() {
            window.location.href = question_data.next; // Redirect to the next quiz
        };
    nextCol.appendChild(nextButton);
    row.appendChild(nextCol);

    document.getElementById('movement').appendChild(row);
}

function handleQuizSubmission() {
    document.getElementById('submitQuiz').addEventListener('click', function() {
        const questions = document.querySelectorAll('[name^="radioGroup"]');
        let allAnswered = true;
        
        console.log(quiz_data);
        
        questions.forEach(input => {
            const questionId = input.name.replace('radioGroup', '');
            const resultElement = document.getElementById(`result${questionId}`);
            resultElement.textContent = '';  // Clear previous feedback before setting new

            const selectedOption = document.querySelector(`input[name="${input.name}"]:checked`);

            if (!selectedOption) {
                resultElement.textContent = 'Please answer all questions.';
                resultElement.style.backgroundColor = 'rgb(242,158,56)'
                allAnswered = false;
            } else {
                const isCorrect = selectedOption.value === quiz_data[questionId].true_answer;
           
                quiz_data[questionId].user_answer = selectedOption.value;
                quiz_data[questionId].correct = isCorrect;
                resultElement.textContent = isCorrect ? 'Correct' : 'Incorrect';
                resultElement.style.backgroundColor = isCorrect ? '#75ba79' : '#f55853';
            }
        });

        if (!allAnswered) {
            console.log('Not all questions answered.');
        } else {
            console.log('All questions answered, and results displayed.');
            sendResultsToServer(quiz_data);
            reveal_move_options();
        }
    });
}

function sendResultsToServer(results) {
    fetch('/update-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(results)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Update successful:', data);
    })
    .catch((error) => {
        console.error('Update error:', error);
    });
}


$(document).ready(function(){
    // Ensure the quiz_data is an array or object as expected
    Object.keys(quiz_data).forEach(key => {
        let question = quiz_data[key];
        if (question) {
            createAndAppendLink(
                {id: key, title: "Question " + key},
                question.media,
                [{label: question_data.option_1, value: question_data.option_1}, {label: question_data.option_2, value: question_data.option_2}]
            );
        }
    });
    
    $("#submit-record").click(submitAnswers);
    
    handleQuizSubmission();
});

function submitAnswers() {
    // Implement submission logic here
    console.log("Submit answers clicked.");
}
