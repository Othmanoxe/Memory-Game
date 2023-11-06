const cardArray = [
    {
        name: 'cheeseburger',
        Image: 'photos/cheeseburger.png',
    },
    {
        name: 'fries',
        Image: 'photos/fries.png',
    },
    {
        name: 'hotdog',
        Image: 'photos/hotdog.png',
    },
    {
        name: 'ice-cream',
        Image: 'photos/ice-cream.png',
    },
    {
        name: 'milkshake',
        Image: 'photos/milkshake.png',
    },
    {
        name: 'pizza',
        Image: 'photos/pizza.png',
    },
//we need to duplicate the photos
    {
        name: 'cheeseburger',
        Image: 'photos/cheeseburger.png',
    },
    {
        name: 'fries',
        Image: 'photos/fries.png',
    },
    {
        name: 'hotdog',
        Image: 'photos/hotdog.png',
    },
    {
        name: 'ice-cream',
        Image: 'photos/ice-cream.png',
    },
    {
        name: 'milkshake',
        Image: 'photos/milkshake.png',
    },
    {
        name: 'pizza',
        Image: 'photos/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())



// a-1 we need to append the photos in the grid using javaScript

const gridDisplay = document.querySelector('#grid')

const resultDisplay = document.querySelector('#result') 

let cardsChosen = []

let cardsChosenIds = []

const cardsWon = []

// it is for this reason that we created this function

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        //we created a const called card  

        const card = document.createElement('img')

        // and fed it the images using the setAttribute method, we also gave an id using that same method

        card.setAttribute('src', 'photos/blank.png')
        card.setAttribute('data-id', i)

        //here we added an eventListener to be activated when the card is clicked

        card.addEventListener('click', flipCard)

        //a-2 this is the line of code used to append the card const into the html grid

        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){

    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards)

    console.log('check for match!')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'photos/blank.png')
        cards[optionTwoId].setAttribute('src', 'photos/blank.png')
        alert('You\'ve clicked the same image!')
    }



    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'photos/white.png')
        cards[optionTwoId].setAttribute('src', 'photos/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'photos/blank.png')
        cards[optionTwoId].setAttribute('src', 'photos/blank.png')
        alert('Sorry, try again please!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent =  `Congratulations, you made it!`
    }

}

function flipCard () {
    const cardId =  this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].Image)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}