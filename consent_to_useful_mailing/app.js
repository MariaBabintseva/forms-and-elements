const form = document.querySelector('.form')
const err = document.createElement('p')
form.appendChild(err)

function showError(element) {
    element.closest('.form-control').classList.add('error')
    element.classList.add('error')

    err.textContent = 'Без согласия на полезную рассылку отправить форму невозможно'

}

function hideError(element) {
    element.closest('.form-control').classList.remove('error')
    element.classList.remove('error')
    err.textContent = ''
}


function checkedValidation(value) {
    return value;
}

function fieldValidation(name, value) {
    switch (name) {
        case 'agreement':
            return checkedValidation(value)
        default:
            return true;
    }
}


form.addEventListener('submit', function (e) {
    console.log(form.elements)
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

        const value = element.checked

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