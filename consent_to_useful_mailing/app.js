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


function fieldValidation(name, value) {
    if (name === 'agreement') {
        return value;
    }
}


form.addEventListener('submit', function (e) {
    let valid = true;

    for (const element of form.elements) {
        if (!element.name) {
            continue;
        }
        hideError(element)

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
    const element = e.target

    hideError(element)

    if (!fieldValidation(element.name, element.value)) {
        showError()
    }
})