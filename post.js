// crea job ingresado en formulario y hace post en api//

const createJob = async () => {
    const job = dataForm();

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

    console.log(data);

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



