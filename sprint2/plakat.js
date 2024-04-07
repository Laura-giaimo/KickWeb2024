// JavaScript FOR AUDIO 
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');

audio1.addEventListener('ended', () => {
    audio2.play();
});

audio2.addEventListener('ended', () => {
    audio3.play();
});

audio3.addEventListener('ended', () => {
    audio4.play();
});

audio4.addEventListener('ended', () => {
    audio5.play();
});

audio5.addEventListener('ended', () => {
});

audio1.play(); // Starte die Wiedergabe der ersten Audiodatei


// REPEAT SCENE
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("overlay").classList.add("active");
    }, 42000);
});

// JavaScript für Writing Animation
// Funktion zum Starten des Typing-Effekts nach einer Verzögerung
function startTypingAfterDelay() {
    const paragraphs = document.querySelectorAll('.karaoke-text');
    let delay = 15000; // Startverzögerung von 15 Sekunden für den ersten Absatz
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            typeWriter(paragraph);
        }, delay);
        delay += 3500; // Zeitintervall zwischen den Absätzen
    });
}

// Funktion zum Animieren des Typing-Effekts
function typeWriter(element) {
    const text = element.innerText;
    element.innerText = ''; // Leeren Sie den Inhalt des Absatzes
    let i = 0;
    const speed = 50; // Geschwindigkeit in Millisekunden
    element.classList.add('typing');
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

// Starten Sie den Typing-Effekt nach einer Verzögerung
startTypingAfterDelay();