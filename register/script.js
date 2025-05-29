
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = parseInt(document.getElementById("age").value);
    let email = document.getElementById("email").value.trim();
    let distance = document.getElementById("distance").value;
    let file = document.getElementById("document").files[0];

    if (!name || !email || !distance || isNaN(age) || !file) {
        document.getElementById("message").textContent = "Lūdzu, aizpildi visus laukus.";
        return;
    }

    if (age < 12 || age > 80) {
        document.getElementById("message").textContent = "Vecumam jābūt no 12 līdz 80 gadiem.";
        return;
    }

    document.getElementById("message").textContent = "Reģistrācija veiksmīga! Dati tiks apstrādāti.";
});
