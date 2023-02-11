// Obtener jobs de api//

const getJobs = async () => {
const response = await fetch(`${BASE_URL}/jobs`);
const data = await response.json();

renderJobs(data);
}

getJobs()

const getJob = async (id) => {
    const response = await fetch(`${BASE_URL}/jobs/${id}`);
    const data = await response.json();
    
    seeViewJob(data)
    }

    
const getJobToEdit = async (id) => {
    const response = await fetch(`${BASE_URL}/jobs/${id}`);
    const data = await response.json();
    return data;
}
