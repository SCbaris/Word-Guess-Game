

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
    trash=0,
    boo,
    culla,
    audios=["assets/Music/bee-gees.mp4","assets/Music/nirvana.mp4","assets/Music/outlaws.mp4","assets/Music/bon-jovi.mp4","assets/Music/rihanna.mp4","assets/Music/genesis.mp4"],
    guessList=[];

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
    var wintext = document.getElementById("win-text");
    var losetext = document.getElementById("lose-text");
    var haktext = document.getElementById("hak-text");
    //var guessListText = document.getElementById("guesses-text");
    




function scan(array, value, adding){ 
    for(var i=0; i!=array.length+1; i++){
        if(i>0){
            if(array[i-1]===value){
                trash++;
                sel=i-1;
                adding[sel]=array[sel];
                boo=true;
                console.log("boo " + boo);
                console.log("sel " + sel);
                console.log("trash " + trash);
            }
        }
    }
    trash=0;
}

word=wordTextReset;
var mGroups = ["beegees" , "nirvana" , "outlaws" , "bonjovi" , "rihanna" , "genesis"];
compGuess = mGroups[(randomise(0,mGroups.length))];

console.log("Groups Length " + mGroups.length);
console.log("First CompGuess " + compGuess);
console.log("mGroups " + mGroups);
console.log("CompGuess first letter " + compGuess.charAt(0));
console.log("CompGuess second letter " + compGuess.charAt(1));
console.log("CompGuess third letter " + compGuess.charAt(2));
console.log("CompGuess forth letter " + compGuess.charAt(3));
console.log("CompGuess fifth letter " + compGuess.charAt(4));
console.log("CompGuess Sixth letter " + compGuess.charAt(5));




document.onkeyup = function(event) {

    count++;

    for(var i=0; i<7 ; i++){
        compGuessArr[i]=compGuess.charAt(i);
    } //compGuessArr is letter array. This for dissect all letter from a word and add an array.
    console.log("compGuessArr " + compGuessArr);
    
    if(hak===0){
        lose++;  
        hak=13; 
        word=["-","-","-","-","-","-","-",];
        compGuess = mGroups[(randomise(0,mGroups.length))]; 
    } // if letter guess right over, add one lose point.
    
    userChoise=event.key; // Putting key into a variable
    userChoise=userChoise.toLowerCase(); // in any upper key case.


    console.log(userChoise);

    scan(compGuessArr,userChoise,word);

    console.log("word " + word);
    console.log("compGuessArr " + compGuessArr);

    if(!boo && hak!=0){
        hak--;
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
            word=["-","-","-","-","-","-","-",];
            hak=13;
            
                    
            if(compGuess==="beegees"){
                var song = new Audio();
                song.src = audios[0];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/bee-gees.jpg";
                document.getElementById("resultText").textContent="Bee - Gees";}
            else if(compGuess==="nirvana"){
                var song = new Audio();
                song.src = audios[1];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/nirvana.jpg";
                document.getElementById("resultText").textContent="Nirvana";}
            else if(compGuess==="outlaws"){
                var song = new Audio();
                song.src = audios[2];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/outlaws.jpg";
                document.getElementById("resultText").textContent="Outlaws";}
            else if(compGuess==="bonjovi"){
                var song = new Audio();
                song.src = audios[3];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/bon-jovi.jpg";
                document.getElementById("resultText").textContent="Bon - Jovi";}
            else if(compGuess==="rihanna"){
                var song = new Audio();
                song.src = audios[4];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/rihanna.jpg";
                document.getElementById("resultText").textContent="Rihanna";}
            else if(compGuess==="genesis"){
                var song = new Audio();
                song.src = audios[5];
                song.play();
                compGuess = mGroups[(randomise(0,mGroups.length))];
                document.getElementById("imagHangMan").src ="assets/images/genesis.png";
                document.getElementById("resultText").textContent="Genesis";}
        
        
        }
        
        boo=false
    }
    
    




    
    //if(compGuess===userChoise){
        //win++;
        //compGuess = alphabet[(randomise(0,alphabet.length))];
        //hak=9;
        //guessList=[];
        //count=-1;
    //}
    //else if(count>0 && scan(guessList, userChoise)){ 
       // alert("Push Different Button!");
       // guessList[count]="Another Key Botton Pls";
       // count--;
    //}
    //else {
        //hak--;
        //if(hak==0){
           // hak=9;
            //lose++;
            //compGuess = alphabet[(randomise(0,alphabet.length))];
           // guessList=[];
            //count=-1;
        //}
    //}


    wordText[0].textContent = word[0];
    wordText[1].textContent = word[1];
    wordText[2].textContent = word[2];
    wordText[3].textContent = word[3];
    wordText[4].textContent = word[4];
    wordText[5].textContent = word[5];
    wordText[6].textContent = word[6];


    wintext.textContent = win;
    losetext.textContent = lose;
    haktext.textContent = hak;
    //guessListText.textContent = guessList;

    //console.log("userChoise " + userChoise);
    //console.log("compGuess " + compGuess);
    //console.log("win " + win);
    //console.log("loses " + lose);
    //console.log("hak " + hak);
    //console.log("Count " + count);
    //console.log("Guess List " + guessList);
    //console.log("scan " + scan(guessList, userChoise));
}

