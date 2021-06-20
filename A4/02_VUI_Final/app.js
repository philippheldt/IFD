const btn = document.querySelector('.talk');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const verlauf = document.querySelector('.verlauf');
const line = document.getElementById('video1');
const sound = document.getElementById('sound1');
const hint1 = document.getElementById('hint-1');
const hint2 = document.getElementById('hint-2');
var i = 0;

const hints = [
    '„Welches Gerät verbraucht aktuell die meisten Daten?“',
    '„In welchem Raum wird das Internet am meisten verwendet?“',
    '„Welche Anwendung verwende ich am meisten?“',
    '„Wie schnell ist das Internet aktuell?“',
    '„Wer verwendet das Internet am meisten?“'
]


    setInterval(function(){ const finalText = hints[Math.floor(Math.random() * hints.length)];
        hint2.textContent = finalText;}, 5000);


//Vorlage Antworten
const geratDaten = [
    'Philipps MacBook verbraucht aktuell mit Zoom die meisten Daten. Soll ich mich vom Gerät entkoppeln?',
    'Elisas iPad verbraucht aktuell mit Netflix die meisten Daten. Soll ich mich vom Gerät entkoppeln?'
];

const verwendung = [
    'In den letzten 30 Tagen hat Philipp das Internet am meisten benutzt.',
    'In den letzten 30 Tagen hat Elisa das Internet am meisten benutzt. Heute hat jedoch Philipp die längste Internetnutzung.',
    'In den letzten 30 Tagen hat Kaiser das Internet am meisten benutzt. Heute hat jedoch Philipp die längste Internetnutzung.'
];

const speechRecognition = window.SpeechRecogniton || window.webkitSpeechRecognition;
const recogninition = new speechRecognition();
recogninition.lang = "de-DE"

recogninition.onstart = function(){
    line.style.display = "inline";
    question.style.display = "none";
    answer.style.display = "none";

    hint1.style.display = "none";
    hint2.style.display = "none";

    document.getElementById('knopf').textContent = 'VORSCHLÄGE';

    var element = document.createElement("p");
    element.appendChild(document.createTextNode(question.innerHTML));
    verlauf.appendChild(element);
    var element = document.createElement("h3");
    element.appendChild(document.createTextNode(answer.innerHTML));
    verlauf.appendChild(element);
    var element = document.createElement("hr");
    verlauf.appendChild(element);

    console.log(sound);
    sound.play();
};

recogninition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    question.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () =>{
    recogninition.start();
})


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Ich habe dich nicht verstanden. Frage zum Beispiel:"Welches Gerät verbraucht aktuell die meisten Daten?"';
    line.style.display = "none";
    question.style.display = "block";
    answer.style.display = "block";

    //Ast 1

    if(message.includes('welches Gerät verbraucht die meisten Daten') || message.includes('welches Gerät verbraucht aktuell die meisten Daten')|| message.includes('schalte das Gerät mit der größten Datennutzung ab')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
       
        const finalText = geratDaten[Math.floor(Math.random() * geratDaten.length)];
        speech.text = finalText;
        answer.textContent = finalText;
        setTimeout(function () {
            recogninition.start();
        }, 7000);
        i = 1;
    } 

    if(message.includes ('nein') && i===2){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Alles klar! Samsung Galaxy A10 bleibt mit dem Internet verbunden.';
        answer.textContent = 'Alles klar! Samsung Galaxy A10 bleibt mit dem Internet verbunden.';
        i = 0;
    } 

    if(message.includes ('ja') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
       
        speech.text = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        answer.textContent = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
         i = 0;
    } 


    if(message.includes ('nein') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
    
        speech.text = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        answer.textContent = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        setTimeout(function () {
            recogninition.start();
        }, 11000);
        i = 2;
    } 

    if(message.includes ('ja') && i===2){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        answer.textContent = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        i = 0;
    } 




    
    //Ast 2



    if(message.includes('in welchem Raum wird das Internet am meisten verwendet') || message.includes('in welchem Raum wird das Internet am häufigsten verwendet')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Von welchem Zeitraum möchtest du das wissen? Heute, letzte Woche, letzten Monat oder letztes Jahr?';
        answer.textContent = 'Von welchem Zeitraum möchtest du das wissen? Heute, letzte Woche, letzten Monat oder letztes Jahr?';
        setTimeout(function () {
            recogninition.start();
        }, 7000);
        i = 1
    }

    if(message.includes('heute') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Heute wurde das Internet im Wohnzimmer am meisten verwendet. Hinweis: Du hast dort ein vergleichsweise schwaches WLAN Signal!';
        answer.textContent = 'Heute wurde das Internet im Wohnzimmer am meisten verwendet. Hinweis: Du hast dort ein vergleichsweise schwaches WLAN Signal!';
        i = 0;
    } else if(message.includes('letzte woche') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzte Woche wurde das Internet im Büro am meisten verwendet.';
        answer.textContent = 'Letzte Woche wurde das Internet im Büro am meisten verwendet.';
        i = 0;
    } else if(message.includes('letzten Monat') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzten Monat wurde das Internet im Büro am meisten verwendet.';
        answer.textContent = 'Letzten Monat wurde das Internet im Büro am meisten verwendet.';
        i = 0;
    } else if(message.includes('letztes Jahr') && i===1){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letztes Jahr wurde das Internet im Schlafzimmer am meisten verwendet.';
        answer.textContent = 'Letztes Jahr wurde das Internet im Schlafzimmer am meisten verwendet.';
        i = 0;
    } 
    

    //Ast4


    if(message.includes('wie schnell ist das Internet') || message.includes('wie schnell ist das Internet aktuell')|| message.includes('wie schnell ist das Internet gerade')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Möchtest du die Geschwindigkeit bei einem bestimmten Gerät wissen?';
        answer.textContent = 'Möchtest du die Geschwindigkeit bei einem bestimmten Gerät wissen?';
        setTimeout(function () {
            recogninition.start();
        }, 3500);
        i = 11;
    }

    if(message.includes ('ja') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Wie heißt das Gerät?';
        answer.textContent = 'Wie heißt das Gerät? (Philipps MacBook, Elisas iPad oder Samsung Galaxy A10)';
        setTimeout(function () {
            recogninition.start();
        }, 2500);
        i = 2;
    }

    if(message.includes ('Philips MacBook') && i === 2){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Aktuell hat das Internet auf Philipps MacBook eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        answer.textContent = 'Aktuell hat das Internet auf Philipps MacBook eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        i = 0;
    }
    if(message.includes ('Elisas iPad') && i === 2){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Aktuell hat das Internet auf Elisas iPad eine Uploadgeschwindigkeit von 6,9 MB/s und eine Downloadgeschwindigkeit von 10,4 MB/s.';
        answer.textContent = 'Aktuell hat das Internet auf Elisas iPad eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        i = 0;
    }
    if(message.includes ('Samsung Galaxy A10') && i === 2){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Aktuell hat das Internet auf Samsung Galaxy A10 eine Uploadgeschwindigkeit von 8,7 MB/s und eine Downloadgeschwindigkeit von 14,2 MB/s.';
        answer.textContent = 'Aktuell hat das Internet auf Samsung Galaxy A10 eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        i = 0;
    }


    if(message.includes ('nein') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Aktuell hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        answer.textContent = 'Aktuell hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        i = 0;
    }


    //AST 5

    if(message.includes('Wer verwendet das Internet am meisten')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Von welchem Zeitraum möchtest du das wissen? Heute, letzte Woche, letzten Monat oder letztes Jahr?';
        answer.textContent = 'Von welchem Zeitraum möchtest du das wissen? Heute, letzte Woche, letzten Monat oder letztes Jahr?';   
        setTimeout(function () {
            recogninition.start();
        }, 7000);
        i = 11;

        //ALTERNATIVE
        //const finalText = verwendung[Math.floor(Math.random() * verwendung.length)];
        //speech.text = finalText;
    } 

    if(message.includes('heute') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Heute hat Elisa das Internet am meisten verwendet.';
        answer.textContent = 'Heute hat Elisa das Internet am meisten verwendet.';
        i = 0;
    } else if(message.includes('letzte woche') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzte Woche hat Philipp das Internet am meisten verwendet.';
        answer.textContent = 'Letzte Woche hat Philipp das Internet am meisten verwendet.';
        i = 0;
    } else if(message.includes('letzten Monat') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzten Monat hat Philipp das Internet am meisten verwendet.';
        answer.textContent = 'Letzten Monat hat Philipp das Internet am meisten verwendet.';
        i = 0;
    } else if(message.includes('letztes Jahr') && i===11){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letztes Jahr hat Elisa das Internet am meisten verwendet.';
        answer.textContent = 'Letztes Jahr hat Elisa das Internet am meisten verwendet.';
        i = 0;
    } 



    if(message.includes('welche Anwendung verwende ich am meisten')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Wie heißt du?';
        answer.textContent = 'Wie heißt du?';
        setTimeout(function () {
            recogninition.start();
            i = 10;
        }, 1500);
    } 


    if(message.includes('Philipp') && i===10){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist alfaview.';
        answer.textContent = 'Deine meistgenutze Anwendung ist alfaview.';
        i = 0;
    } if(!message.includes('Philipp') && !message.includes('Kaiser') && !message.includes('Elisa') && i===10){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Leider ist dein Name nicht registriert. Richte bitte zuerst dein Nutzerprofil auf dem Homerouter ein.';
        answer.textContent = 'Leider ist dein Name nicht registriert. Richte bitte zuerst dein Nutzerprofil auf dem Homerouter ein.';
        i = 0;
    }  else if (message.includes('Kaiser') && i===10){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist YouTube.';
        answer.textContent = 'Deine meistgenutze Anwendung ist YouTube.';
        i = 0;
    } else if (message.includes('Elisa') && i===10){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist Netflix.';
        answer.textContent = 'Deine meistgenutze Anwendung ist Netflix.';
        i = 0;
    }






    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function showHints(){
    document.getElementsByClassName('showHints')[0].style.display = "block";
    document.getElementById('knopf').textContent = 'AUSBLENDEN';
    document.getElementById('hint-2').style.display = "none";
    document.getElementsByClassName('pfeil')[0].classList.add('dreh');
    document.getElementsByClassName('button')[0].setAttribute( "onClick", "hideHints()")
    answer.style.display = 'none';
    question.style.display = 'none'
}

function hideHints(){
    document.getElementsByClassName('showHints')[0].style.display = "none";
    document.getElementById('knopf').textContent = 'ALLE ANZEIGEN';
    document.getElementById('hint-2').style.display = "block";
    document.getElementsByClassName('pfeil')[0].classList.remove('dreh');
    document.getElementsByClassName('button')[0].setAttribute( "onClick", "showHints()" )
    answer.style.display = 'block';
    question.style.display = 'block'
}