const increaseButton = document.querySelector('[increase-button]');
const decreaseButton = document.querySelector('[decrease-button]');
const currentCounter = document.getElementById('currentCounter');

let counter = 0;
currentCounter.innerHTML = counter

function createPopup(trophies, number) {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });

    let existingPopup = document.getElementById(`popup${number}`);
    if (existingPopup) {
        existingPopup.style.display = 'block';
    } else {
        trophies.forEach(trophy => {
            if (trophy.number === number) {
                const popup = document.createElement('div')
                popup.classList.add('popup')
                popup.id = `popup${trophy.number}`

                const image = document.createElement('img')
                image.src = trophy.image
                popup.appendChild(image)

                const title = document.createElement('h2')
                title.textContent = trophy.title
                popup.appendChild(title)

                const description = document.createElement('p')
                description.textContent = trophy.description
                popup.appendChild(description)

                const popupButton = document.createElement('button')
                if (trophy.number === 99999999) {
                    popupButton.textContent = 'Prova la dark side'
                    popupButton.classList.add('reset-counting')
                    popupButton.id = 'resetCounting'
                } else if (trophy.number === -99999999) {
                    popupButton.textContent = 'Prova la bright side'
                    popupButton.classList.add('reset-counting')
                    popupButton.id = 'resetCounting'
                } else {
                    popupButton.textContent = 'Continua a contare'
                    popupButton.classList.add('continue-counting')
                    popupButton.id = 'continueCounting'
                }
                popupButton.setAttribute('data-popup-id', `popup${trophy.number}`);
                popup.appendChild(popupButton)

                document.body.appendChild(popup)
            }
        })
    }
}


function createAchievedTrophy(trophies, number) {
    const brightSide = document.querySelector('.trophies-bright-side')
    const darkSide = document.querySelector('.trophies-dark-side')
    const brightTitle = document.getElementById('bright-title')
    const darkTitle = document.getElementById('dark-title')


    trophies.forEach(trophy => {
        if (trophy.number === number) {

            if (document.getElementById(`trophy${trophy.number}`)) {
                return;
            }

            const achievedTrophy = document.createElement('div')
            achievedTrophy.classList.add('trophy')
            achievedTrophy.id = `trophy${trophy.number}`

            const image = document.createElement('img')
            image.src = trophy.image
            achievedTrophy.appendChild(image)

            const achievedNumber = document.createElement('p')
            achievedNumber.textContent = trophy.number
            achievedTrophy.appendChild(achievedNumber)

            achievedTrophy.addEventListener('click', () => {
                createPopup(trophies, trophy.number);
                const popupDisplayed = document.getElementById(`popup${trophy.number}`);
                popupDisplayed.classList.add('active');
            });

            if (trophy.number > 0) {
                brightSide.appendChild(achievedTrophy)
                brightTitle.style.visibility = 'visible'
            } else {
                darkSide.appendChild(achievedTrophy)
                darkTitle.style.visibility = 'visible'
            }
        }
    }
    );
}

function checkTrophies(trophies) {
    trophies.forEach(trophy => {
        if (trophy.number === counter) {
            createPopup(trophies, counter)
            createAchievedTrophy(trophies, counter)
            const popupDisplayed = document.getElementById(`popup${trophy.number}`)
            const trophyDisplayed = document.getElementById(`trophy${trophy.number}`)
            popupDisplayed.classList.add('active')
            trophyDisplayed.classList.add('visible')

            const popupButton = document.getElementById('continueCounting')
            popupButton.addEventListener('click', () => {
                popupDisplayed.classList.remove('active')
            })
        }
    })
}

function updateCounter() {
    increaseButton.addEventListener('click', () => {
        if (counter < 99999999) {
            counter++
            currentCounter.innerHTML = counter
            resizeDisplay()
            checkTrophies(trophies)
        }
    })

    decreaseButton.addEventListener('click', () => {
        if (counter > -99999999) {
            counter--
            currentCounter.innerHTML = counter
            resizeDisplay()
            checkTrophies(trophies)
        }
    })
}

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