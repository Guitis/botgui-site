const PUBLIC_KEY = "3gMJUtk7tBnJUAgB9";
const SERVICE_ID = "service_ieotchr";
const TEMPLATE_ID = "template_d82ljn8";

// Inicializa o EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(PUBLIC_KEY);
    }
})();

// Função principal disparada pelo formulário
function enviarFormulario(event) {
    // 1. Bloqueia o recarregamento e evita colocar os dados na URL
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById("btn-submit");
    const originalText = submitBtn ? submitBtn.innerText : "Enviar";

    if (submitBtn) {
        submitBtn.innerText = "Enviando...";
        submitBtn.disabled = true;
    }

    // 2. Envia os dados para o EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
        .then(function() {
            alert("Mensagem enviada com sucesso! Um especialista entrará em contato.");
            form.reset();
        })
        .catch(function(error) {
            alert("Falha no envio da mensagem. Verifique as configurações.");
            console.error("Erro EmailJS:", error);
        })
        .finally(function() {
            if (submitBtn) {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });

    return false;
}

// Lógica de abertura do FAQ
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        if (questionBtn) {
            questionBtn.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                faqItems.forEach(i => i.classList.remove("active"));
                if (!isActive) item.classList.add("active");
            });
        }
    });
});