const form = document.querySelector('.form')


function showError(element) {
    element.classList.add('error')
}



function hideError(element) {
    element.classList.remove('error')
}


function lengthValidation(value) {
    return (value.length > 10) && (value.length !== 0);
}

function replaceClass(element) {
    element.classList.remove('fa-star-o')
    element.classList.add('fa-star')
}

function fieldValidation(name, value) {
    switch (name) {
        case 'comment':
            return lengthValidation(value);
        default:
            return true;
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
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

        if (form.elements.rating.value === '') {
            showError(element.closest('.rating'))
            e.preventDefault()
        }

    }

    const text = document.querySelector('#comment')

    if (valid) {
        console.log(`{ rating: ${form.elements.rating.value}, comment: '${text.value}' }`)
    }


})


form.addEventListener('change', function (e) {

    const element = e.target

    hideError(element)
    hideError(element.closest('.rating'))

    if (!fieldValidation(element.name, element.value)) {
        showError()
    }
})

const rating = document.querySelector('.rating')

const stars = document.querySelectorAll('.fa-star-o')

for (let i = 0; i < stars.length; i++) {

    stars[i].addEventListener('click', function (e) {
        let star = e.target
        replaceClass(star)



        for (let i = 1; i < e.target.dataset.rating; i++) {
            star = stars[i - 1]
            replaceClass(star)
        }

    })


}






