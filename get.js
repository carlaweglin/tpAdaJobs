// Obtener jobs de api//

const getJobs = async () => {
const response = await fetch(`${BASE_URL}/jobs`);
const data = await response.json();

console.log("entro");
console.log(data);
renderJobs(data);
}

getJobs()

const getJob = async (id) => {
    const response = await fetch(`${BASE_URL}/jobs/${id}`);
    const data = await response.json();
    
    seeViewJob(data)
    }

    

