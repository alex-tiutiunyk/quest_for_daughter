const btn_1 = document.querySelector('#step-1 .btn');
const btn_2 = document.querySelector('#step-2 .btn');
const btn_3 = document.querySelector('#step-3 .btn');
const btn_4 = document.querySelector('#step-4 .btn');
const btn_5 = document.querySelector('#step-5 .btn');
const btn_6 = document.querySelector('#step-6 .btn');
const btn_7 = document.querySelector('#step-7 .btn');
const btn_8 = document.querySelector('#step-8 .btn');
const btn_9 = document.querySelector('#step-9 .btn');

const step_1 = document.querySelector('#step-1');
const step_2 = document.querySelector('#step-2');
const step_3 = document.querySelector('#step-3');
const step_4 = document.querySelector('#step-4');
const step_5 = document.querySelector('#step-5');
const step_6 = document.querySelector('#step-6');
const step_7 = document.querySelector('#step-7');
const step_8 = document.querySelector('#step-8');
const step_9 = document.querySelector('#step-9');
const step_10 = document.querySelector('#step-10');

const inputName = document.getElementById('inputName');
const inputPass1 = document.getElementById('inputPass1');
const inputPass2 = document.getElementById('inputPass2');

const outName = document.getElementById('outName');

btn_1.addEventListener('click', step2Visible);
btn_2.addEventListener('click', step3Visible);
btn_3.addEventListener('click', step4Visible);
btn_4.addEventListener('click', step5Visible);
btn_5.addEventListener('click', step6Visible);
btn_6.addEventListener('click', step7Visible);
btn_7.addEventListener('click', step8Visible);
btn_8.addEventListener('click', step9Visible);
btn_9.addEventListener('click', step10Visible);

function step2Visible() {
  step_1.classList.remove('active');
  step_1.classList.add('done');
  step_2.classList.add('active');
}

function step3Visible() {
  const name = inputName.value.trim();
  const nameRegex = /^[А-Яа-яЇїІіЄєҐґA-Za-z]+$/;

  if (name && nameRegex.test(name)) {
    outName.innerHTML = name;
    step_2.classList.remove('active');
    step_2.classList.add('done');
    step_3.classList.add('active')
  }
}

function step4Visible() {
  step_3.classList.remove('active');
  step_3.classList.add('done');
  step_4.classList.add('active')
}

function step5Visible() {
  step_4.classList.remove('active');
  step_4.classList.add('done');
  step_5.classList.add('active')
}

function step6Visible() {
  const password = inputPass1.value.trim();

  // if (password === '61930') {
    step_5.classList.remove('active');
    step_5.classList.add('done');
    step_6.classList.add('active');
  // }
}

function step7Visible() {
  step_6.classList.remove('active');
  step_6.classList.add('done');
  step_7.classList.add('active')
}

function step8Visible() {
  step_7.classList.remove('active');
  step_7.classList.add('done');
  step_8.classList.add('active')
}

function step9Visible() {
  const password = inputPass2.value.trim();

  if (password === '0816' || password === '1608') {
    step_8.classList.remove('active');
    step_8.classList.add('done');
    step_9.classList.add('active')
  }
}

function step10Visible() {
  step_9.classList.remove('active');
  step_9.classList.add('done');
  step_10.classList.add('active')
}