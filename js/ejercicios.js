let currentQuestion = 1;

function checkAnswer(questionNumber) {
    const selectedValue = document.querySelector(`input[name="verbo${questionNumber}"]:checked`).value;
    const correctAnswer = getCorrectAnswer(questionNumber); // Función para obtener la respuesta correcta

    if (selectedValue === correctAnswer) {
        document.getElementById(`result${questionNumber}`).innerHTML = "¡Respuesta correcta!";
        document.getElementById(`question${questionNumber}`).style.display = "none";
        currentQuestion++;

        if (currentQuestion <= 7) {
            document.getElementById(`question${currentQuestion}`).style.display = "block";
        }
    } else {
        document.getElementById(`result${questionNumber}`).innerHTML = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
}


function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "come";
        case 2:
            return "mueren";
        case 3:  
            return "vendra"; 
        case 4:
            return "vimos";
        case 5:
            return "trabaja";
        case 6:  
            return "iras";
        default:
            return "";
    }
} 










