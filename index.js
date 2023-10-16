function convertToUpperCase() {
    // Get the input field element by its id
    var inputField = document.getElementById("input-field");

    // Get the value from the input field
    var inputValue = inputField.value;

    // Convert the value to uppercase
    var convertedText = inputValue.toUpperCase();

    // Set the converted text back to the input field
    inputField.value = convertedText;
}
function convertToLowerCase() {
    // Get the input field element by its id
    var inputField = document.getElementById("input-field");

    // Get the value from the input field
    var inputValue = inputField.value;

    // Convert the value to uppercase
    var convertedText = inputValue.toLowerCase()

    // Set the converted text back to the input field
    inputField.value = convertedText;
}

function countLettersAndWordsAndSentences() {
    var inputText = document.getElementById("input-field").value;
    var letterCount = inputText.replace(/\s/g, '').length;
    var wordCount = inputText.trim().split(/\s+/).length;
    var sentenceCount = inputText.trim().split(/[.!?]+/).length - 1; // Subtract 1 to exclude empty strings.

    document.getElementById("count").textContent = letterCount;
    document.getElementById("word-count").textContent = wordCount;
    document.getElementById("sentence-count").textContent = sentenceCount;
}

function downloadText() {
    // Get the input field value
    const textInput = document.getElementById('input-field');
    const text = textInput.value;

    // Create a Blob object containing the text
    const blob = new Blob([text], { type: 'text/plain' });

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'downloaded_text.txt';
    a.style.display = 'none';

    // Add the anchor to the document and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Remove the anchor element
    document.body.removeChild(a);
}
function copyToClipboard() {
    const textInput = document.getElementById('input-field');
    textInput.select();
    document.execCommand('copy');
}