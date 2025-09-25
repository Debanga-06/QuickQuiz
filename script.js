// Professional QuickQuiz Script - Enhanced Version

class QuickQuiz {
    constructor() {
        this.currentQuiz = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.answered = false;
        this.timer = null;
        this.timeLeft = 30;
        this.totalTime = 0;
        this.quizMode = 'quick';
        this.startTime = null;
        this.questionPool = [];
        this.usedQuestions = new Set();
        this.dailyQuestionCache = null;
        
        // In-memory storage (no localStorage dependency)
        this.memoryStorage = {
            dailyStreak: 0,
            lastDailyDate: '',
            bestStreak: 0,
            totalCompleted: 0,
            dailyCompletedToday: false,
            usedQuestions: [],
            dailyQuestionsCache: null
        };
        
        this.init();
    }

    init() {
        console.log('🧠 QuickQuiz Professional Edition Initializing...');
        this.loadQuestionPool();
        this.updateStreakDisplay();
        this.updateStats();
        this.checkDailyQuizStatus();
        this.addEventListeners();
        this.startBackgroundAnimations();
        console.log('✅ QuickQuiz initialized successfully!');
    }

    loadQuestionPool() {
        try {
            if (typeof questions !== 'undefined' && Array.isArray(questions)) {
                this.questionPool = questions;
                console.log(`📚 Loaded ${this.questionPool.length} questions`);
            } else {
                console.error('❌ Questions array not found. Creating sample questions...');
                this.createSampleQuestions();
            }
            this.loadUsedQuestions();
        } catch (error) {
            console.error('❌ Error loading questions:', error);
            this.createSampleQuestions();
        }
    }

    createSampleQuestions() {
        // Fallback sample questions if questions.js is not loaded
        this.questionPool = [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                answer: "Hyper Text Markup Language",
                category: "Web Development"
            },
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "JavaScript", "Java", "C++"],
                answer: "JavaScript",
                category: "Programming"
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                answer: "O(log n)",
                category: "DSA"
            },
            {
                question: "Which company developed React?",
                options: ["Google", "Microsoft", "Facebook", "Apple"],
                answer: "Facebook",
                category: "Web Development"
            },
            {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                answer: "Cascading Style Sheets",
                category: "Web Development"
            }
        ];
        console.log('📝 Created sample question pool');
    }

    addEventListeners() {
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key >= '1' && e.key <= '4') {
                const optionIndex = parseInt(e.key) - 1;
                const options = document.querySelectorAll('.option');
                if (options[optionIndex] && !this.answered) {
                    this.selectAnswer(optionIndex, options[optionIndex]);
                }
            }
            
            if (e.key === 'Enter' || e.key === ' ') {
                const nextBtn = document.getElementById('next-btn');
                if (nextBtn && nextBtn.style.display !== 'none') {
                    e.preventDefault();
                    this.nextQuestion();
                }
            }
        });

        // Category change handler
        const categorySelect = document.getElementById('category-select');
        if (categorySelect) {
            categorySelect.addEventListener('change', () => {
                this.addSelectAnimation(categorySelect);
            });
        }
    }

    startBackgroundAnimations() {
        // Add dynamic elements to the background
        this.createFloatingElements();
        
        // Update timer display with smooth animations
        setInterval(() => {
            this.updateDynamicElements();
        }, 60000); // Update every minute
    }

    createFloatingElements() {
        // Create subtle floating elements for visual interest
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                animation: float ${Math.random() * 10 + 15}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            container.appendChild(element);
        }

        // Add CSS animation for floating elements
        if (!document.getElementById('floating-animation')) {
            const style = document.createElement('style');
            style.id = 'floating-animation';
            style.textContent = `
                @keyframes float {
                    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    updateDynamicElements() {
        // Update any dynamic visual elements
        const streakElement = document.getElementById('streak-number');
        if (streakElement) {
            streakElement.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                streakElement.style.animation = '';
            }, 1000);
        }
    }

    addSelectAnimation(element) {
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.4)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '';
        }, 200);
    }

    getRandomQuestions(count = 10, excludeUsed = false, customPool = null) {
        let pool = customPool || this.questionPool;
        if (!pool || pool.length === 0) {
            console.error('Question pool is empty.');
            return [];
        }

        let availableQuestions = [...pool];
        
        if (excludeUsed && pool.length > 10) {
            availableQuestions = pool.filter((q, index) => !this.usedQuestions.has(index));
            if (availableQuestions.length < count) {
                this.usedQuestions.clear();
                this.saveUsedQuestions();
                availableQuestions = [...pool];
            }
        }

        // Fisher-Yates shuffle
        for (let i = availableQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
        }

        const selected = availableQuestions.slice(0, count);
        
        if (excludeUsed) {
            selected.forEach((q, index) => {
                const originalIndex = pool.findIndex(pq => pq.question === q.question);
                if (originalIndex !== -1) {
                    this.usedQuestions.add(originalIndex);
                }
            });
            this.saveUsedQuestions();
        }

        return selected;
    }

    generateDailyQuiz() {
        const today = this.getTodayString();
        const cachedDaily = this.memoryStorage.dailyQuestionsCache;
        
        if (cachedDaily && cachedDaily.date === today) {
            return cachedDaily.questions;
        }

        // Seed-based random generation for consistent daily questions
        const todayNum = new Date().getTime();
        const seed = parseInt(todayNum.toString().slice(-8));
        let random = seed;
        
        function seededRandom() {
            random = (random * 9301 + 49297) % 233280;
            return random / 233280;
        }

        const shuffled = [...this.questionPool];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const dailyQuestions = shuffled.slice(0, 10);
        this.memoryStorage.dailyQuestionsCache = {
            date: today,
            questions: dailyQuestions
        };

        return dailyQuestions;
    }

    saveUsedQuestions() {
        this.memoryStorage.usedQuestions = [...this.usedQuestions];
    }

    loadUsedQuestions() {
        const stored = this.memoryStorage.usedQuestions;
        this.usedQuestions = new Set(stored || []);
        
        if (this.usedQuestions.size > this.questionPool.length * 0.8) {
            this.usedQuestions.clear();
            this.saveUsedQuestions();
        }
    }

    getTodayString() {
        return new Date().toDateString();
    }

    updateStreakDisplay() {
        const currentStreak = this.memoryStorage.dailyStreak;
        const lastDate = this.memoryStorage.lastDailyDate;
        const today = this.getTodayString();

        const streakElement = document.getElementById('streak-number');
        if (streakElement) {
            streakElement.textContent = currentStreak;
            // Add animation effect
            streakElement.style.animation = 'countUp 0.5s ease-out';
        }

        if (lastDate) {
            const lastDateObj = new Date(lastDate);
            const todayObj = new Date(today);
            const diffTime = Math.abs(todayObj - lastDateObj);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
                this.memoryStorage.dailyStreak = 0;
                if (streakElement) {
                    streakElement.textContent = '0';
                }
            }
        }
    }

    updateStats() {
        const bestStreak = this.memoryStorage.bestStreak;
        const totalCompleted = this.memoryStorage.totalCompleted;

        const bestStreakElement = document.getElementById('best-streak');
        const totalCompletedElement = document.getElementById('total-completed');

        if (bestStreakElement) {
            bestStreakElement.textContent = bestStreak;
        }
        if (totalCompletedElement) {
            totalCompletedElement.textContent = totalCompleted;
        }
    }

    checkDailyQuizStatus() {
        const today = this.getTodayString();
        const lastDailyDate = this.memoryStorage.lastDailyDate;
        const dailyBtn = document.getElementById('daily-btn');
        const statusElement = document.getElementById('streak-status');

        if (dailyBtn) {
            if (lastDailyDate === today) {
                dailyBtn.textContent = 'Completed Today! ✓';
                dailyBtn.disabled = true;
                dailyBtn.style.opacity = '0.6';
                dailyBtn.style.cursor = 'not-allowed';
                
                if (statusElement) {
                    statusElement.textContent = 'Daily quiz completed! Come back tomorrow.';
                }
            } else {
                dailyBtn.textContent = 'Daily Challenge';
                dailyBtn.disabled = false;
                dailyBtn.style.opacity = '1';
                dailyBtn.style.cursor = 'pointer';
                
                if (statusElement) {
                    statusElement.textContent = 'Complete today\'s quiz to maintain your streak!';
                }
            }
        }
    }

    startQuiz(mode = 'quick') {
        if (this.questionPool.length === 0) {
            console.error('Cannot start quiz: No questions loaded');
            this.showErrorMessage('Error: No questions available. Please refresh the page.');
            return;
        }

        this.quizMode = mode;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalTime = 0;
        this.startTime = Date.now();

        const selectedCategory = document.getElementById('category-select')?.value || 'All';
        let filteredPool = this.questionPool;

        if (selectedCategory !== 'All') {
            filteredPool = this.questionPool.filter(q => 
                q.category && q.category.toLowerCase() === selectedCategory.toLowerCase()
            );
            
            if (filteredPool.length === 0) {
                filteredPool = this.questionPool; // Fallback to all questions
            }
        }

        if (mode === 'daily') {
            this.currentQuiz = this.generateDailyQuiz();
        } else {
            this.currentQuiz = this.getRandomQuestions(10, true, filteredPool);
        }

        this.transitionToQuiz();
    }

    transitionToQuiz() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const quizInterface = document.getElementById('quiz-interface');

        // Smooth transition with animation
        if (welcomeScreen) {
            welcomeScreen.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                welcomeScreen.classList.add('hidden');
                if (quizInterface) {
                    quizInterface.classList.remove('hidden');
                    quizInterface.style.animation = 'fadeIn 0.4s ease-out forwards';
                }
                this.loadQuestion();
            }, 300);
        }
    }

    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #ff6b6b, #ffd93d);
                color: white;
                padding: 1rem 2rem;
                border-radius: 12px;
                margin: 1rem 0;
                text-align: center;
                font-weight: 600;
                box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
            ">
                ⚠️ ${message}
            </div>
        `;
        
        const container = document.querySelector('.quiz-container');
        if (container) {
            container.insertBefore(errorDiv, container.firstChild);
            setTimeout(() => errorDiv.remove(), 5000);
        }
    }

    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 10) {
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                    timerElement.style.animation = 'pulse 0.5s ease-in-out infinite';
                }
            }
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                if (!this.answered) {
                    this.selectAnswer(-1, null);
                }
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = this.timeLeft;
            
            if (this.timeLeft <= 10) {
                timerElement.style.color = '#ff6b6b';
                timerElement.classList.add('warning');
            } else {
                timerElement.style.color = '';
                timerElement.classList.remove('warning');
                timerElement.style.animation = '';
            }
        }
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    loadQuestion() {
        if (this.currentQuestion >= this.currentQuiz.length) {
            this.showResults();
            return;
        }

        const question = this.currentQuiz[this.currentQuestion];
        this.selectedAnswer = null;
        this.answered = false;

        // Update progress
        const progress = (this.currentQuestion / this.currentQuiz.length) * 100;
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');

        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        if (progressText) {
            progressText.textContent = `Question ${this.currentQuestion + 1} of ${this.currentQuiz.length}`;
        }

        // Load question content
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.textContent = question.question;
        }

        // Load options
        this.loadOptions(question);

        // Hide next button
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.style.display = 'none';
        }

        // Add fade animation
        const questionCard = document.getElementById('question-card');
        if (questionCard) {
            questionCard.classList.remove('fade-in');
            setTimeout(() => questionCard.classList.add('fade-in'), 10);
        }

        this.startTimer();
    }

    loadOptions(question) {
        const optionsContainer = document.getElementById('options-container');
        if (!optionsContainer) return;

        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = `${index + 1}. ${option}`;
            optionElement.onclick = () => this.selectAnswer(index, optionElement);
            
            // Add keyboard hint
            optionElement.title = `Press ${index + 1} to select`;
            
            optionsContainer.appendChild(optionElement);
            
            // Add stagger animation
            setTimeout(() => {
                optionElement.style.animation = 'slideIn 0.3s ease-out forwards';
            }, index * 100);
        });
    }

    selectAnswer(answerIndex, optionElement) {
        if (this.answered) return;

        this.selectedAnswer = answerIndex;
        this.answered = true;
        this.stopTimer();

        const question = this.currentQuiz[this.currentQuestion];
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(option => option.style.pointerEvents = 'none');

        if (optionElement) {
            optionElement.classList.add('selected');
        }

        // Show correct/incorrect answers with animation
        setTimeout(() => {
            this.revealAnswers(question, options);
        }, 300);
    }

    revealAnswers(question, options) {
        const correctIndex = question.options.findIndex(opt =>
            opt.trim().toLowerCase() === question.answer.trim().toLowerCase()
        );

        options.forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
                option.style.animation = 'correctAnswer 0.5s ease-out';
            } else if (index === this.selectedAnswer && index !== correctIndex) {
                option.classList.add('incorrect');
                option.style.animation = 'incorrectAnswer 0.5s ease-out';
            }
        });

        // Update score
        if (this.selectedAnswer === correctIndex) {
            this.score++;
            const currentScoreElement = document.getElementById('current-score');
            if (currentScoreElement) {
                currentScoreElement.textContent = this.score;
                currentScoreElement.style.animation = 'scoreUp 0.5s ease-out';
            }
            
            const timeBonus = Math.max(0, this.timeLeft * 2);
            this.totalTime += (30 - this.timeLeft);
            
            // Add celebration effect for correct answers
            this.showCorrectFeedback();
        } else {
            this.showIncorrectFeedback();
        }

        // Show next button with delay
        setTimeout(() => {
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) {
                if (this.currentQuestion < this.currentQuiz.length - 1) {
                    nextBtn.textContent = 'Next Question →';
                } else {
                    nextBtn.textContent = 'View Results 🏆';
                }
                nextBtn.style.display = 'inline-block';
                nextBtn.style.animation = 'slideUp 0.3s ease-out';
            }
        }, 800);
    }

    showCorrectFeedback() {
        // Add subtle correct answer effect
        const questionCard = document.getElementById('question-card');
        if (questionCard) {
            questionCard.style.boxShadow = '0 0 30px rgba(67, 233, 123, 0.3)';
            setTimeout(() => {
                questionCard.style.boxShadow = '';
            }, 1000);
        }
    }

    showIncorrectFeedback() {
        // Add subtle incorrect answer effect
        const questionCard = document.getElementById('question-card');
        if (questionCard) {
            questionCard.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                questionCard.style.animation = '';
            }, 500);
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        this.loadQuestion();
    }

    showResults() {
        this.stopTimer();
        
        const quizInterface = document.getElementById('quiz-interface');
        const resultsScreen = document.getElementById('results-screen');

        // Smooth transition
        if (quizInterface) {
            quizInterface.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                quizInterface.classList.add('hidden');
                if (resultsScreen) {
                    resultsScreen.classList.remove('hidden');
                    resultsScreen.style.animation = 'fadeIn 0.4s ease-out forwards';
                }
                this.displayResults();
            }, 300);
        }
    }

    displayResults() {
        const percentage = Math.round((this.score / this.currentQuiz.length) * 100);
        const avgTime = Math.round(this.totalTime / this.currentQuiz.length);
        const totalQuizTime = Math.round((Date.now() - this.startTime) / 1000);

        // Display final score with animation
        const finalScoreElement = document.getElementById('final-score');
        if (finalScoreElement) {
            finalScoreElement.textContent = `${this.score}/${this.currentQuiz.length} (${percentage}%)`;
            finalScoreElement.style.animation = 'scoreReveal 0.8s ease-out';
        }

        // Performance feedback
        let performanceText = this.getPerformanceText(percentage);
        const performanceTextElement = document.getElementById('performance-text');
        const timeStatsElement = document.getElementById('time-stats');

        if (performanceTextElement) {
            performanceTextElement.textContent = performanceText;
        }
        if (timeStatsElement) {
            timeStatsElement.textContent = `Avg: ${avgTime}s per question | Total: ${totalQuizTime}s`;
        }

        // Update statistics
        this.updateCompletionStats();
        
        // Handle streak updates
        this.handleStreakUpdate();

        // Complete progress bar
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = '100%';
        }
    }

    getPerformanceText(percentage) {
        if (percentage >= 90) return '🏆 Outstanding! You\'re a quiz master!';
        if (percentage >= 80) return '🌟 Excellent work! Very impressive!';
        if (percentage >= 70) return '👍 Good job! Keep it up!';
        if (percentage >= 60) return '👌 Not bad! Room for improvement.';
        return '💪 Keep practicing! You\'ll get better!';
    }

    updateCompletionStats() {
        this.memoryStorage.totalCompleted++;
    }

    handleStreakUpdate() {
        const streakResult = this.updateDailyStreak(true);
        const streakUpdateElement = document.getElementById('streak-update');

        if (streakUpdateElement) {
            if (this.quizMode === 'daily' && streakResult.isNew) {
                let streakMessage = `🔥 Daily streak: ${streakResult.streak} days!`;
                if (streakResult.isBest) {
                    streakMessage += ' 🆕 New personal best!';
                }
                streakUpdateElement.innerHTML = streakMessage;
                streakUpdateElement.style.display = 'block';
                streakUpdateElement.style.animation = 'slideIn 0.5s ease-out';

                const resultsTitle = document.getElementById('results-title');
                if (resultsTitle) {
                    resultsTitle.textContent = '🎉 Daily Challenge Complete!';
                }
            } else if (this.quizMode === 'daily') {
                streakUpdateElement.innerHTML = '✅ Daily quiz already completed today!';
                streakUpdateElement.style.display = 'block';
            } else {
                streakUpdateElement.style.display = 'none';
            }
        }
    }

    updateDailyStreak(completed = false) {
        const today = this.getTodayString();
        const lastDate = this.memoryStorage.lastDailyDate;
        const currentStreak = this.memoryStorage.dailyStreak;
        const bestStreak = this.memoryStorage.bestStreak;

        if (completed && this.quizMode === 'daily') {
            let newStreak = currentStreak;

            if (lastDate === today) {
                return { streak: currentStreak, isNew: false };
            }

            if (lastDate) {
                const lastDateObj = new Date(lastDate);
                const todayObj = new Date(today);
                const diffTime = Math.abs(todayObj - lastDateObj);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    newStreak = currentStreak + 1;
                } else if (diffDays > 1) {
                    newStreak = 1;
                }
            } else {
                newStreak = 1;
            }

            this.memoryStorage.dailyStreak = newStreak;
            this.memoryStorage.lastDailyDate = today;

            if (newStreak > bestStreak) {
                this.memoryStorage.bestStreak = newStreak;
            }

            return { 
                streak: newStreak, 
                isNew: true, 
                isBest: newStreak > bestStreak 
            };
        }

        return { streak: currentStreak, isNew: false };
    }

    restartQuiz() {
        // Reset all quiz state
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.answered = false;
        this.totalTime = 0;
        this.stopTimer();

        // Reset UI elements
        const currentScoreElement = document.getElementById('current-score');
        const timerElement = document.getElementById('timer');
        const resultsScreen = document.getElementById('results-screen');
        const welcomeScreen = document.getElementById('welcome-screen');

        if (currentScoreElement) currentScoreElement.textContent = '0';
        if (timerElement) {
            timerElement.classList.remove('warning');
            timerElement.style.animation = '';
            timerElement.style.color = '';
        }

        // Smooth transition back to welcome screen
        if (resultsScreen) {
            resultsScreen.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                resultsScreen.classList.add('hidden');
                if (welcomeScreen) {
                    welcomeScreen.classList.remove('hidden');
                    welcomeScreen.style.animation = 'fadeIn 0.4s ease-out forwards';
                }
            }, 300);
        }

        // Update displays
        this.updateStreakDisplay();
        this.updateStats();
        this.checkDailyQuizStatus();
    }
}

// Global quiz instance
let quizApp;

// Global functions for HTML onclick events
function startQuiz(mode) {
    if (quizApp) {
        quizApp.startQuiz(mode);
    }
}

function nextQuestion() {
    if (quizApp) {
        quizApp.nextQuestion();
    }
}

function restartQuiz() {
    if (quizApp) {
        quizApp.restartQuiz();
    }
}

// Add additional CSS animations
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes correctAnswer {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes incorrectAnswer {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        @keyframes countUp {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        @keyframes scoreUp {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); color: #43e97b; }
            100% { transform: scale(1); }
        }

        @keyframes scoreReveal {
            0% { opacity: 0; transform: scale(0.5); }
            50% { transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .warning {
            animation: pulse 0.5s ease-in-out infinite !important;
            color: #ff6b6b !important;
        }

        .error-message {
            animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 QuickQuiz Professional Edition Loading...');
    
    // Add animation styles
    addAnimationStyles();
    
    // Initialize the quiz app with a small delay to ensure all elements are loaded
    setTimeout(() => {
        quizApp = new QuickQuiz();
        
        // Add some visual polish
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
    }, 100);
});

// Handle page visibility changes to pause/resume timers
document.addEventListener('visibilitychange', function() {
    if (quizApp && quizApp.timer) {
        if (document.hidden) {
            // Page is hidden, you might want to pause the timer
            console.log('Page hidden - timer continues running');
        } else {
            // Page is visible again
            console.log('Page visible - timer active');
        }
    }
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Add any responsive adjustments if needed
    const container = document.querySelector('.quiz-container');
    if (container && window.innerWidth < 768) {
        container.style.padding = '1rem';
    } else if (container) {
        container.style.padding = '2rem';
    }
});

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QuickQuiz,
        startQuiz,
        nextQuestion,
        restartQuiz
    };
}