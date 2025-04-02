document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Dent ta gueule dans...",
        "Prépare-toi, c'est pour bientôt... ou pas.",
        "Encore un peu de patience, ou pas.",
        "Presque prêt ! Enfin, selon mes sources...",
        "Juste un peu plus longtemps... ou toute la vie."
    ];

    let counter = Math.floor(Math.random() * 1000) + 100; // Début absurde
    const counterElement = document.getElementById("counter");
    const messageElement = document.getElementById("counter_message");

    function updateCounter() {
        counter += Math.floor(Math.random() * 10) - 5; // Monte ou descend aléatoirement
        counterElement.innerText = `${counter} jours`;

        if (Math.random() < 0.1) { // Change le message parfois
            messageElement.innerText = messages[Math.floor(Math.random() * messages.length)];
        }
    }

    setInterval(updateCounter, 2000);
});


