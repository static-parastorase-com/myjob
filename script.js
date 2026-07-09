const questions = [
  {
    kn: '2026ರ ಅಭ್ಯಾಸ ದೃಷ್ಟಿಯಿಂದ ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಕಾನ್ಸ್‌ಟೇಬಲ್ ಕರ್ತವ್ಯದಲ್ಲಿ “ಜನಸ್ನೇಹಿ ಪೊಲೀಸ್” ಎಂದರೆ ಏನು?',
    en: 'In 2026 practice logic, what does “people-friendly policing” mean for a Karnataka Police Constable?',
    options: ['Public help with lawful, respectful service / ಕಾನೂನುಬದ್ಧ ಗೌರವಯುತ ಜನಸೇವೆ', 'Only traffic fine collection / ಕೇವಲ ಟ್ರಾಫಿಕ್ ದಂಡ', 'Ignoring complaints / ದೂರುಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸುವುದು', 'Using force first / ಮೊದಲು ಬಲಪ್ರಯೋಗ'],
    answer: 0
  },
  {
    kn: 'ಭಾರತ ಸಂವಿಧಾನದ ಯಾವ ವಿಧಿ ಸಮಾನತೆಯ ಹಕ್ಕಿಗೆ ಸಂಬಂಧಿಸಿದೆ?',
    en: 'Which Article of the Indian Constitution relates to equality before law?',
    options: ['Article 14 / ವಿಧಿ 14', 'Article 21A / ವಿಧಿ 21A', 'Article 32 / ವಿಧಿ 32', 'Article 370 / ವಿಧಿ 370'],
    answer: 0
  },
  {
    kn: 'ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಯಾವುದು?',
    en: 'What is the capital of Karnataka?',
    options: ['Mysuru / ಮೈಸೂರು', 'Bengaluru / ಬೆಂಗಳೂರು', 'Mangaluru / ಮಂಗಳೂರು', 'Belagavi / ಬೆಳಗಾವಿ'],
    answer: 1
  },
  {
    kn: 'FIR ನ ಪೂರ್ಣ ರೂಪ ಯಾವುದು?',
    en: 'What is the full form of FIR?',
    options: ['First Information Report', 'Final Investigation Register', 'Force Incident Rule', 'Field Intelligence Record'],
    answer: 0
  },
  {
    kn: 'ಸೈಬರ್ ಅಪರಾಧದ ಬಗ್ಗೆ ದೂರು ನೀಡಲು ಭಾರತದಲ್ಲಿ ಬಳಸುವ ಪ್ರಮುಖ ಪೋರ್ಟಲ್ ಯಾವುದು?',
    en: 'Which major portal is used in India to report cyber crime?',
    options: ['DigiLocker', 'National Cyber Crime Reporting Portal', 'UMANG Weather', 'Passport Seva'],
    answer: 1
  },
  {
    kn: '24, 30 ಮತ್ತು 36ರ HCF ಎಷ್ಟು?',
    en: 'What is the HCF of 24, 30 and 36?',
    options: ['3', '6', '12', '18'],
    answer: 1
  },
  {
    kn: 'ಸರಣಿ ಪೂರ್ಣಗೊಳಿಸಿ: 2, 4, 8, 16, __',
    en: 'Complete the series: 2, 4, 8, 16, __',
    options: ['20', '24', '32', '64'],
    answer: 2
  },
  {
    kn: 'ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಕಾನ್ಸ್‌ಟೇಬಲ್‌ಗೆ ಸಾರ್ವಜನಿಕ ಸ್ಥಳದಲ್ಲಿ ಅನುಮಾನಾಸ್ಪದ ವಸ್ತು ಕಂಡರೆ ಮೊದಲ ಕ್ರಮ ಯಾವುದು?',
    en: 'If a constable finds a suspicious object in a public place, what is the first action?',
    options: ['Touch and open it / ಮುಟ್ಟಿ ತೆರೆಯುವುದು', 'Secure area and inform seniors/bomb squad / ಪ್ರದೇಶ ಸುರಕ್ಷಿತಗೊಳಿಸಿ ಮೇಲಾಧಿಕಾರಿ/ಬಾಂಬ್ ದಳಕ್ಕೆ ತಿಳಿಸುವುದು', 'Ignore it / ನಿರ್ಲಕ್ಷಿಸುವುದು', 'Take it home / ಮನೆಗೆ ತೆಗೆದುಕೊಂಡು ಹೋಗುವುದು'],
    answer: 1
  },
  {
    kn: 'ಭಾರತದಲ್ಲಿ ಮತದಾನದ ಕನಿಷ್ಠ ವಯಸ್ಸು ಎಷ್ಟು?',
    en: 'What is the minimum voting age in India?',
    options: ['16 years', '18 years', '21 years', '25 years'],
    answer: 1
  },
  {
    kn: '2026ರ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ತಯಾರಿಕೆಯಲ್ಲಿ “current affairs” ಓದುವುದು ಏಕೆ ಮುಖ್ಯ?',
    en: 'Why is reading current affairs important for 2026 competitive exam preparation?',
    options: ['Recent events can be asked / ಇತ್ತೀಚಿನ ಘಟನೆಗಳಿಂದ ಪ್ರಶ್ನೆಗಳು ಬರಬಹುದು', 'It replaces mathematics / ಗಣಿತಕ್ಕೆ ಬದಲು ಸಾಕು', 'It is only for sports / ಕ್ರೀಡೆಗೆ ಮಾತ್ರ', 'It is not useful / ಉಪಯೋಗವಿಲ್ಲ'],
    answer: 0
  }
];

const home = document.getElementById('home');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const form = document.getElementById('quizForm');
const progress = document.getElementById('progress');
const scoreBox = document.getElementById('scoreBox');
const review = document.getElementById('review');

function renderQuiz() {
  progress.textContent = `${questions.length} questions / ಪ್ರಶ್ನೆಗಳು`;
  form.innerHTML = questions.map((q, index) => `
    <fieldset class="question">
      <h3>${index + 1}. ${q.kn}<br><span>${q.en}</span></h3>
      <div class="options">
        ${q.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="q${index}" value="${optionIndex}" required>
            <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `).join('');
}

function showResult() {
  const selected = questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
  if (selected.includes(null)) {
    alert('Please answer all questions. / ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.');
    return;
  }

  const correct = selected.filter((choice, index) => choice === questions[index].answer).length;
  const total = questions.length;
  const percentage = ((correct / total) * 100).toFixed(2);

  scoreBox.textContent = `${correct} / ${total} marks (${percentage}%)`;
  review.innerHTML = questions.map((q, index) => {
    const isCorrect = selected[index] === q.answer;
    return `
      <article class="review-item">
        <h4>${index + 1}. ${q.kn}<br>${q.en}</h4>
        <p>Your answer / ನಿಮ್ಮ ಉತ್ತರ: <span class="${isCorrect ? 'correct' : 'wrong'}">${q.options[selected[index]]}</span></p>
        <p>Correct answer / ಸರಿಯಾದ ಉತ್ತರ: <span class="correct">${q.options[q.answer]}</span></p>
      </article>
    `;
  }).join('');

  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetTest() {
  form.reset();
  result.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('startTest').addEventListener('click', () => {
  home.classList.add('hidden');
  quiz.classList.remove('hidden');
  quiz.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('submitTest').addEventListener('click', showResult);
document.getElementById('resetTest').addEventListener('click', resetTest);

renderQuiz();
