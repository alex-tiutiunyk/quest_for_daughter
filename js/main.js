const btn_1 = document.querySelector('#step-1 .btn');
const btn_2 = document.querySelector('#step-2 .btn');
const btn_3 = document.querySelector('#step-3 .btn');
const btn_4 = document.querySelector('#step-4 .btn');

const step_1 = document.querySelector('#step-1');
const step_2 = document.querySelector('#step-2');
const step_3 = document.querySelector('#step-3');
const step_4 = document.querySelector('#step-4');

const inputName = document.getElementById('inputName');

const outName = document.getElementById('outName');

btn_1.addEventListener('click', step2Visible);
btn_2.addEventListener('click', step3Visible);
btn_3.addEventListener('click', step4Visible);

function step2Visible() {
  step_1.classList.remove('active');
  step_1.classList.add('done');
  step_2.classList.add('active');
  btn_1.removeEventListener('click', step2Visible);
}

function step3Visible() {
  const name = inputName.value.trim();
  const nameRegex = /^[А-Яа-яЇїІіЄєҐґA-Za-z]+$/;

  if (name && nameRegex.test(name)) {
    outName.innerHTML = name;
    step_2.classList.remove('active');
    step_2.classList.add('done');
    step_3.classList.add('active')
    btn_2.removeEventListener('click', step2Visible);
  }
}

function step4Visible() {
  step_3.classList.remove('active');
  step_3.classList.add('done');
  step_4.classList.add('active')
  btn_3.removeEventListener('click', step2Visible);
}