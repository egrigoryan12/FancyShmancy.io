function makeTextBigger() {
    var textArea = document.getElementById("Text");
    textArea.style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("Text");

    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");
    var boringBettyRadio = document.getElementById("boringBettyRadio"); // Add this line to get the "BoringBetty" radio
    
    if (fancyShmancyRadio.checked) {
        textArea.style.color = "blue";
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
    } 
    if (boringBettyRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function Moo() {
    
    var textArea = document.getElementById("Text");
    var text = textArea.value;
    text = text.toUpperCase();
    
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var letters = sentences[i].split(" ");

        if (letters.length > 1) {
            letters[letters.length - 1] += "-Moo";
            sentences[i] = letters.join(" ");
        }
    }
    
    text = sentences.join(". ");
    textArea.value = text;
}
