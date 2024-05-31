const currentCounter = document.querySelector('[updated-counter]');
const increaseButton = document.querySelector('[increase-button]');
const decreaseButton = document.querySelector('[decrease-button]');
let popup = document.querySelector('.popup')
let popup42 = document.querySelector('[popup-42]')
let popup73 = document.querySelector('[popup-73]')
let popup101 = document.querySelector('[popup-101]')
let popup144 = document.querySelector('[popup-144]')
let popup256 = document.querySelector('[popup-256]')
let popup777 = document.querySelector('[popup-777]')
let popup1234 = document.querySelector('[popup-1234]')
let popup2024 = document.querySelector('[popup-2024]')
let popup88888888 = document.querySelector('[popup-88888888]')
let popup99999999 = document.querySelector('[popup-99999999]')
let popupMinus13 = document.querySelector('[popup-minus-13]')
let popupMinus404 = document.querySelector('[popup-minus-404]')
let popupMinus666 = document.querySelector('[popup-minus-666]')
let continueCounting = document.querySelectorAll('[continue-counting]')
let resetCounting = document.querySelector('[reset-counting]')

let counter = -600
currentCounter.innerHTML = counter

increaseButton.addEventListener('click', () => {
    counter++
    currentCounter.innerHTML = counter

    if(counter === 42) {
        popup42.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup42.classList.remove('active');
    });
    }

    if(counter === 73) {
        popup73.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup73.classList.remove('active');
    });
    }

    if(counter === 101) {
        popup101.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup101.classList.remove('active');
    });
    }

    if(counter === 144) {
        popup144.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup144.classList.remove('active');
    });
    }

    if(counter === 256) {
        popup256.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup256.classList.remove('active');
    });
    }

    if(counter === 777) {
        popup777.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup777.classList.remove('active');
    });
    }

    if(counter === 1234) {
        popup1234.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup1234.classList.remove('active');
    });
    }

    if(counter === 2024) {
        popup2024.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup2024.classList.remove('active');
    });
    }

    if(counter === 88888888) {
        popup88888888.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup88888888.classList.remove('active');
    });
    }

    if(counter === 99999999) {
        popup99999999.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popup99999999.classList.remove('active');
    });
    }
})

decreaseButton.addEventListener('click', () => {
    counter--
    currentCounter.innerHTML = counter

    if(counter === -13) {
        popupMinus13.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popupMinus13.classList.remove('active');
    });
    }

    if(counter === -404) {
        popupMinus404.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popupMinus404.classList.remove('active');
    });
    }

    if(counter === -666) {
        popupMinus666.classList.add('active')

        continueCounting.addEventListener('click', () => {
            popupMinus666.classList.remove('active');
    });
    }
})

continueCounting.forEach(button => {
    button.addEventListener('click', () => {
            popup42.classList.remove('active');
            popup73.classList.remove('active');
            popup101.classList.remove('active');
            popup144.classList.remove('active');
            popup256.classList.remove('active');
            popup777.classList.remove('active');
            popup1234.classList.remove('active');
            popup2024.classList.remove('active');
            popup88888888.classList.remove('active');
            popup99999999.classList.remove('active');
            popupMinus13.classList.remove('active');
            popupMinus404.classList.remove('active');
            popupMinus666.classList.remove('active');
        })
    });

resetCounting.addEventListener('click', () => {
    counter = 0
    currentCounter.innerHTML = counter
    popup99999999.classList.remove('active');
})
