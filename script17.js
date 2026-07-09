const rawQuestions = String.raw`
Part 1: Current Affairs / ಪ್ರಚಲಿತ ಘಟನೆಗಳು (Q101 – Q115)
Q101. Which country will host the 2028 Summer Olympic Games?
ಪ್ರಶ್ನೆ 101. 2028 ರ ಬೇಸಿಗೆ ಒಲಿಂಪಿಕ್ ಕ್ರೀಡಾಕೂಟವನ್ನು ಯಾವ ದೇಶವು ಆಯೋಜಿಸಲಿದೆ?
A) France / ಫ್ರಾನ್ಸ್
B) Australia / ಆಸ್ಟ್ರೇಲಿಯಾ
C) USA / ಅಮೆರಿಕ (ಲಾಸ್ ಏಂಜಲೀಸ್)
D) Japan / ಜಪಾನ್
Answer/ಉತ್ತರ: C) USA / ಅಮೆರಿಕ (ಲಾಸ್ ಏಂಜಲೀಸ್)

Q102. What is the official theme of International Women's Day 2024?
ಪ್ರಶ್ನೆ 102. 2024 ರ ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಹಿಳಾ ದಿನದ ಅಧಿಕೃತ ಘೋಷವಾಕ್ಯ (Theme) ಏನು?
A) Choose to Challenge / ಚೂಸ್ ಟು ಚಾಲೆಂಜ್
B) Invest in women: Accelerate progress / ಮಹಿಳೆಯರಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ: ಪ್ರಗತಿಯನ್ನು ವೇಗಗೊಳಿಸಿ
C) DigitALL: Innovation and technology for gender equality / ಡಿಜಿಟ್ ಆಲ್: ಲಿಂಗ ಸಮಾನತೆಗಾಗಿ ತಂತ್ರಜ್ಞಾನ
D) Break the Bias / ಬ್ರೇಕ್ ದಿ ಬಯಾಸ್
Answer/ಉತ್ತರ: B) Invest in women: Accelerate progress / ಮಹಿಳೆಯರಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ: ಪ್ರಗತಿಯನ್ನು ವೇಗಗೊಳಿಸಿ

Q103. Under the 'Gruha Jyothi' scheme of the Karnataka Government, how many units of free electricity are provided per month?
ಪ್ರಶ್ನೆ 103. ಕರ್ನಾಟಕ ಸರ್ಕಾರದ 'ಗೃಹ ಜ್ಯೋತಿ' ಯೋಜನೆಯಡಿ ಪ್ರತಿ ತಿಂಗಳು ಎಷ್ಟು ಯೂನಿಟ್‌ಗಳವರೆಗೆ ಉಚಿತ ವಿದ್ಯುತ್ ಒದಗಿಸಲಾಗುತ್ತದೆ?
A) 100 units / 100 ಯೂನಿಟ್
B) 150 units / 150 ಯೂನಿಟ್
C) 200 units / 200 ಯೂನಿಟ್
D) 250 units / 250 ಯೂನಿಟ್
Answer/ಉತ್ತರ: C) 200 units / 200 ಯೂನಿಟ್

Q104. Which film won the Best Feature Film award at the 69th National Film Awards?
ಪ್ರಶ್ನೆ 104. 69 ನೇ ರಾಷ್ಟ್ರೀಯ ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಯನ್ನು ಗೆದ್ದ ಚಿತ್ರ ಯಾವುದು?
A) RRR / ಆರ್.ಆರ್.ಆರ್
B) Pushpa / ಪುಷ್ಪ
C) Rocketry: The Nambi Effect / ರಾಕೆಟ್ರಿ: ದಿ ನಂಬಿ ಎಫೆಕ್ಟ್
D) Kantara / ಕಾಂತಾರ
Answer/ಉತ್ತರ: C) Rocketry: The Nambi Effect / ರಾಕೆಟ್ರಿ: ದಿ ನಂಬಿ ಎಫೆಕ್ಟ್

Q105. 'Operation Ganga' was a rescue mission launched by India to evacuate its citizens from:
ಪ್ರಶ್ನೆ 105. 'ಆಪರೇಷನ್ ಗಂಗಾ' (Operation Ganga) ಎಂಬುದು ಭಾರತೀಯರನ್ನು ಯಾವ ದೇಶದಿಂದ ರಕ್ಷಿಸಲು ಕೈಗೊಂಡ ಕಾರ್ಯಾಚರಣೆಯಾಗಿದೆ?
A) Afghanistan / ಅಫ್ಘಾನಿಸ್ತಾನ
B) Ukraine / ಉಕ್ರೇನ್
C) Sudan / ಸುಡಾನ್
D) Turkey / ಟರ್ಕಿ
Answer/ಉತ್ತರ: B) Ukraine / ಉಕ್ರೇನ್ (Operation Dost was for Turkey).
`;

const generatedQuestions = [];
const base = [...rawQuestions.matchAll(/Q(\d+)\.\s*([^\n]+)\n(ಪ್ರಶ್ನೆ\s+\d+\.\s*[^\n]+)\nA\)\s*([^\n]+)\nB\)\s*([^\n]+)\nC\)\s*([^\n]+)\nD\)\s*([^\n]+)\nAnswer\/ಉತ್ತರ:\s*([A-D])\)\s*([^\n]+)/g)];
const questionData = base.map((match) => {
  const [, number, enQuestion, knQuestion, a, b, c, d, letter, answerText] = match;
  return {
    cat: 'Current Affairs / ಪ್ರಚಲಿತ ಘಟನೆಗಳು',
    kn: knQuestion,
    en: `Q${number}. ${enQuestion}`,
    options: [a, b, c, d],
    answer: letter.charCodeAt(0) - 65,
    summary: answerText.trim()
  };
});

const questions = questionData;
const form = document.getElementById('quizForm');
const result = document.getElementById('result');
const progress = document.getElementById('progress');
const scoreBox = document.getElementById('scoreBox');
const review = document.getElementById('review');
const ANSWER_MARK = 1;
const WRONG_PENALTY = 0.25;

function renderQuiz() {
  progress.textContent = `${questions.length} questions / ಪ್ರಶ್ನೆಗಳು`;
  form.innerHTML = questions.map((q, index) => `
    <fieldset class="question">
      <h3>${index + 1}. <small>${q.cat}</small><br>${q.kn}<br><span>${q.en}</span></h3>
      <div class="options">${q.options.map((option, optionIndex) => `
        <label class="option"><input type="radio" name="q${index}" value="${optionIndex}" required><span>${String.fromCharCode(65 + optionIndex)}. ${option}</span></label>
      `).join('')}</div>
    </fieldset>`).join('');
}

function showResult() {
  const selected = questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
  if (selected.includes(null)) { alert(`Please answer all ${questions.length} questions. / ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.`); return; }
  const correct = selected.filter((choice, index) => choice === questions[index].answer).length;
  const wrong = questions.length - correct;
  const score = Math.max(0, (correct * ANSWER_MARK) - (wrong * WRONG_PENALTY));
  scoreBox.innerHTML = `${score.toFixed(2)} / ${questions.length} marks (${((score / questions.length) * 100).toFixed(2)}%)<br><small>Correct: ${correct}, Wrong: ${wrong}, Negative: ${wrong} × ${WRONG_PENALTY}</small>`;
  review.innerHTML = questions.map((q, index) => {
    const isCorrect = selected[index] === q.answer;
    return `<article class="review-item"><h4>${index + 1}. ${q.kn}<br>${q.en}</h4><p>Your answer / ನಿಮ್ಮ ಉತ್ತರ: <span class="${isCorrect ? 'correct' : 'wrong'}">${q.options[selected[index]]}</span></p><p>Correct answer / ಸರಿಯಾದ ಉತ್ತರ: <span class="correct">${q.options[q.answer]}</span></p><p class="summary-line"><strong>Answer/ಉತ್ತರ:</strong> ${q.summary}</p></article>`;
  }).join('');
  result.classList.remove('hidden'); result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function resetTest() { form.reset(); result.classList.add('hidden'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
document.getElementById('submitTest').addEventListener('click', showResult);
document.getElementById('resetTest').addEventListener('click', resetTest);
renderQuiz();
