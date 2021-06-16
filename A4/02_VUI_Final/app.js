const btn = document.querySelector('.talk');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const verlauf = document.querySelector('.verlauf');
const line = document.getElementById('video1');
const sound = document.getElementById('sound1');
const hint1 = document.getElementById('hint-1');
const hint2 = document.getElementById('hint-2');

const hints = [
    '„Welches Gerät verbraucht aktuell die meisten Daten?“',
    '„In welchem Raum wird das Internet am meisten verwendet?“',
    '„Welche Anwendung verwende ich am meisten?“',
    '„Wie schnell ist das Internet aktuell?“',
    '„Wer verwendet das Internet am meisten?“'
]


    setInterval(function(){ const finalText = hints[Math.floor(Math.random() * hints.length)];
        hint2.textContent = finalText;}, 4000);


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
    } 

    if(message.includes ('ja') && answer.innerHTML.includes('Elisas iPad verbraucht aktuell mit Netflix die meisten Daten. Soll ich mich vom Gerät entkoppeln?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        answer.textContent = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
    } else if (message.includes ('ja') && answer.innerHTML.includes('Philipps MacBook verbraucht aktuell mit Zoom die meisten Daten. Soll ich mich vom Gerät entkoppeln?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        answer.textContent = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
    }

    if(message.includes ('nein') && answer.innerHTML.includes('Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Alles klar! Samsung Galaxy A10 bleibt mit dem Internet verbunden.';
        answer.textContent = 'Alles klar! Samsung Galaxy A10 bleibt mit dem Internet verbunden.';
    } 

    if(message.includes ('nein') && answer.innerHTML.includes('Elisas iPad verbraucht aktuell mit Netflix die meisten Daten. Soll ich mich vom Gerät entkoppeln?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        answer.textContent = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        setTimeout(function () {
            recogninition.start();
        }, 11000);
    } else if (message.includes ('nein') && answer.innerHTML.includes('Philipps MacBook verbraucht aktuell mit Zoom die meisten Daten. Soll ich mich vom Gerät entkoppeln?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        answer.textContent = 'Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.';
        setTimeout(function () {
            recogninition.start();
        }, 11000);
    }

    if(message.includes ('ja') && answer.innerHTML.includes('Alles klar! Soll ich mich stattdessen von Samsung Galaxy A10 mit dem zweitgrößten Datenverbrauch entkoppeln? Das Gerät verwendet aktuell YouTube.')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
        answer.textContent = 'Die Verbindung zum Internet wurde erfolgreich getrennt.';
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
    }

    if(message.includes('heute')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Heute wurde das Internet im Wohnzimmer am meisten verwendet. Hinweis: Du hast dort ein vergleichsweise schwaches WLAN Signal!';
        answer.textContent = 'Heute wurde das Internet im Wohnzimmer am meisten verwendet. Hinweis: Du hast dort ein vergleichsweise schwaches WLAN Signal!';
    } else if(message.includes('letzte woche')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzte Woche wurde das Internet im Büro am meisten verwendet.';
        answer.textContent = 'Letzte Woche wurde das Internet im Büro am meisten verwendet.';
    } else if(message.includes('letzten Monat')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letzten Monat wurde das Internet im Büro am meisten verwendet.';
        answer.textContent = 'Letzten Monat wurde das Internet im Büro am meisten verwendet.';
    } else if(message.includes('letztes Jahr')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Letztes Jahr wurde das Internet im Schlafzimmer am meisten verwendet.';
        answer.textContent = 'Letztes Jahr wurde das Internet im Schlafzimmer am meisten verwendet.';
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
    }

    if(message.includes ('ja') && answer.innerHTML.includes('Möchtest du die Geschwindigkeit bei einem bestimmten Gerät wissen?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Wie heißt das Gerät?';
        answer.textContent = 'Wie heißt das Gerät?';
        setTimeout(function () {
            line.style.display = "inline";
          
            var element = document.createElement("p");
            element.appendChild(document.createTextNode(question.innerHTML));
            verlauf.appendChild(element);
            var element = document.createElement("h3");
            element.appendChild(document.createTextNode(answer.innerHTML));
            verlauf.appendChild(element);
            var element = document.createElement("hr");
            verlauf.appendChild(element);

            sound.play();

            
        }, 2000);
    }

    if(answer.innerHTML.includes('Wie heißt das Gerät?')){
        line.style.display = "none";
        answer.style.display = "block";
        setTimeout(function () {
            speech.text = 'Bei diesem Gerät hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
            answer.textContent = 'Bei diesem Gerät hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        }, 5000);
    }

    if(message.includes ('nein') && answer.innerHTML.includes('Möchtest du die Geschwindigkeit bei einem bestimmten Gerät wissen?')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Aktuell hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
        answer.textContent = 'Aktuell hat das Internet eine Uploadgeschwindigkeit von 9,8 MB/s und eine Downloadgeschwindigkeit von 20,4 MB/s.';
    }


    if(message.includes('Wer verwendet das Internet am meisten')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        const finalText = verwendung[Math.floor(Math.random() * verwendung.length)];
        speech.text = finalText;
        answer.textContent = finalText;
    } 

    if(message.includes('welche Anwendung verwende ich am meisten')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Wie heißt du?';
        answer.textContent = 'Wie heißt du?';
        setTimeout(function () {
            recogninition.start();
        }, 1500);
    } 

    if(message.includes('Philipp')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist alfaview.';
        answer.textContent = 'Deine meistgenutze Anwendung ist alfaview.';
    } else if (message.includes('Kaiser')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist YouTube.';
        answer.textContent = 'Deine meistgenutze Anwendung ist YouTube.';
    } else if (message.includes('Elisa')){
        line.style.display = "none";
        question.style.display = "block";
        answer.style.display = "block";
        speech.text = 'Deine meistgenutze Anwendung ist Netflix.';
        answer.textContent = 'Deine meistgenutze Anwendung ist Netflix.';
    }
   






    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}