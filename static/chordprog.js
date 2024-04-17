const ids1=["#p1-four","#p1-one","#p1-two","#p1-three","#p1-four",""]
const ids2=["#p2-four","#p2-one","#p2-two","#p2-three","#p2-four",""]
const ids3=["#p3-four","#p3-one","#p3-two","#p3-three","#p3-four",""]
const ids4=["#p4-four","#p4-one","#p4-two","#p4-three","#p4-four",""]

function addAudios(){
    let audio1 = document.getElementsByClassName("prog-container-1")[0]

    // Audio column
    let audioCol1 = document.createElement('div');
    audioCol1.className = 'col-md-5 key-audio';

    textElement1 = document.createElement('p');
    textElement1.className = 'key-text';
    textElement1.innerHTML=data.key1;
    
    mediaElement1 = document.createElement('audio');
    mediaElement1.className= 'example1'
    mediaElement1.controls = true;
    mediaElement1.src = data.key1audio; // Set the source of the audio file
    mediaElement1.addEventListener('play',function(){cycleNumerals(data.intervals1,ids1)});
    // mediaElement1.onplay=cycleNumerals(data.intervals1,1);

    audioCol1.appendChild(textElement1);
    audioCol1.appendChild(mediaElement1);

    audio1.insertBefore(audioCol1,audio1.firstChild);

    let audio2 = document.getElementsByClassName("prog-container-2")[0]

    // Audio column
    let audioCol2 = document.createElement('div');
    audioCol2.className = 'col-md-5 key-audio';

    textElement2 = document.createElement('p');
    textElement2.className = 'key-text';
    textElement2.innerHTML=data.key2;
    
    mediaElement2 = document.createElement('audio');
    mediaElement2.className= 'example2'
    mediaElement2.controls = true;
    mediaElement2.src = data.key2audio; // Set the source of the audio file
    mediaElement2.addEventListener('play',function(){cycleNumerals(data.intervals2,ids2)});
    // mediaElement2.onplay=cycleNumerals(data.intervals2,2);

    audioCol2.appendChild(textElement2);
    audioCol2.appendChild(mediaElement2);

    audio2.insertBefore(audioCol2,audio2.firstChild);
}

function addMusic(){
    let audio3 = document.getElementsByClassName("prog-container-3")[0]

    // Audio column
    let audioCol3 = document.createElement('div');
    audioCol3.className = 'col-md-5 key-audio';

    textElement3 = document.createElement('p');
    textElement3.className = 'key-text';
    textElement3.innerHTML=data.music1;
    
    mediaElement3 = document.createElement('audio');
    mediaElement3.className= 'example3'
    mediaElement3.controls = true;
    mediaElement3.src = data.music1audio; // Set the source of the audio file
    mediaElement3.addEventListener('play',function(){cycleNumerals(data.music1intervals,ids3)});
    // mediaElement1.onplay=cycleNumerals(data.intervals1,1);

    audioCol3.appendChild(textElement3);
    audioCol3.appendChild(mediaElement3);

    audio3.insertBefore(audioCol3,audio3.firstChild);

    let audio4 = document.getElementsByClassName("prog-container-4")[0]

    // Audio column
    let audioCol4 = document.createElement('div');
    audioCol4.className = 'col-md-5 key-audio';

    textElement4 = document.createElement('p');
    textElement4.className = 'key-text';
    textElement4.innerHTML=data.music2;
    
    mediaElement4 = document.createElement('audio');
    mediaElement4.className= 'example4'
    mediaElement4.controls = true;
    mediaElement4.src = data.music2audio; // Set the source of the audio file
    mediaElement4.addEventListener('play',function(){cycleNumerals(data.music2intervals,ids4)});
    // mediaElement1.onplay=cycleNumerals(data.intervals1,1);

    audioCol4.appendChild(textElement4);
    audioCol4.appendChild(mediaElement4);

    audio4.insertBefore(audioCol4,audio4.firstChild);
}

function reveal_move_options() {
    let movementContainer = document.getElementById('movement');
        movementContainer.innerHTML = '';  // Clear existing content
    
    let row = document.createElement('div');
    row.className = 'row mb-3';
    
    // Previous button column
    let previousCol = document.createElement('div');
    previousCol.className = 'col-md-1';  // Taking half the row
    let previousButton = document.createElement('button');
    previousButton.textContent = data.previousText;
    previousButton.onclick = function() {
            window.location.href = data.previousPage; // Redirect to the next quiz
        };
    previousCol.appendChild(previousButton);
    row.appendChild(previousCol);
    
    let spaceCol = document.createElement('div');
    spaceCol.className = 'col-md-10';  // Taking half the row
    row.appendChild(spaceCol);

    // Next button column (You might not need the spaceCol if not used for anything specific)
    let nextCol = document.createElement('div');
    nextCol.className = 'col-md-1';  // Taking the other half of the row
    let nextButton = document.createElement('button');
    nextButton.textContent = data.nextText;
    nextButton.onclick = function() {
            window.location.href = data.nextPage; // Redirect to the next quiz
        };
    nextCol.appendChild(nextButton);
    row.appendChild(nextCol);

    document.getElementById('movement').appendChild(row);
}

function cycleNumerals(interval,ids){
    for (let counter=0; counter<interval.length; counter++){
        setTimeout(() => {
            changeColor(ids[counter],ids[counter+1])
            },interval[counter]);
    }
}

function changeColor(id_old,id_new){
    $( id_new ).addClass( "highlight-num" );
    $( id_old ).removeClass( "highlight-num" );
}

$(document).ready(function(){
    addAudios();
    addMusic();
    reveal_move_options();
})