
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");


const drinkImages = document.querySelectorAll(".drinkpic");


function openModal(imageSrc, description) {
   modalImage.src = imageSrc;
    modalDescription.innerText = description;
    modal.style.display = "block";
    document.body.classList.add("modal-open"); 
}


function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); 
}


drinkImages.forEach((drinkImage, index) => {
    const description = document.querySelectorAll(".description")[index].textContent;
    drinkImage.addEventListener("click", () => {
      openModal(drinkImage.src, description);
    });
});

const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
});

