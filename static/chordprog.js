const ids1=["","#p1-one","#p1-two","#p1-three","#p1-four"]
const ids2=["","#p2-one","#p2-two","#p2-three","#p2-four"]

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
    mediaElement1.addEventListener('play',function(){cycleNumerals(data.intervals1,1)});
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
    mediaElement2.addEventListener('play',function(){cycleNumerals(data.intervals2,2)});
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
    mediaElement3.addEventListener('play',function(){cycleNumerals(data.musicintervals1,1)});
    // mediaElement1.onplay=cycleNumerals(data.intervals1,1);

    audioCol3.appendChild(textElement3);
    audioCol3.appendChild(mediaElement3);

    audio3.insertBefore(audioCol3,audio3.firstChild);

    let audio4 = document.getElementsByClassName("prog-container-4")[0]

    // Audio column
    let audioCol4 = document.createElement('div');
    audioCol4.className = 'col-md-5 key-audio';

    textElement3 = document.createElement('p');
    textElement3.className = 'key-text';
    textElement3.innerHTML=data.music2;
    
    mediaElement4 = document.createElement('audio');
    mediaElement4.className= 'example4'
    mediaElement4.controls = true;
    mediaElement4.src = data.music2audio; // Set the source of the audio file
    mediaElement4.addEventListener('play',function(){cycleNumerals(data.musicintervals2,1)});
    // mediaElement1.onplay=cycleNumerals(data.intervals1,1);

    audioCol3.appendChild(textElement4);
    audioCol3.appendChild(mediaElement4);

    audio4.insertBefore(audioCol4,audio4.firstChild);
}

function cycleNumerals(interval,id){
    if (id==1){
        ids=ids1;
    }
    else{
        ids=ids2;
    }
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
})