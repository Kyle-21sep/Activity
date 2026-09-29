const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const program = document.getElementById("program").value;

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${program}</p>
        <button onclick="this.parentElement.remove()">
            Remove
        </button>
    `;

    studentList.appendChild(card);

    form.reset();
});
