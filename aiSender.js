const form = document.getElementById('userInput');
const openAIkey = "";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = form['aiText'];

    var oReq = new XMLHttpRequest();
    oReq.responseType = 'json';
    oReq.open("POST", "https://api.openai.com/v1/engines/text-davinci-001/completions", true);
    oReq.setRequestHeader("Authorization", "Bearer " + openAIkey);
    oReq.setRequestHeader("Content-Type", "application/json");
    req.onload  = function() {
        var jsonResponse = req.response;
        alert(jsonResponse["error"])
     };
    oReq.send(JSON.stringify({
        "prompt": "Summarize this for a second-grade student:\n"+userInput,
        "temperature": 0.7,
        "max_tokens": 64,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }));
});