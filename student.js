const joinedContainer = document.getElementById("joinedContainer");

document.querySelectorAll(".participate-btn").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".event-card");
        const title = card.querySelector("h3").textContent;
        const details = card.querySelectorAll("p");
        const image = card.querySelector("img").src;
        const alreadyJoined = [...document.querySelectorAll(".joined-card h3")]
            .some(eventTitle => eventTitle.textContent === title);

        if (alreadyJoined) {
            alert("You already joined this event!");
            return;
        }

        const emptyMessage = joinedContainer.querySelector(".empty-message");
        if (emptyMessage) {
            emptyMessage.remove();
        }

        const joinedCard = document.createElement("div");
        joinedCard.classList.add("joined-card");

        joinedCard.innerHTML = `
            <div class="image">
                <img src="${image}" alt="${title}">
            </div>
            <h3>${title}</h3>
            <p>${details[0].textContent}</p>
            <p>${details[1].textContent}</p>
            <p>${details[2].textContent}</p>
            <button class="remove-btn">Cancel Participation</button>
        `;

        joinedContainer.appendChild(joinedCard);

        this.textContent = "Joined ✓";
        this.style.background = "linear-gradient(135deg, #3b82f6, #2563eb)";
        this.disabled = true;

        // remove participation
        joinedCard.querySelector(".remove-btn").addEventListener("click", function () {
            joinedCard.remove();

            button.textContent = "Participate";
            button.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
            button.disabled = false;

            if (joinedContainer.children.length === 0) {
                joinedContainer.innerHTML = `<p class="empty-message">You haven't joined any event yet.</p>`;
            }
        });
    });
});


window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.background = "rgba(10, 10, 15, 0.88)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "rgba(15, 15, 20, 0.55)";
        navbar.style.boxShadow = "none";
    }
});