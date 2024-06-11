function createPopup(trophies) {
    trophies.forEach(trophy => {
        const popup = document.createElement('div')
        popup.classList.add('popup')
        if (trophy.number > 0) {
            popup.id = `popup-${trophy.number}`
        } else {
            popup.id = `popup-minus-${Math.abs(trophy.number)}`
        }

        const image = document.createElement('img')
        image.src = trophy.image
        popup.appendChild(image)

        const title = document.createElement('h2')
        title.textContent = trophy.title
        popup.appendChild(title)

        const description = document.createElement('p')
        description.textContent = trophy.description
        popup.appendChild(description)

        document.body.appendChild(popup)
    });
}

function createAchievedTrophies(trophies) {
    const brightSide = document.querySelector('.trophies-bright-side')
    const darkSide = document.querySelector('.trophies-dark-side')
    trophies.forEach(trophy => {
        const achievedTrophy = document.createElement('div')
        achievedTrophy.classList.add('trophy')
        if (trophy.number > 0) {
            achievedTrophy.id = `trophy-${trophy.number}`
        } else {
            achievedTrophy.id = `popup-minus-${Math.abs(trophy.number)}`
        }

        const image = document.createElement('img')
        image.src = trophy.image
        achievedTrophy.appendChild(image)

        const achievedNumber = document.createElement('p')
        achievedNumber.textContent = trophy.number
        achievedTrophy.appendChild(achievedNumber)

        if (trophy.number > 0) {
            brightSide.appendChild(achievedTrophy)
        } else {
            darkSide.appendChild(achievedTrophy)
        }
    }
    );
}

function updateCounter() {
    const increaseButton = document.querySelector('[increase-button]');
    const decreaseButton = document.querySelector('[decrease-button]');

    increaseButton.addEventListener('click', () => {
        if (counter < 99999999) {
            counter++
            currentCounter.innerHTML = counter
            resizeDisplay()
        }
    })

    decreaseButton.addEventListener('click', () => {
        if (counter > -99999999) {
            counter--
            currentCounter.innerHTML = counter
            resizeDisplay()
        }
    })




}