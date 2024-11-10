const btn = document.querySelectorAll('.step .btn');

const step = document.querySelectorAll('.step')

const inputName = document.getElementById('inputName');
const inputPass1 = document.getElementById('inputPass1');
const inputPass2 = document.getElementById('inputPass2');
const inputPass3 = document.getElementById('inputPass3');
const inputPass4 = document.getElementById('inputPass4');

const outName = document.getElementById('outName');

btn.forEach((button) => {
  button.addEventListener('click', stepNextVisible)
})

function stepNextVisible() {
  const curStep = this.closest('.step');

  function nextStep() {
    curStep.classList.remove('active');
    curStep.classList.add('done');
    curStep.nextElementSibling.classList.add('active');
  }

  if (curStep.classList.contains('step-name')) {
    const name = inputName.value.trim();
    const nameRegex = /^[А-Яа-яЇїІіЄєҐґA-Za-z]+$/;

    if (name && nameRegex.test(name)) {
      outName.innerHTML = name;

      nextStep();
    }
  } else if (curStep.classList.contains('step-pass1')) {
    const password = inputPass1.value.trim();

    if (password === '61930') {
      nextStep();
    }

  } else if (curStep.classList.contains('step-pass2')) {
    const password = inputPass2.value.trim();

    if (password === '0816' || password === '1608') {
      nextStep();
    }
  } else if (curStep.classList.contains('step-pass3')) {
    const password = inputPass3.value.trim();

    if (password === '0001') {
      nextStep();
    }
  } else if (curStep.classList.contains('step-pass4')) {
    const password = inputPass4.value.trim().toLowerCase();

    if (password === 'холмс') {
      nextStep();
    }
  } else {
    nextStep();
  }
}
