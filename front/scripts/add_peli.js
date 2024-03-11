(function (){
    const form = document.querySelector('#form')

        form.addEventListener('submit', (event)=> {
            if(!form.checkValidity()){
                event.preventDefault()
                event.stopPropagation()
                form.classList.add('was-validated')
            }
            else alert('Mensaje enviado')
        })
})()