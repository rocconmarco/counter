const currentCounter = document.querySelector('[updated-counter]');
const increaseButton = document.querySelector('[increase-button]');
const decreaseButton = document.querySelector('[decrease-button]');
let popup = document.querySelector('.popup')
let popup42 = document.querySelector('[popup-42]')
let popup73 = document.querySelector('[popup-73]')
let continueCounting = document.querySelectorAll('[continue-counting]');

let counter = 0
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
})

decreaseButton.addEventListener('click', () => {
    counter--
    currentCounter.innerHTML = counter
})

continueCounting.forEach(button => {
    button.addEventListener('click', () => {
        if (popup42.classList.contains('active')) {
            popup42.classList.remove('active');
        }
        if (popup73.classList.contains('active')) {
            popup73.classList.remove('active');
        }
    });
});
