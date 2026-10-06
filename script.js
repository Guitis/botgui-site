document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");

        questionBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Fecha todos os outros itens
            faqItems.forEach(i => i.classList.remove("active"));

            // Se o item clicado não estava ativo, abre ele
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});