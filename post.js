// crea job ingresado en formulario y hace post en api//

const createJob = async () => {

    const job = dataForm();
    console.log("1");
    const response = await fetch(`${BASE_URL}/jobs`,
        {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(job)
        }
    );
    const data = await response.json();



}

const dataForm = () => {
    const job = {
        name: $inputJobTitle.value,
        description: $inputJobDescription.value,
        location: $inputLocation.value,
        category: $inputCategory.value,
        seniority: $inputSeniority.value

    }
    return job
}


const editSelectJob = async (id) => {
    $viewSelectJob.classList.add('is-hidden');
    $editJobView.classList.remove('is-hidden');
    $formEditJob.classList.remove('is-hidden');
    const selectJob = await getJobToEdit(id)
    console.log(selectJob);
    const { name, description, location, seniority, category } = selectJob;

    $('#inputEditJobTitle').value = name;
    $('#inputEditJobDescription').value = description;
    $('#inputEditLocation').value = location;
    $('#inputEditSeniority').value = seniority;
    $('#inputEditCategory').value = category;
}


