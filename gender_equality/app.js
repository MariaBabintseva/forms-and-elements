const form = document.querySelector('.form')
const err = document.createElement('p')
form.appendChild(err)


function showError(element) {
    element.closest('.form-control').classList.add('error')
}

function hideError(element) {
    element.closest('.form-control').classList.remove('error')
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

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


        const value = form.elements.gender.value

        switch (value) {
            case '':
                return showError(element)
            case 'man':
                return err.textContent = 'Мужчинам вход запрещен!'
            case 'woman':
                return err.textContent = 'Женщинам вход запрещен!'
            default:
                return true;
        }
    }
})


form.addEventListener('change', function (e) {
    err.textContent = ''
    for (const element of form.elements) {
        hideError(element)
    }

})