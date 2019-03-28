

var hak=13,
    win=0,
    lose=0,
    correct=0,
    sel,
    userChoise,
    compGuess,
    compGuessArr=[],
    count=-1,
    word=[],
    wordTextReset=["-","-","-","-","-","-","-",],
    wordText=[],
    guesesText=[],
    gueses=[],
    trash=0,
    boo,
    boo2,
    play_pause=false,
    audios=["assets/Music/bee-gees.mp4","assets/Music/nirvana.mp4","assets/Music/outlaws.mp4","assets/Music/bon-jovi.mp4","assets/Music/rihanna.mp4","assets/Music/genesis.mp4"],
    guessList=[];
    var song = new Audio();

function randomise(begin,range){
    var trash;
    sel = Math.floor((Math.random()*range)+begin);
    for(var i=0; i!=1 ; trash++){ //infinite loop to chose proper number.
        if (sel>range){ // if number reach up to range, find another one
            sel = Math.floor((Math.random()*range)+begin);
        }
        else { // if number is proper and between range, go up to infinite loop
            i=1;
        }
    }
    trash=0;
    return sel;   
}    
    wordText[0] = document.getElementById("word-text0");
    wordText[1] = document.getElementById("word-text1");
    wordText[2] = document.getElementById("word-text2");
    wordText[3] = document.getElementById("word-text3");
    wordText[4] = document.getElementById("word-text4");
    wordText[5] = document.getElementById("word-text5");
    wordText[6] = document.getElementById("word-text6");


    guesesText[0]=document.getElementById("gueses-text0");
    guesesText[1]=document.getElementById("gueses-text1");
    guesesText[2]=document.getElementById("gueses-text2");
    guesesText[3]=document.getElementById("gueses-text3");
    guesesText[4]=document.getElementById("gueses-text4");
    guesesText[5]=document.getElementById("gueses-text5");
    guesesText[6]=document.getElementById("gueses-text6");
    guesesText[7]=document.getElementById("gueses-text7");
    guesesText[8]=document.getElementById("gueses-text8");
    guesesText[9]=document.getElementById("gueses-text9");
    guesesText[10]=document.getElementById("gueses-text10");
    guesesText[11]=document.getElementById("gueses-text11");
    guesesText[12]=document.getElementById("gueses-text12");


    var wintext = document.getElementById("win-text");
    var losetext = document.getElementById("lose-text");
    var haktext = document.getElementById("hak-text");
    //var guessListText = document.getElementById("guesses-text");
    

function textP(arrayText,arrayValue){
    for(var i=0; i<arrayValue.length ; i++){
        arrayText[i].textContent=arrayValue[i];
    }

}


function scan(array, value, adding){ 
    for(var i=0; i!=array.length+1; i++){
        if(i>0){
            if(array[i-1]===value){
                trash++;
                sel=i-1;
                adding[sel]=array[sel];
                boo=true;
                console.log("boo2 " + boo2);
                console.log("sel " + sel);
                console.log("trash " + trash);
            }
        }
    }
    trash=0;
}
function scan2(array,value){
    for(var i=0; i<array.length; i++){
            if(array[i]===value){
                return true;   
        }
    }
}

word=wordTextReset;
var mGroups = ["beegees" , "nirvana" , "outlaws" , "bonjovi" , "rihanna" , "genesis"];
compGuess = mGroups[(randomise(0,mGroups.length))];

//console.log("Groups Length " + mGroups.length);
console.log("First CompGuess " + compGuess);
//console.log("mGroups " + mGroups);
//console.log("CompGuess first letter " + compGuess.charAt(0));
//console.log("CompGuess second letter " + compGuess.charAt(1));
//console.log("CompGuess third letter " + compGuess.charAt(2));
//console.log("CompGuess forth letter " + compGuess.charAt(3));
//console.log("CompGuess fifth letter " + compGuess.charAt(4));
//console.log("CompGuess Sixth letter " + compGuess.charAt(5));

document.getElementById('play-pause').addEventListener('click', function () {

    if(play_pause){
        song.pause();
        document.getElementById("play-pause").src ="assets/images/play.png";
        play_pause=false;
    }else {
        song.play();
        document.getElementById("play-pause").src ="assets/images/pause.png";
        play_pause=true;
    }
    });


document.onkeyup = function(event) {

    count++;

    for(var i=0; i<7 ; i++){
        compGuessArr[i]=compGuess.charAt(i);
    } //compGuessArr is letter array. This for dissect all letter from a word and add an array.
    console.log("compGuessArr " + compGuessArr);
    
    if(hak===0){
        lose++;  
        hak=13; 
        word=["-","-","-","-","-","-","-"];
        compGuess = mGroups[(randomise(0,mGroups.length))];
        gueses=["-","-","-","-","-","-","-","-","-","-","-","-","-"];
        count=-1; 
    } // if letter guess right over, add one lose point.
    
    userChoise=event.key; // Putting key into a variable
    userChoise=userChoise.toLowerCase(); // in any upper key case.,
    if(scan2(gueses,userChoise)){
        alert("Use Another Letter");
        count--;
        boo2=false;
        console.log("--boo2 " + boo2);

    }else{
        gueses[count]=userChoise;
        boo2=true;
        console.log("--boo2 " + boo2);
    }

    
    
    console.log(userChoise);

    scan(compGuessArr,userChoise,word);

    console.log("word " + word);
    console.log("compGuessArr " + compGuessArr);

    if(!boo && hak!=0){
        if(boo2){hak--;}
        
        boo=false;
    }
    else { 
        
        if(boo && word[0]===compGuessArr[0]
                && word[1]===compGuessArr[1]
                && word[2]===compGuessArr[2]
                && word[3]===compGuessArr[3]
                && word[4]===compGuessArr[4]
                && word[5]===compGuessArr[5]
                && word[6]===compGuessArr[6]){
            win++;
            word=["-","-","-","-","-","-","-"];
            hak=13;
            gueses=["-","-","-","-","-","-","-","-","-","-","-","-","-"];
            count=-1;
            
                    
            if(compGuess==="beegees"){
                
                song.src = audios[0];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/bee-gees.jpg";
                document.getElementById("resultText").textContent="Bee - Gees"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;
            }
            else if(compGuess==="nirvana"){
                
                song.src = audios[1];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/nirvana.jpg";
                document.getElementById("resultText").textContent="Nirvana"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;
            }
            else if(compGuess==="outlaws"){
               
                song.src = audios[2];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/outlaws.jpg";
                document.getElementById("resultText").textContent="Outlaws"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;
            }
            else if(compGuess==="bonjovi"){
               
                song.src = audios[3];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/bon-jovi.jpg";
                document.getElementById("resultText").textContent="Bon - Jovi"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;;}
            else if(compGuess==="rihanna"){
               
                song.src = audios[4];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/rihanna.jpg";
                document.getElementById("resultText").textContent="Rihanna"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;;}
            else if(compGuess==="genesis"){
              
                song.src = audios[5];
                song.pause();
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/genesis.png";
                document.getElementById("resultText").textContent="Genesis"
                document.getElementById("play-pause").src ="assets/images/pause.png";
                play_pause=true;
            }
        
        
        }
        
        boo=false
    }
    
    textP(wordText,word);
    //wordText[0].textContent = word[0];
    //wordText[1].textContent = word[1];
    //wordText[2].textContent = word[2];
    //wordText[3].textContent = word[3];
    //wordText[4].textContent = word[4];
    //wordText[5].textContent = word[5];
    //wordText[6].textContent = word[6];

    textP(guesesText,gueses);
    //guesesText[0].textContent = gueses[0];
    //guesesText[1].textContent = gueses[1];
    //guesesText[2].textContent = gueses[2];
    //guesesText[3].textContent = gueses[3];
    //guesesText[4].textContent = gueses[4];
    //guesesText[5].textContent = gueses[5];
    //guesesText[6].textContent = gueses[6];
    //guesesText[7].textContent = gueses[7];
    //guesesText[8].textContent = gueses[8];
    //guesesText[9].textContent = gueses[9];
    //guesesText[10].textContent = gueses[10];
    //guesesText[11].textContent = gueses[11];
    //guesesText[12].textContent = gueses[12];


    wintext.textContent = win;
    losetext.textContent = lose;
    haktext.textContent = hak;
}

