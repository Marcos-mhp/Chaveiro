document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    var name = document.getElementById('name').value.trim();
    var regiao = document.getElementById('regiao').value.trim();
    var message = document.getElementById('message').value.trim();

    // Monta a mensagem para enviar no WhatsApp
    var whatsappMessage = `Olá, meu nome é ${name}, sou da região ${regiao} e gostaria de falar sobre: ${message}`;

    // Codifica a mensagem para ser usada na URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // URL de redirecionamento para o WhatsApp
    var whatsappURL = `https://wa.me/5511940584000?text=${encodedMessage}`;

    // Verifica se os campos foram preenchidos corretamente
    if (name !== "" && regiao !== "" && message !== "") {
        // Redireciona o usuário para o WhatsApp
        window.location.href = whatsappURL;

        // Exibe mensagem de confirmação
        document.getElementById('formMessage').textContent = `Obrigado por entrar em contato, ${name}!`;
        document.getElementById('formMessage').style.color = 'green';
    } else {
        // Caso algum campo não tenha sido preenchido
        document.getElementById('formMessage').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

// carrocel de mensagem 

let index = 0;
const slides = document.querySelectorAll('.slide');

function slowSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(slowSlide, 3000);
slowSlide();
