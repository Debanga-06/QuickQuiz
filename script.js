// QuickQuiz Main Script - Works with external questions.js file

// Quiz state variables
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;
let timer = null;
let timeLeft = 30;
let totalTime = 0;
let quizMode = 'quick';
let startTime = null;

// Question management for large datasets
let questionPool = [];
let usedQuestions = new Set();
let dailyQuestionCache = null;

// Memory-based storage (since localStorage is not available)
const memoryStorage = {
    dailyStreak: 0,
    lastDailyDate: '',
    bestStreak: 0,
    totalCompleted: 0,
    dailyCompletedToday: false,
    usedQuestions: [],
    dailyQuestionsCache: null
};

// Initialize app
function initializeApp() {
    loadQuestionPool();
    updateStreakDisplay();
    updateStats();
    checkDailyQuizStatus();
}

// Load questions from external questions.js file
function loadQuestionPool() {
    try {
        // Check if questions array is available from questions.js
        if (typeof questions !== 'undefined' && Array.isArray(questions)) {
            questionPool = questions;
            console.log(`Loaded ${questionPool.length} questions from questions.js`);
        } else {
            console.error('Questions array not found. Make sure questions.js is loaded before main.js');
            questionPool = [];
            return;
        }

        // Load used questions from memory to avoid repetition
        loadUsedQuestions();

    } catch (error) {
        console.error('Error loading questions:', error);
        questionPool = [];
    }
}

// Efficient question selection for large datasets
function getRandomQuestions(count = 10, excludeUsed = false, customPool = null) {
    let pool = customPool || questionPool;
    if (!pool || pool.length === 0) {
        console.error('Question pool is empty.');
        return [];
    }

    let availableQuestions = [...pool];

    if (excludeUsed && pool.length > 50) {
        availableQuestions = pool.filter(q => !usedQuestions.has(q.question));

        if (availableQuestions.length < count) {
            usedQuestions.clear(); // reset if not enough
            saveUsedQuestions();
            availableQuestions = [...pool];
        }
    }

    // Shuffle available questions
    for (let i = availableQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
    }

    const selected = availableQuestions.slice(0, count);

    if (excludeUsed) {
        selected.forEach(q => usedQuestions.add(q.question));
        saveUsedQuestions();
    }

    return selected;
}

// Generate daily quiz with consistent questions for the day
function generateDailyQuiz() {
    const today = getTodayString();
    const cachedDaily = memoryStorage.dailyQuestionsCache;

    // Return cached questions if they exist for today
    if (cachedDaily && cachedDaily.date === today) {
        return cachedDaily.questions;
    }

    // Generate new daily questions
    const todayNum = new Date().getTime();
    const seed = parseInt(todayNum.toString().slice(-8)); // Use last 8 digits as seed

    // Seeded random function for consistent daily questions
    let random = seed;
    function seededRandom() {
        random = (random * 9301 + 49297) % 233280;
        return random / 233280;
    }

    // Select questions using seeded random
    const shuffled = [...questionPool];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const dailyQuestions = shuffled.slice(0, 10);

    // Cache the daily questions in memory
    memoryStorage.dailyQuestionsCache = {
        date: today,
        questions: dailyQuestions
    };

    return dailyQuestions;
}

// Load and save used questions for better variety
function saveUsedQuestions() {
    localStorage.setItem('usedQuestions', JSON.stringify([...usedQuestions]));
}

function loadUsedQuestions() {
    const stored = localStorage.getItem('usedQuestions');
    usedQuestions = new Set(stored ? JSON.parse(stored) : []);

    // Optional cleanup if too many used
    if (usedQuestions.size > questionPool.length * 0.8) {
        usedQuestions.clear();
        saveUsedQuestions();
    }
}

// Memory storage functions (replacing localStorage)
function getMemoryItem(key, defaultValue = 0) {
    return memoryStorage[key] !== undefined ? memoryStorage[key] : defaultValue;
}

function setMemoryItem(key, value) {
    memoryStorage[key] = value;
}

function getTodayString() {
    return new Date().toDateString();
}

function updateStreakDisplay() {
    const currentStreak = getMemoryItem('dailyStreak');
    const lastDate = getMemoryItem('lastDailyDate', '');
    const today = getTodayString();

    const streakElement = document.getElementById('streak-number');
    if (streakElement) {
        streakElement.textContent = currentStreak;
    }

    // Check if streak is still valid
    if (lastDate) {
        const lastDateObj = new Date(lastDate);
        const todayObj = new Date(today);
        const diffTime = Math.abs(todayObj - lastDateObj);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            // Streak broken, reset to 0
            setMemoryItem('dailyStreak', 0);
            if (streakElement) {
                streakElement.textContent = '0';
            }
        }
    }
}

function updateStats() {
    const bestStreak = getMemoryItem('bestStreak');
    const totalCompleted = getMemoryItem('totalCompleted');

    const bestStreakElement = document.getElementById('best-streak');
    const totalCompletedElement = document.getElementById('total-completed');

    if (bestStreakElement) {
        bestStreakElement.textContent = bestStreak;
    }
    if (totalCompletedElement) {
        totalCompletedElement.textContent = totalCompleted;
    }
}

function checkDailyQuizStatus() {
    const today = getTodayString();
    const lastDailyDate = getMemoryItem('lastDailyDate', '');
    const dailyBtn = document.getElementById('daily-btn');
    const statusElement = document.getElementById('streak-status');

    if (dailyBtn) {
        if (lastDailyDate === today) {
            dailyBtn.textContent = 'Completed Today! ✓';
            dailyBtn.disabled = true;
            dailyBtn.style.opacity = '0.6';
            if (statusElement) {
                statusElement.textContent = 'Daily quiz completed! Come back tomorrow.';
            }
        } else {
            dailyBtn.textContent = 'Daily Challenge';
            dailyBtn.disabled = false;
            dailyBtn.style.opacity = '1';
            if (statusElement) {
                statusElement.textContent = 'Complete today\'s quiz to maintain your streak!';
            }
        }
    }
}

function updateDailyStreak(completed = false) {
    const today = getTodayString();
    const lastDate = getMemoryItem('lastDailyDate', '');
    const currentStreak = getMemoryItem('dailyStreak');
    const bestStreak = getMemoryItem('bestStreak');

    if (completed && quizMode === 'daily') {
        let newStreak = currentStreak;

        if (lastDate === today) {
            // Already completed today
            return { streak: currentStreak, isNew: false };
        }

        // Check if this continues the streak
        if (lastDate) {
            const lastDateObj = new Date(lastDate);
            const todayObj = new Date(today);
            const diffTime = Math.abs(todayObj - lastDateObj);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                // Consecutive day
                newStreak = currentStreak + 1;
            } else if (diffDays > 1) {
                // Streak broken, start new
                newStreak = 1;
            }
        } else {
            // First time
            newStreak = 1;
        }

        // Update memory storage
        setMemoryItem('dailyStreak', newStreak);
        setMemoryItem('lastDailyDate', today);

        // Update best streak if needed
        if (newStreak > bestStreak) {
            setMemoryItem('bestStreak', newStreak);
        }

        return { streak: newStreak, isNew: true, isBest: newStreak > bestStreak };
    }

    return { streak: currentStreak, isNew: false };
}

function startQuiz(mode = 'quick') {
    if (questionPool.length === 0) {
        console.error('Cannot start quiz: No questions loaded');
        alert('Error: Questions not loaded. Please check that questions.js is included.');
        return;
    }

    quizMode = mode;
    currentQuestion = 0;
    score = 0;
    totalTime = 0;
    startTime = Date.now();

    // Get selected category from dropdown
    const selectedCategory = document.getElementById('category-select')?.value || 'All';

    // Filter by category if not 'All'
    let filteredPool = questionPool;
    if (selectedCategory !== 'All') {
        filteredPool = questionPool.filter(q => q.category === selectedCategory);
    }

    // Use smart question selection to avoid repetition
    currentQuiz = getRandomQuestions(10, true, filteredPool);

    const welcomeScreen = document.getElementById('welcome-screen');
    const quizInterface = document.getElementById('quiz-interface');

    if (welcomeScreen) welcomeScreen.classList.add('hidden');
    if (quizInterface) quizInterface.classList.remove('hidden');

    loadQuestion();
}

function startTimer() {
    timeLeft = 30;
    updateTimerDisplay();

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 10) {
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.classList.add('warning');
            }
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Auto-submit with no answer
            if (!answered) {
                selectAnswer(-1, null);
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerElement.classList.add('warning');
        } else {
            timerElement.classList.remove('warning');
        }
    }
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function loadQuestion() {
    if (currentQuestion >= currentQuiz.length) {
        showResults();
        return;
    }

    const question = currentQuiz[currentQuestion];
    selectedAnswer = null;
    answered = false;

    // Update progress
    const progress = (currentQuestion / currentQuiz.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;
    }

    // Load question
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }

    // Load options
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.onclick = () => selectAnswer(index, optionElement);
            optionsContainer.appendChild(optionElement);
        });
    }

    // Hide next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.style.display = 'none';
    }

    // Add fade-in animation
    const questionCard = document.getElementById('question-card');
    if (questionCard) {
        questionCard.classList.remove('fade-in');
        setTimeout(() => questionCard.classList.add('fade-in'), 10);
    }

    // Start timer
    startTimer();
}

function selectAnswer(answerIndex, optionElement) {
    if (answered) return;

    selectedAnswer = answerIndex;
    answered = true;
    stopTimer();

    const question = currentQuiz[currentQuestion];
    const options = document.querySelectorAll('.option');

    // Disable all options
    options.forEach(option => option.style.pointerEvents = 'none');

    // Mark selected option if there was one
    if (optionElement) {
        optionElement.classList.add('selected');
    }

    setTimeout(() => {
       // Find correct index using answer text
const correctIndex = question.options.findIndex(opt =>
    opt.trim().toLowerCase() === question.answer.trim().toLowerCase()
);

// Highlight correct/incorrect
options.forEach((option, index) => {
    if (index === correctIndex) {
        option.classList.add('correct');
    } else if (index === selectedAnswer && index !== correctIndex) {
        option.classList.add('incorrect');
    }
});

// Update score
if (selectedAnswer === correctIndex) {
    score++;
    const currentScoreElement = document.getElementById('current-score');
    if (currentScoreElement) {
        currentScoreElement.textContent = score;
    }

    const timeBonus = Math.max(0, timeLeft * 2);
    totalTime += (30 - timeLeft);
}

        // Calculate time bonus (faster answers get more points)
        if (selectedAnswer === question.correct) {
            const timeBonus = Math.max(0, timeLeft * 2); // 2 points per second remaining
            totalTime += (30 - timeLeft);
        }

        // Show next button
        setTimeout(() => {
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) {
                if (currentQuestion < currentQuiz.length - 1) {
                    nextBtn.textContent = 'Next Question';
                } else {
                    nextBtn.textContent = 'View Results';
                }
                nextBtn.style.display = 'inline-block';
            }
        }, 1000);
    }, 500);
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResults() {
    stopTimer();
    const quizInterface = document.getElementById('quiz-interface');
    const resultsScreen = document.getElementById('results-screen');

    if (quizInterface) quizInterface.classList.add('hidden');
    if (resultsScreen) resultsScreen.classList.remove('hidden');

    const percentage = Math.round((score / currentQuiz.length) * 100);
    const avgTime = Math.round(totalTime / currentQuiz.length);
    const totalQuizTime = Math.round((Date.now() - startTime) / 1000);

    const finalScoreElement = document.getElementById('final-score');
    if (finalScoreElement) {
        finalScoreElement.textContent = `${score}/${currentQuiz.length} (${percentage}%)`;
    }

    // Performance text
    let performanceText = '';
    if (percentage >= 90) {
        performanceText = '🏆 Outstanding! You\'re a quiz master!';
    } else if (percentage >= 80) {
        performanceText = '🌟 Excellent work! Very impressive!';
    } else if (percentage >= 70) {
        performanceText = '👍 Good job! Keep it up!';
    } else if (percentage >= 60) {
        performanceText = '👌 Not bad! Room for improvement.';
    } else {
        performanceText = '💪 Keep practicing! You\'ll get better!';
    }

    const performanceTextElement = document.getElementById('performance-text');
    const timeStatsElement = document.getElementById('time-stats');

    if (performanceTextElement) {
        performanceTextElement.textContent = performanceText;
    }
    if (timeStatsElement) {
        timeStatsElement.textContent = `Average time per question: ${avgTime}s | Total time: ${totalQuizTime}s`;
    }

    // Update statistics
    const currentCompleted = getMemoryItem('totalCompleted');
    setMemoryItem('totalCompleted', currentCompleted + 1);

    // Handle daily streak
    const streakResult = updateDailyStreak(true);
    const streakUpdateElement = document.getElementById('streak-update');

    if (streakUpdateElement) {
        if (quizMode === 'daily' && streakResult.isNew) {
            let streakMessage = `🔥 Daily streak: ${streakResult.streak} days!`;
            if (streakResult.isBest) {
                streakMessage += ' 🆕 New personal best!';
            }
            streakUpdateElement.innerHTML = streakMessage;
            streakUpdateElement.style.display = 'block';

            // Update results title for daily quiz
            const resultsTitle = document.getElementById('results-title');
            if (resultsTitle) {
                resultsTitle.textContent = '🎉 Daily Challenge Complete!';
            }
        } else if (quizMode === 'daily') {
            streakUpdateElement.innerHTML = '✅ Daily quiz already completed today!';
            streakUpdateElement.style.display = 'block';
        } else {
            streakUpdateElement.style.display = 'none';
        }
    }

    // Update progress to 100%
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = '100%';
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;
    totalTime = 0;
    stopTimer();

    const currentScoreElement = document.getElementById('current-score');
    const timerElement = document.getElementById('timer');
    const resultsScreen = document.getElementById('results-screen');
    const welcomeScreen = document.getElementById('welcome-screen');

    if (currentScoreElement) currentScoreElement.textContent = '0';
    if (timerElement) timerElement.classList.remove('warning');
    if (resultsScreen) resultsScreen.classList.add('hidden');
    if (welcomeScreen) welcomeScreen.classList.remove('hidden');

    // Refresh stats and streak display
    updateStreakDisplay();
    updateStats();
    checkDailyQuizStatus();
}

// Utility function to get random questions (can be called externally)
function getRandomQuestions(count = 10, excludeUsed = false, customPool = null) {
    let pool = customPool || questionPool;
    if (!pool || pool.length === 0) {
        console.error('Question pool is empty.');
        return [];
    }

    let availableQuestions = [...pool];

    if (excludeUsed && pool.length > 50) {
        availableQuestions = pool.filter((_, index) => !usedQuestions.has(index));

        if (availableQuestions.length < count) {
            usedQuestions.clear();
            saveUsedQuestions();
            availableQuestions = [...pool];
        }
    }

    const selected = [];
    const indices = Array.from({ length: availableQuestions.length }, (_, i) => i);

    for (let i = 0; i < Math.min(count, availableQuestions.length); i++) {
        const randomIndex = Math.floor(Math.random() * (indices.length - i)) + i;
        [indices[i], indices[randomIndex]] = [indices[randomIndex], indices[i]];
        selected.push(availableQuestions[indices[i]]);

        if (excludeUsed) {
            const originalIndex = pool.indexOf(availableQuestions[indices[i]]);
            usedQuestions.add(originalIndex);
        }
    }

    if (excludeUsed) {
        saveUsedQuestions();
    }

    return selected;
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function () {
    console.log('QuickQuiz main script loaded');
    // Small delay to ensure questions.js is loaded
    setTimeout(() => {
        initializeApp();
        console.log('QuickQuiz initialized successfully!');
    }, 100);
});

// Update daily quiz status at midnight
setInterval(() => {
    checkDailyQuizStatus();
    updateStreakDisplay();
}, 60000); // Check every minute

// Export functions for external use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        startQuiz,
        getRandomQuestionsFromPool,
        restartQuiz,
        initializeApp
    };
}