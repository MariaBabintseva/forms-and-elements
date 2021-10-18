const form = document.querySelector('.form')


function showError(element) {
    element.classList.add('error')
}

function hideError(element) {
    element.classList.remove('error')
}

function requireValidation(value) {
    return value.trim().length !== 0;
}


function fieldValidation(name, value) {
    switch (name) {
        case 'city':
            return requireValidation(value);
        default:
            return true;
    }
}


form.addEventListener('submit', function (e) {
    console.log(e)

    /* const option = document.querySelectorAll('option')
 
     for (let i = 0; i < option.length; i++) {
         console.log(option[i].textContent)
     }*/

    for (const element of form.elements) {


        console.log(element);
    }


    let valid = true;

    for (const element of form.elements) {
        if (!element.name) {
            continue;
        }
        hideError(element)
    }


    for (const element of form.elements) {
        if (!element.name) {
            continue;
        }

        const value = element.value;


        if (!fieldValidation(element.name, value)) {
            valid = false;
            showError(element);
        }
    }

    if (!valid) {
        e.preventDefault()
    }

})

