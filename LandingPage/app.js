<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const observacao = document.getElementById('observacao').value;

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            const telefoneInput = document.getElementById('telefone');
            const telefoneValue = telefoneInput.value;
    
            const telefoneRegex = /^[0-9]{9}$/;
    
            if (!telefoneRegex.test(telefoneValue)) {
                event.preventDefault();
                alert("Enter a valid 9-digit telephone number.");
            }
        });

        const email = 'v3freire@gmail.com';
        const whatsapp = '+5592986432450';

        const message = `Nome: ${nome}\nTelefone: ${telefone}\nObservação: ${observacao}`;

        window.location.href = `mailto:${email}?subject=Contato&body=${encodeURIComponent(message)}`;

        window.open(`https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(message)}`);

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('observacao').value = '';

        console.log('Mensagem Enviada:\n' + message);
    });
</script>
