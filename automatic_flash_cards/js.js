let currentQuestionIndex = 0;
let questions = [];
let JSON_data = {};
let finalPrompt = '';
let line='';

// Prompt if there is a chapter
promptChapter = 'You act as a professor of {LEVEL} You will review a document, focusing only on the chapter {CHAPTER} and generate {NUM} questions about this chapter. The question will be in one sentence. The answers will be shorter than 15 words if possible. Display explicitly if you take the chapter of the number of pages. You will reply accordingly to this JSON format with the questions in [question], the equivalent answers in [answer] and a brief summary in less in less than 10 words of the subject covered in the [subject] :    { "subject" : [subject],"list":[{"question": [question], "answer": [answer]}}'

// Prompt if there is no chapter
promptNoChapter = 'You act as a professor of {LEVEL} You will review a document, focusing only on {REVIEW} and generate {NUM} questions about this chapter. The question will be in one sentence. The answers will be shorter than 15 words if possible. You will reply accordingly to this JSON format with the questions in [question], the equivalent answers in [answer] and a brief summary in less in less than 10 words of the subject covered in the [subject] :{ "subject" : [subject], "list":[{"question": [question], "answer": [answer]}}'

function mod(n, m) {
    return ((n % m) + m) % m;
  }

function generatePrompt() {

    finalPrompt = '{LEVEL} = ' + document.getElementById("level").value + ' {NUM} = ' + document.getElementById("num_questions").value;
    if (document.getElementById("num_chap").value == '') {
        finalPrompt = finalPrompt + ' {REVIEW} = ' + document.getElementById("num_pages").value + ' ' + promptNoChapter;
    }
    else {
        finalPrompt = finalPrompt + ' {CHAPTER} = ' + document.getElementById("num_chap").value + ' ' + promptChapter;
    }

    //document.getElementById("generated_prompt").innerText = finalPrompt;
}

async function copyToClipboard() {
    const textToCopy = finalPrompt;
    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('The prompt has been copied on your clipboard.')
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

function generateAndCopy() {
    generatePrompt();
    copyToClipboard();
}

function updateExample1() {
    updateQuestions('/assets/questions.json');
}

function updateQuestions(text) {
     fetch(text)
      .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok ' + response.statusText); 
            }
             return response.json(); 
            }) 
            .then(data => 
                { // Processing the JSON data directly
                    line = data.list.map(item => item);
                    document.getElementById("subject").innerText = data.subject;
                    document.getElementById("path").innerText = "Question 1/" + line.length; 
                    currentQuestionIndex = 0;
                    displayQuestion(line); 
                }
            ) .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error)); 
        }

// Fonction pour charger les questions depuis le fichier JSON
function loadQuestions() { 
    // Load the data of the JSON file 
    let JSON_data = document.getElementById("JSON_data").value; 
    try { 
        JSON_data = JSON.parse(JSON_data);
        // Processing the JSON data directly 
        let data = JSON_data;
        line = data.list.map(item => item); 
        document.getElementById("subject").innerText = data.subject; 
        document.getElementById("path").innerText = "Question 1/" + line.length; 
        currentQuestionIndex = 0;
        displayQuestion(line);
         } 
         catch (error) { console.error('Erreur lors du chargement du fichier JSON :', error); } 
        }


// Fonction pour afficher la question actuelle
function displayQuestion(line) {
    document.getElementById("answer").innerText = '';
    document.getElementById("question").innerText = line[currentQuestionIndex].question;
}

function displayAnswer() {
    document.getElementById("answer").innerText = line[currentQuestionIndex].answer;
}

function previousQuestion() {
    // Moins 2 parce qu'on va le setup en answer et il prendra +1 dans la function
    currentQuestionIndex = mod((currentQuestionIndex - 2),line.length);
    QorA();
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex = mod((currentQuestionIndex + 1),line.length);
    QorA();
}

function QorA() {
        currentQuestionIndex = mod((currentQuestionIndex + 1),line.length);
        document.getElementById("path").innerText = 'Question '+(currentQuestionIndex+1) + "/"+ line.length;
        displayQuestion(line)
    }

function resetJSON() {
    document.getElementById("JSON_data").value = '';
}


// Ajouter un gestionnaire d'événement de clic au bloc de contenu
document.getElementById("button_click_next").addEventListener("click", QorA);
document.getElementById("button_click_back").addEventListener("click", previousQuestion);
document.getElementById("button_click_answer").addEventListener("click", displayAnswer);
document.getElementById("set_data_JSON").addEventListener("click", loadQuestions);
document.getElementById("creation_prompt").addEventListener("click", generateAndCopy);
document.getElementById('reset_JSON').addEventListener('click', resetJSON); 
document.getElementById('load_JSON_ex_1').addEventListener('click', updateExample1); 