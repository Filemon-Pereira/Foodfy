const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card-receitas")

for(let card of cards){
    card.addEventListener("click", ()=>{
        const imageId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector(".modal-image img").src = `./assets/${imageId}`
        const cardTextDescription = card.querySelector(".card-description").innerHTML
        const cardTextChef = card.querySelector(".card-chef").innerHTML
        modalOverlay.querySelector(".modal-description").innerHTML = cardTextDescription
        modalOverlay.querySelector(".modal-chef").innerHTML = cardTextChef
    })
}

document.querySelector(".close-modal").addEventListener("click", ()=>{
    modalOverlay.classList.remove("active")
})
