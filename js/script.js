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
let popup934 = document.querySelector('[popup-934]')
let popup1234 = document.querySelector('[popup-1234]')
let popup2024 = document.querySelector('[popup-2024]')
let popup8848 = document.querySelector('[popup-8848]')
let popup21000000 = document.querySelector('[popup-21000000]')
let popup88888888 = document.querySelector('[popup-88888888]')
let popup99999999 = document.querySelector('[popup-99999999]')
let popupMinus13 = document.querySelector('[popup-minus-13]')
let popupMinus273 = document.querySelector('[popup-minus-273]')
let popupMinus404 = document.querySelector('[popup-minus-404]')
let popupMinus666 = document.querySelector('[popup-minus-666]')
let popupMinus1984 = document.querySelector('[popup-minus-1984]')
let popupMinus2020 = document.querySelector('[popup-minus-2020]')
let popupMinus10920 = document.querySelector('[popup-minus-10920]')
let popupMinus66000000 = document.querySelector('[popup-minus-66000000]')
let popupMinus99999999 = document.querySelector('[popup-minus-99999999]')
let continueCounting = document.querySelectorAll('[continue-counting]')
let resetCounting = document.querySelectorAll('[reset-counting]')
let trophy42 = document.querySelector('[trophy-42]')
let trophy73 = document.querySelector('[trophy-73]')
let trophy101 = document.querySelector('[trophy-101]')
let trophy144 = document.querySelector('[trophy-144]')
let trophy256 = document.querySelector('[trophy-256]')
let trophy777 = document.querySelector('[trophy-777]')
let trophy934 = document.querySelector('[trophy-934]')
let trophy1234 = document.querySelector('[trophy-1234]')
let trophy2024 = document.querySelector('[trophy-2024]')
let trophy8848 = document.querySelector('[trophy-8848]')
let trophy21000000 = document.querySelector('[trophy-21000000]')
let trophy88888888 = document.querySelector('[trophy-88888888]')
let trophy99999999 = document.querySelector('[trophy-99999999]')
let trophyMinus13 = document.querySelector('[trophy-minus-13]')
let trophyMinus273 = document.querySelector('[trophy-minus-273]')
let trophyMinus404 = document.querySelector('[trophy-minus-404]')
let trophyMinus666 = document.querySelector('[trophy-minus-666]')
let trophyMinus1984 = document.querySelector('[trophy-minus-1984]')
let trophyMinus2020 = document.querySelector('[trophy-minus-2020]')
let trophyMinus10920 = document.querySelector('[trophy-minus-10920]')
let trophyMinus66000000 = document.querySelector('[trophy-minus-66000000]')
let trophyMinus99999999 = document.querySelector('[trophy-minus-99999999]')
let brightTitle = document.querySelector('[bright-title]')
let darkTitle = document.querySelector('[dark-title]')


let counter = 0
currentCounter.innerHTML = counter

function resizeDisplay() {
    const display = document.getElementById('display');
    const container = document.getElementById('container')
    if (counter < -9999999) {
        display.style.width = '65%'
        container.style.width = '650px'
    } else {
        display.style.width = '60%'
        container.style.width = '600px'
    }
}

increaseButton.addEventListener('click', () => {
    if (counter < 99999999) {
        counter++
        currentCounter.innerHTML = counter
        resizeDisplay()

        switch (counter) {
            case 42:
                popup42.classList.add('active');
                trophy42.classList.add('visible');
                brightTitle.style.visibility = 'visible';
                break;
            case 73:
                popup73.classList.add('active');
                trophy73.classList.add('visible');
                break;
            case 101:
                popup101.classList.add('active');
                trophy101.classList.add('visible');
                break;
            case 144:
                popup144.classList.add('active');
                trophy144.classList.add('visible');
                break;
            case 256:
                popup256.classList.add('active');
                trophy256.classList.add('visible');
                break;
            case 777:
                popup777.classList.add('active');
                trophy777.classList.add('visible');
                break;
            case 934:
                popup934.classList.add('active');
                trophy934.classList.add('visible');
                break;
            case 1234:
                popup1234.classList.add('active');
                trophy1234.classList.add('visible');
                break;
            case 2024:
                popup2024.classList.add('active');
                trophy2024.classList.add('visible');
                break;
            case 8848:
                popup8848.classList.add('active');
                trophy8848.classList.add('visible');
                break;
            case 21000000:
                popup21000000.classList.add('active');
                trophy21000000.classList.add('visible');
                break;
            case 88888888:
                popup88888888.classList.add('active');
                trophy88888888.classList.add('visible');
                break;
            case 99999999:
                popup99999999.classList.add('active');
                trophy99999999.classList.add('visible');
                break;
        }
    }
})


decreaseButton.addEventListener('click', () => {
    if (counter > -99999999) {

        counter--
        currentCounter.innerHTML = counter
        resizeDisplay()

        switch (counter) {
            case -13:
                popupMinus13.classList.add('active');
                trophyMinus13.classList.add('visible');
                darkTitle.style.visibility = 'visible';
                break;
            case -273:
                popupMinus273.classList.add('active');
                trophyMinus273.classList.add('visible');
                break;
            case -404:
                popupMinus404.classList.add('active');
                trophyMinus404.classList.add('visible');
                break;
            case -666:
                popupMinus666.classList.add('active');
                trophyMinus666.classList.add('visible');
                break;
            case -1984:
                popupMinus1984.classList.add('active');
                trophyMinus1984.classList.add('visible');
                break;
            case -2020:
                popupMinus2020.classList.add('active');
                trophyMinus2020.classList.add('visible');
                break;
            case -10920:
                popupMinus10920.classList.add('active');
                trophyMinus10920.classList.add('visible');
                break;
            case -66000000:
                popupMinus66000000.classList.add('active');
                trophyMinus66000000.classList.add('visible');
                break;
            case -99999999:
                popupMinus99999999.classList.add('active');
                trophyMinus99999999.classList.add('visible');
                break;
        }
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
        popup934.classList.remove('active');
        popup1234.classList.remove('active');
        popup2024.classList.remove('active');
        popup8848.classList.remove('active');
        popup21000000.classList.remove('active');
        popup88888888.classList.remove('active');
        popup99999999.classList.remove('active');
        popupMinus13.classList.remove('active');
        popupMinus273.classList.remove('active');
        popupMinus404.classList.remove('active');
        popupMinus666.classList.remove('active');
        popupMinus1984.classList.remove('active');
        popupMinus2020.classList.remove('active');
        popupMinus10920.classList.remove('active');
        popupMinus66000000.classList.remove('active');
        popupMinus99999999.classList.remove('active');
    })
});

resetCounting.forEach(button => {
    button.addEventListener('click', () => {
        counter = 0
        currentCounter.innerHTML = counter
        popup99999999.classList.remove('active');
        popupMinus99999999.classList.remove('active');
    })
});

trophy42.addEventListener('click', () => {
    popup42.classList.add('active')
})

trophy73.addEventListener('click', () => {
    popup73.classList.add('active')
})

trophy101.addEventListener('click', () => {
    popup101.classList.add('active')
})

trophy144.addEventListener('click', () => {
    popup144.classList.add('active')
})

trophy256.addEventListener('click', () => {
    popup256.classList.add('active')
})

trophy777.addEventListener('click', () => {
    popup777.classList.add('active')
})

trophy934.addEventListener('click', () => {
    popup934.classList.add('active')
})

trophy1234.addEventListener('click', () => {
    popup1234.classList.add('active')
})

trophy2024.addEventListener('click', () => {
    popup2024.classList.add('active')
})

trophy8848.addEventListener('click', () => {
    popup8848.classList.add('active')
})

trophy21000000.addEventListener('click', () => {
    popup21000000.classList.add('active')
})

trophy88888888.addEventListener('click', () => {
    popup88888888.classList.add('active')
})

trophy99999999.addEventListener('click', () => {
    popup99999999.classList.add('active')
})

trophyMinus13.addEventListener('click', () => {
    popupMinus13.classList.add('active')
})

trophyMinus273.addEventListener('click', () => {
    popupMinus273.classList.add('active')
})

trophyMinus404.addEventListener('click', () => {
    popupMinus404.classList.add('active')
})

trophyMinus666.addEventListener('click', () => {
    popupMinus666.classList.add('active')
})

trophyMinus1984.addEventListener('click', () => {
    popupMinus1984.classList.add('active')
})

trophyMinus2020.addEventListener('click', () => {
    popupMinus2020.classList.add('active')
})

trophyMinus10920.addEventListener('click', () => {
    popupMinus10920.classList.add('active')
})

trophyMinus66000000.addEventListener('click', () => {
    popupMinus66000000.classList.add('active')
})

trophyMinus99999999.addEventListener('click', () => {
    popupMinus99999999.classList.add('active')
})