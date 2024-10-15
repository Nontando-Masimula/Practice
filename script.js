/*const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Mark Twain",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "J.K. Rowling",
        correct: "b",
    },
    {
        question: "What is the largest planet in our Solar System?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "c",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

nextButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quizContainer.classList.add('hide');
            scoreContainer.classList.remove('hide');
            scoreDisplay.innerText = score;
        }
    }
});

restartButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    scoreContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    loadQuestion();
});

// Load the first question
loadQuestion();*/

// Registration functionality
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    // Save user data (in reality, you would send this to your server)
    localStorage.setItem("user", JSON.stringify({ username, email, password }));

    document.getElementById("message").innerText = "Registration successful! You can now log in.";
    document.getElementById("registrationForm").reset();
});

// Login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve user data
    const userData = JSON.parse(localStorage.getItem("user"));

    // Check if login is successful
    if (userData && userData.email === email && userData.password === password) {
        document.getElementById("message").innerText = "Login successful! Fill out the application form.";
        document.getElementById("applicationContainer").style.display = "block"; // Show application form
        document.getElementById("loginForm").style.display = "none"; // Hide login form
    } else {
        document.getElementById("message").innerText = "Invalid email or password.";
    }

    document.getElementById("loginForm").reset();
});

// Application submission functionality
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById("studentName").value;
    const studentDOB = document.getElementById("studentDOB").value;
    const previousSchool = document.getElementById("previousSchool").value;
    const reportCard = document.getElementById("reportCard").files[0];

    // Simulate extracting marks using OCR (you would typically handle this on the server)
    const extractedMarks = 75; // Simulated extracted marks (for example purposes)
    const passMark = 50; // School's requirement

    // Check pass mark
    if (extractedMarks >= passMark) {
        document.getElementById("applicationStatus").innerText = "Application submitted successfully! Status: Under Review.";
    } else {
        document.getElementById("applicationStatus").innerText = "Application not submitted. Child does not meet the pass criteria.";
    }
    
    document.getElementById("applicationForm").reset(); // Reset the application form
    document.getElementById("applicationStatus").style.display = "block"; // Show application status
});


