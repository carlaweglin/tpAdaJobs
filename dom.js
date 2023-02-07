// funciones //

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const BASE_URL = "https://63e18adb65b57fe6065a1676.mockapi.io";



// Elementos del DOM //

const $createJob = $('#createJob');
const $homeView = $('#homeView');
const $createJobView = $('#createJobView');
const $btnSaveJob = $('#btnSaveJob');
const $inputJobTitle = $('#inputJobTitle');
const $inputJobDescription = $('#inputJobDescription');
const $inputLocation = $('#inputJobDescription');
const $inputSeniority = $('#inputJobDescription');
const $inputCategory = $('#inputJobDescription');





// Eventos //

$createJob.addEventListener('click', () => {
    $homeView.classList.add('is-hidden')
    $createJobView.classList.remove('is-hidden')
})

$btnSaveJob.addEventListener('click', (event) => {
    event.preventDefault()
    createJob();
   
})