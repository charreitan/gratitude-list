 document.getElementById("gratitudeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    
const gratitude = document.getElementById('gratitude').value;

const newEl = document.createElement('li');

const newText = document.createTextNode(gratitude);
