function atualizarCartao() {
            const nome = document.getElementById('nome').value || 'Seu Nome';
            const cargo = document.getElementById('cargo').value || 'Seu Cargo';
            
            document.getElementById('cardNome').innerText = nome;
            document.getElementById('cardCargo').innerText = cargo;
        }

        function mudarCor() {
            const cor = document.getElementById('cores').value;
            document.documentElement.style.setProperty('--card-color', cor);
            document.getElementById('corPersonalizada').value = cor;
        }

        function mudarCorPersonalizada() {
            const cor = document.getElementById('corPersonalizada').value;
            document.documentElement.style.setProperty('--card-color', cor);
            document.getElementById('cores').value = cor;
        }