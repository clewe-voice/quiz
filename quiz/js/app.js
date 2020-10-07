const correctAnswer = ['B', 'A', 'A', 'C', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'A', 'C', 'B', 'C', 'D' ];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += (100/17)
    }
  });
  console.log(score);
  scrollTo(0,0);
  result.classList.remove('d-none');
  result.classList.add('d-block');
  let i = 0;
  const timer = setInterval( () => {
    result.querySelector('span').textContent = `${i} %`;
    if (i>=score) {
      clearInterval(timer);
    } else {
      i++;
    }
  }, 10);
});
