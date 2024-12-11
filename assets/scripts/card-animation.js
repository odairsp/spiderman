
function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}--hovered`;
    // const id = this.id.slice(-2)
    // const idCarousel = document.getElementById(Number(id))
    // selectedCarouselItem(idCarousel);
}
function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = "";
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handleMouseEnter, false);
        card.addEventListener("mouseleave", handleMouseLeave, false);
        

    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);



function selectedCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
   
    const carousel = document.querySelector(".s-cards-carousel");
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYdeg = -90 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYdeg}deg)`);
    
    carousel.style.transform = newTransform;
    
    const activeButton = document.querySelector(".s-controller__button--active");
    activeButton.classList.remove("s-controller__button--active");
    selectedButtonElement.classList.add("s-controller__button--active");
    
}