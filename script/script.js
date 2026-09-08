window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(".card,.project-card");

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

});