const listContainer = document.querySelector(".lista");
const cardCount = 5;
const itemCardWidth = 250;

function addHidennCards() {

    const cardsPerRow = Math.floor(
        listContainer.getBoundingClientRect().width / itemCardWidth
    );

        console.log(listContainer.getBoundingClientRect().width);

    const cardsToAdd = cardsPerRow - (cardCount % cardsPerRow);

    for (let i=0; i<cardsToAdd; i++) {
        const cardToAdd = document.createElement("div");
        cardToAdd.classList.add("item");
        cardToAdd.classList.add("hidden");
        listContainer.appendChild(cardToAdd);
    }
}

function removeHiddenCards() {
    const hiddenCards = document.querySelectorAll(".hidden")
    for (let i=0; i < hiddenCards.length; i++) {
        const hiddenCard = hiddenCards[i];
        // hiddenCard.remove();
        document.querySelector('.lista').removeChild(hiddenCard);
    }
    hiddenCards.remove;
}

addHidennCards();

function resizeHandler(e) {
    removeHiddenCards();
    addHidennCards();
    // console.log("resize");
}

 window.onresize = resizeHandler;