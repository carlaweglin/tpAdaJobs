// Obtener jobs de api//

const getJobs = async () => {
const response = await fetch(`${BASE_URL}/jobs`);
const data = await response.json();

console.log(data);
renderJobs(data);
}

getJobs()