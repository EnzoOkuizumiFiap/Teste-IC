document.addEventListener('DOMContentLoaded', () => {
    // --- Código de Rolagem Suave (existente) ---
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- Simulação de Login ---
    const loginForm = document.getElementById('login-form');

    // Verifica se o formulário de login existe na página atual
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Previne o envio real do formulário (que recarregaria a página)
            event.preventDefault();

            const email = document.getElementById('email').value;
            // Poderia adicionar validações básicas aqui (ex: verificar se email e senha não estão vazios)

            // **IMPORTANTE:** Isto é apenas uma simulação.
            // A autenticação real requer um servidor para verificar as credenciais.
            alert(`Simulação: Tentativa de login com email: ${email}. Redirecionando para a página inicial (simulado).`);

            // Simula um redirecionamento após o "login"
            // Em um cenário real, o servidor responderia e o front-end agiria com base na resposta.
            window.location.href = 'index.html';
        });
    }
});