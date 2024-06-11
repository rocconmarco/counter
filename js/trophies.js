const trophies = [
    {
        number: 42,
        image: 'img/42.svg',
        title: 'Il senso della vita',
        description: 'Una ricerca continua, un percorso lungo una vita. Forse il segreto sta proprio nel viaggio?',
        isFinished: false
    },
    {
        number: 73,
        image: 'img/73.svg',
        title: 'Sheldon Cooper',
        description: 'Una serie di combinazioni, solamente un caso? O dietro il 73 si cela una verità più profonda?',
        isFinished: false
    },
    {
        number: 101,
        image: 'img/101.svg',
        title: 'For beginners',
        description: "Chi ben comincia è a metà dell'opera, prosegui la strada per diventare un counter master",
        isFinished: false
    },
    {
        number: 144,
        image: 'img/144.svg',
        title: 'Il quadrato perfetto',
        description: "La sequenza che ha incantato il mondo e che ha descritto l'armonia dell'universo",
        isFinished: false
    },
    {
        number: 256,
        image: 'img/256.svg',
        title: 'Game over',
        description: 'Tra fantasmini e palline gialle, il nostro eroe ha raggiunto il livello massimo del gioco. Non può andare oltre',
        isFinished: false
    },
    {
        number: 777,
        image: 'img/777.svg',
        title: 'Una visione angelica',
        description: '777 è il numero degli angeli, la tua ascesa al regno della luce è sempre più vicina',
        isFinished: false
    },
    {
        number: 934,
        image: 'img/934.svg',
        title: 'Harry Potter',
        description: 'Il treno sta per partire, prendi i tuoi bagagli e corri verso un mondo magico',
        isFinished: false
    },
    {
        number: 1234,
        image: 'img/1234.svg',
        title: 'Il pin del tuo telefono',
        description: 'A volte la prigrizia ci è nemica, per questo scegliamo la strada più facile',
        isFinished: false
    },
    {
        number: 2024,
        image: 'img/2024.svg',
        title: 'Vivi il presente',
        description: `Siamo troppo concentrati sul dove ci vediamo "tra 5 anni" che ci dimentichiamo del momento presente, che è
        l'unica cosa che realmente abbiamo`,
        isFinished: false
    },
    {
        number: 8848,
        image: 'img/8848.png',
        title: 'In cima al mondo',
        description: 'Quando vedi il mondo dalla cima poi rimani intrappolato, nulla ti sembrerà più lo stesso',
        isFinished: false
    },
    {
        number: 21000000,
        image: 'img/21000000.svg',
        title: 'Risorsa finita',
        description: 'Il limite tecnico è stato raggiunto, cosa succederà adesso?',
        isFinished: false
    },
    {
        number: 88888888,
        image: 'img/88888888.svg',
        title: 'La fortuna sia con te',
        description: 'Dopo questo grande viaggio hai raggiunto un livello di consapevolezza che ti rende immune ad ogni male',
        isFinished: false
    },
    {
        number: 99999999,
        image: 'img/99999999.svg',
        title: 'Lo zenit',
        description: `Complimenti! Hai raggiunto il livello massimo della bright side! Ora puoi esplorare la parte oscura, resetta
        il contatore e conta all'indietro`,
        isFinished: true
    },
    {
        number: -13,
        image: 'img/-13.svg',
        title: 'Superstizione',
        description: `La sfortuna è dietro l'angolo, fai gli scongiuri e prosegui la tua discesa negli inferi`,
        isFinished: false
    },
    {
        number: -273,
        image: 'img/-273.svg',
        title: 'Zero assoluto',
        description: 'Tutto rallenta, quasi a fermarsi del tutto, in un riposo glaciale?',
        isFinished: false
    },
    {
        number: -404,
        image: 'img/-404.svg',
        title: 'File not found',
        description: 'Lo cerchi dappertutto, la certezza è svanita, il passato non esiste più',
        isFinished: false
    },
    {
        number: -666,
        image: 'img/-666.svg',
        title: 'La bestia',
        description: `L'antagonista per antonomasia, il male, la parte più oscura di ognuno di no`,
        isFinished: false
    },
    {
        number: -1984,
        image: 'img/-1984.svg',
        title: 'Il controllo',
        description: `Vivresti in un mondo in cui ogni passo che fai è costantemente monitarato e registrato? La tranquillità della
        non-scelta, tutte le decisioni vengono prese dall'alto`,
        isFinished: false
    },
    {
        number: -2020,
        image: 'img/-2020.svg',
        title: 'Lockdown',
        description: 'Pericolo, paura, depressione. Un periodo di segregazione, non ti puoi muovere, attenzione al contagio',
        isFinished: false
    },
    {
        number: -10920,
        image: 'img/-10920.svg',
        title: 'Abisso oceanico',
        description: 'Nel punto più profondo, si nascondono creature misteriose, e con loro tutte le nostre paure più recondite',
        isFinished: false
    },
    {
        number: -66000000,
        image: 'img/-66000000.svg',
        title: 'Chicxulub',
        description: 'La distruzione di massa più grande della storia, una storia antica, che ancora ci comunica qualcosa',
        isFinished: false
    },
    {
        number: -99999999,
        image: 'img/-99999999.svg',
        title: 'Lasciate ogni speranza',
        description: `Complimenti! Hai raggiunto il livello massimo della dark side. Ora puoi esplorare il regno della luce,
        resetta il contatore e riprendi a contare`,
        isFinished: false
    },
]


function checkTrophies(counter) {
    trophies.forEach(trophy => {
        if (counter === trophy.number) {
            showPopup(trophy);
        }
    });
}

function showPopup(trophy) {
    const popup = document.getElementById(`popup-${trophy.number}`);
    if (popup) {
        popup.classList.add('active');
    }
}


