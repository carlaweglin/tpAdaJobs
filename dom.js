// funciones //

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const renderJobs = (jobs) => {
    $jobsContainer.innerHTML = ''
    for (const {name,description,location,category,seniority} of jobs) {
        $jobsContainer.innerHTML += `
        <div class="column is-4 m-2 p-2">
          <div class="card">
            <div class="card-content">
              <h3>${name}</h3>
              <div class="content">
                ${description}
              </div>
            </div>
            <span class="tag is-link is-normal">${location}</span>
            <span class="tag is-link is-normal">${category}</span>
            <span class="tag is-link is-normal">${seniority}</span>
            <div class="card">
              <footer class="card-footer mt-3">
                <button class="card-footer-item button is-link">See details</button>
              </footer>
            </div>
          </div>
        </div>` 
        
    }

}



// Elementos del DOM //

const BASE_URL = "https://63e18adb65b57fe6065a1676.mockapi.io";
const $createJob = $('#createJob');
const $homeView = $('#homeView');
const $createJobView = $('#createJobView');
const $btnSaveJob = $('#btnSaveJob');
const $inputJobTitle = $('#inputJobTitle');
const $inputJobDescription = $('#inputJobDescription');
const $inputLocation = $('#inputLocation ');
const $inputSeniority = $('#inputCategory');
const $inputCategory = $('#inputCategory');
const $jobsContainer = $('#jobsContainer');





// Eventos //

$createJob.addEventListener('click', () => {
    $homeView.classList.add('is-hidden')
    $createJobView.classList.remove('is-hidden')
})

$btnSaveJob.addEventListener('click', (event) => {
    event.preventDefault()
    createJob();
    $homeView.classList.remove('is-hidden')
    $createJobView.classList.add('is-hidden')
   
})