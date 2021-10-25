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
        case 'login':
        case 'password':
            return requireValidation(value);
        default:
            return true;
    }
}


form.addEventListener('submit', function (e) {

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


form.addEventListener('change', function (e) {
    console.log(e)

    const element = e.target

    hideError(element)

    if (!fieldValidation(element.name, element.value)) {
        showError()
    }
})