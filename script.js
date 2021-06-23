const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex; 


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    }) 
   
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: 'Where is the Middle C in the Treble Clef?',
        answers: [
            {text: 'the first line', correct: true},
            {text: 'the first ledger line', correct: false},
            {text: 'the middle line', correct: false},
            {text: 'the bottom', correct: false}
        ]
    },
    {
        question: 'What is another name for the Treble Clef?',
        answers: [
            {text: 'the G clef', correct: true},
            {text: 'the Wavy Clef', correct: false},
            {text: 'the Upper clef', correct: false},
            {text: 'the Loopy clef', correct: false}
        ]
    },
    {
        question: 'What is another name for the Bass Clef?',
        answers: [
            {text: 'the Lower clef', correct: false},
            {text: 'the F clef', correct: true},
            {text: 'the Side Clef', correct: false},
            {text: 'the Ear clef', correct: false}
        ]
    },
    {
        question: 'Which of the following is the order of sharps?',
        answers: [
            {text: 'D-C-A-G-F-E-B', correct: false},
            {text: 'A-D-G-E-B-F-C', correct: false},
            {text: 'F-C-G-D-A-E-B', correct: true},
            {text: 'R-G-W-V-U-R-C', correct: false}
        ]
    },
    {
        question: 'Which of the following is the order of flats?',
        answers: [
            {text: 'B-E-A-D-G-C-F', correct: true},
            {text: 'A-G-E-F-D-C-B', correct: false},
            {text: 'B-E-F-G-A-C-D', correct: false},
            {text: 'C-F-B-E-G-D-A', correct: false}
        ]
    },
    {
        question: 'How many notes are in a scale?',
        answers: [
            {text: '10', correct: false},
            {text: '6', correct: false},
            {text: '4', correct: false},
            {text: '8', correct: true}
        ]
    },
    {
        question: 'How do you turn a natural minor scale into a harmonic minor scale?',
        answers: [
            {text: 'raise the 8th degree', correct: false},
            {text: 'raise the 7th degree', correct: true},
            {text: 'raise the 6th degree', correct: false},
            {text: 'raise the 5th degree', correct: false}
        ]
    }, 
    {
        question: 'What is the first and last scale degree called?',
        answers: [
            {text: 'tonic', correct: true},
            {text: 'dominant', correct: false},
            {text: 'remedial', correct: false},
            {text: 'subdominant', correct: false}
        ]
    },
    {
        question: 'What is the fourth scale degree called?',
        answers: [
            {text: 'tonic', correct: false},
            {text: 'dominant', correct: false},
            {text: 'remedial', correct: false},
            {text: 'subdominant', correct: true}
        ]
    },
    {
        question: 'What is the fifth scale degree called?',
        answers: [
            {text: 'tonic', correct: false},
            {text: 'dominant', correct: true},
            {text: 'remedial', correct: false},
            {text: 'subdominant', correct: false}
        ]
    },
    {
        question: 'What is another name for an Anacrusis?',
        answers: [
            {text: 'a raised beat', correct: false},
            {text: 'a high beat', correct: false},
            {text: 'a side beat', correct: false},
            {text: 'an up beat', correct: true}
        ]
    },
    {
        question: 'Which musical era came right after the Classical Era?',
        answers: [
            {text: 'The Romantic Era', correct: true},
            {text: 'The Baroque Era', correct: false},
            {text: 'The Renaissance Era', correct: false},
            {text: 'The Modernist Era', correct: false}
        ]
    },
    {
        question: 'Which musical era came right before the Modernist Era?',
        answers: [
            {text: 'The Classical Era', correct: false},
            {text: 'The Mozart Era', correct: false},
            {text: 'The Impressionist Era', correct: true},
            {text: 'The Romantic Era', correct: false}
        ]
    },
    {
        question: 'What is the relative minor key of the C Major scale?',
        answers: [
            {text: 'A Minor', correct: true},
            {text: 'B Minor', correct: false},
            {text: 'Q Minor', correct: false},
            {text: 'F Minor', correct: false}
        ]
    },
    {
        question: 'What is the relative major key of the D Minor scale?',
        answers: [
            {text: 'E Major', correct: false},
            {text: 'F Major', correct: true},
            {text: 'H Major', correct: false},
            {text: 'G Major', correct: false}
        ]
    }
]