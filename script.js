
function scrollToEvents() {
    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });
}


const modal = document.getElementById("eventModal");
const openBtn = document.getElementById("openAddBtn");
const openAddCard = document.getElementById("openAddCard");
const closeBtn = document.querySelector(".close");
const eventForm = document.getElementById("eventForm");
const eventsContainer = document.getElementById("eventsContainer");

openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
});

openAddCard.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});


window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


function getCategoryIcon(category) {
    const icons = {
        "Tech": "💻",
        "Sports": "⚽",
        "Cultural": "🎨",
        "Business": "💼",
        "Music": "🎵",
        "Gaming": "🎮"
    };
    return icons[category] || "📌";
}

function formatDate(dateValue) {
    const date = new Date(dateValue);
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


eventForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value.trim();
    const category = document.getElementById("category").value;
    const slots = document.getElementById("slots").value;
    const description = document.getElementById("description").value.trim();
    const imageInput = document.getElementById("image");

    if (!imageInput.files[0]) {
        alert("Veuillez choisir une image.");
        return;
    }

    const imageFile = imageInput.files[0];
    const imageURL = URL.createObjectURL(imageFile);

    const formattedDate = formatDate(date);
    const icon = getCategoryIcon(category);

    // Nouvelle carte
    const newCard = document.createElement("div");
    newCard.classList.add("event-card");

    newCard.innerHTML = `
        <div class="image">
            <img src="${imageURL}" alt="${title}">
            <span class="badge">${slots} slots left</span>
            <span class="heart">♡</span>
        </div>

        <h3>${title}</h3>
        <p>📍 ${location}</p>
        <p>${icon} ${category}</p>
        <p>📅 ${formattedDate} @ ${time}</p>
        <p style="margin: 10px 15px; color:#9ca3af;">${description}</p>

        <button class="register">change it</button>
    `;

    // Ajouter après la carte +Add Event
    eventsContainer.insertBefore(newCard, eventsContainer.children[1]);

    // Reset formulaire
    eventForm.reset();

    // Fermer modal
    modal.style.display = "none";
});

const editModal = document.getElementById("editModal");
const closeEdit = document.querySelector(".close-edit");
const saveEdit = document.getElementById("saveEdit");

let currentCard = null;


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("register")) {

        currentCard = e.target.closest(".event-card");

        const title = currentCard.querySelector("h3").innerText;
        const location = currentCard.querySelectorAll("p")[0].innerText;
        const category = currentCard.querySelectorAll("p")[1].innerText;
        const date = currentCard.querySelectorAll("p")[2].innerText;

        document.getElementById("editTitle").value = title;
        document.getElementById("editLocation").value = location;
        document.getElementById("editCategory").value = category;
        document.getElementById("editDate").value = date;

        editModal.style.display = "flex";
    }
});


closeEdit.onclick = () => {
    editModal.style.display = "none";
};


saveEdit.onclick = () => {
    if (!currentCard) return;

    currentCard.querySelector("h3").innerText =
        document.getElementById("editTitle").value;

    currentCard.querySelectorAll("p")[0].innerText =
        document.getElementById("editLocation").value;

    currentCard.querySelectorAll("p")[1].innerText =
        document.getElementById("editCategory").value;

    currentCard.querySelectorAll("p")[2].innerText =
        document.getElementById("editDate").value;

    editModal.style.display = "none";
};


document.addEventListener("click", function(e) {

    const heart = e.target.closest(".heart");
    if (!heart) return;

    heart.classList.toggle("active");

    if (heart.classList.contains("active")) {
        heart.textContent = "❤️";
    } else {
        heart.textContent = "♡";
    }
});


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const card = e.target.closest(".event-card");

        const confirmDelete = confirm("Are you sure you want to delete this event?");
        
        if (confirmDelete) {
            card.remove();
        }
    }
});