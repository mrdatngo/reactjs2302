const calInput = document.querySelector('.cal-input');
const calResult = document.querySelector('.cal-result');
const calEqualBtn = document.querySelector('.cal-equal');

const calNumBtns = document.querySelectorAll('.cal-btn');

calNumBtns.forEach((calNumBtn) => {
  calNumBtn.addEventListener('click', () => {
    const value = calNumBtn.getAttribute('cal-value');
    calInput.value += value;
  });
});

calEqualBtn.addEventListener('click', () => {
  calResult.innerText = eval(calInput.value);
});
