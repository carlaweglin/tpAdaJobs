// funciones //

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const renderJobs = (jobs) => {
    $jobsContainer.innerHTML = ''
    for (const {name,description,location,category,seniority,id} of jobs) {
        $jobsContainer.innerHTML += `
        <div class="column is-4 m-2 p-2">
          <div class="card">
            <div class="card-content">
              <h5 class="title is-5 is-spaced">${name}</h5>
              <div class="content">
              <p>
                ${description}
                </p>
              </div>
            </div>
            <span class="tag is-link is-normal">${location}</span>
            <span class="tag is-link is-normal">${category}</span>
            <span class="tag is-link is-normal">${seniority}</span>
            <div class="card">
              <footer class="card-footer mt-3">
                <button class="card-footer-item button is-link" onClick='getJob("${id}")'>See details</button>
              </footer>
            </div>
          </div>
        </div>` 
        
    }

}

const seeViewJob = (selectJob) => {
    $homeView.classList.add('is-hidden')
    $viewSelectJob.classList.remove('is-hidden')
    $viewSelectJob.innerHTML = ''
    $viewSelectJob.innerHTML += `
    <div class="column is-4 m-2 p-2">
      <div class="card">
        <div class="card-content">
          <h5 class="title is-5 is-spaced">${selectJob.name}</h5>
          <div class="content">
          <p>
            ${selectJob.description}
            </p>
          </div>
        </div>
        <span class="tag is-link is-normal">${selectJob.location}</span>
        <span class="tag is-link is-normal">${selectJob.category}</span>
        <span class="tag is-link is-normal">${selectJob.seniority}</span>
        <div class="card">
          <footer class="card-footer mt-3">
            <button class="card-footer-item button is-primary" onClick='editSelectJob("${selectJob.id}")'>Edit</button>
            <button class="card-footer-item button is-danger" onClick='deleteJob("${selectJob.id}")'>Delete</button>
          </footer>
        </div>
      </div>
    </div>`
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
const $viewSelectJob = $('#viewSelectJob');
const $editJobView = $('#editJobView');
const $btnSaveEditJob = $('#btnSaveEditJob');
const $btnEditJob = $('#btnEditJob');
const $formEditJob = $ ('#formEditJob')







// Eventos //

$createJob.addEventListener('click', () => {
    $homeView.classList.add('is-hidden')
    $viewSelectJob.classList.add('is-hidden')
    $createJobView.classList.remove('is-hidden')
    $('#formCreateJob').reset();
})

$btnSaveJob.addEventListener('click', (event) => {
    event.preventDefault()
    createJob();
    setTimeout(getJobs, 200);
    $homeView.classList.remove('is-hidden')
    $createJobView.classList.add('is-hidden')
   
})

$('#btnCancelCreateJob').addEventListener('click', (event) => {
    event.preventDefault();
    $homeView.classList.remove('is-hidden')
    $viewSelectJob.classList.remove('is-hidden')
    $createJobView.classList.add('is-hidden')
})

$('#btnCancelEditJob').addEventListener('click', (event) => {
    event.preventDefault()
    $viewSelectJob.classList.remove('is-hidden');
    $editJobView.classList.add('is-hidden');
    $formEditJob.classList.add('is-hidden');
})

$btnSaveEditJob.addEventListener('click', (e) => {
    upDateJob(e.target.getAttribute('data-id'))
})
