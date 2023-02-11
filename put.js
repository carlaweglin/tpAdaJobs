const upDateJob = async (id) => {
    try {
        const job = {
            name: $('#inputEditJobTitle').value,
            description: $('#inputEditJobDescription').value,
            location: $('#inputEditLocation').value,
            category: $('#inputEditCategory').value,
            seniority: $('#inputEditSeniority').value
        }
        await fetch(`${BASE_URL}/jobs/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(job)
            }
        );
        
        
    } catch (error) {
        alert(`Error al actualizar job numero ${id}`)
    }
    finally{window.location.href = "index.html"}
    

}