
function validarCompromissos() {
   
    const inputHorarios = document.getElementById('horarios').value;
    const agendaHorarios = inputHorarios.split(',').map(h => parseInt(h.trim()));

 
    if (agendaHorarios.some(isNaN)) {
        alert('Por favor, digite apenas números separados por vírgula!');
        return;
    }

 
    let contagemValidos = 0;
    let contagemInvalidos = 0;


    const resultados = [];

  
    
    console.log('=== INICIANDO VALIDAÇÃO DE COMPROMISSOS ===');
    
    for (const horario of agendaHorarios) {
        
        if (horario >= 0 && horario <= 23) {
           
            const mensagem = `Compromisso agendado para as ${horario}h`;
            console.log(mensagem);
            
            resultados.push({
                tipo: 'valido',
                mensagem: mensagem
            });
            
            contagemValidos++; 
            
        } else {
           
            const mensagem = `Atenção: O horário ${horario}h é inválido!`;
            console.log(mensagem);
            
            resultados.push({
                tipo: 'invalido',
                mensagem: mensagem
            });
            
            contagemInvalidos++; 
        }
    }

 
    console.log(`\n TOTAL DE COMPROMISSOS VÁLIDOS: ${contagemValidos}`);
    console.log(`  TOTAL DE COMPROMISSOS INVÁLIDOS: ${contagemInvalidos}`);
    console.log('=== FIM DA VALIDAÇÃO ===\n');


    exibirResultados(resultados, contagemValidos, contagemInvalidos, agendaHorarios.length);
}


function exibirResultados(resultados, validos, invalidos, total) {
    const listaValidacao = document.getElementById('lista-validacao');
    const resumo = document.getElementById('resumo');
    const divResultados = document.getElementById('resultados');

   
    listaValidacao.innerHTML = '';

    resultados.forEach(resultado => {
        const div = document.createElement('div');
        div.className = `resultado-item ${resultado.tipo}`;
        div.textContent = resultado.mensagem;
        listaValidacao.appendChild(div);
    });

    
    resumo.innerHTML = `
        <h3> Resumo da Validação</h3>
        <div class="resumo-stats">
            <div class="stat">
                <div class="stat-number">${total}</div>
                <div class="stat-label">Total</div>
            </div>
            <div class="stat">
                <div class="stat-number">${validos}</div>
                <div class="stat-label">Válidos</div>
            </div>
            <div class="stat">
                <div class="stat-number">${invalidos}</div>
                <div class="stat-label">Inválidos</div>
            </div>
        </div>
    `;

    
    divResultados.classList.remove('hidden');

   
    divResultados.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


function limparResultados() {
    document.getElementById('resultados').classList.add('hidden');
    document.getElementById('horarios').value = '8, 12, 25, 15, -2, 20';
}


document.addEventListener('DOMContentLoaded', function() {
    const inputHorarios = document.getElementById('horarios');
    
    if (inputHorarios) {
        inputHorarios.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validarCompromissos();
            }
        });
    }
});


function exemploForTradicional() {
    const agendaHorarios = [8, 12, 25, 15, -2, 20];
    let contagemValidos = 0;
    
    console.log('\n--- EXEMPLO COM FOR TRADICIONAL ---');
    
    for (let i = 0; i < agendaHorarios.length; i++) {
        const horario = agendaHorarios[i];
        
        if (horario >= 0 && horario <= 23) {
            console.log(`Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`Atenção: O horário ${horario}h é inválido!`);
        }
    }
    
    console.log(`Total de válidos: ${contagemValidos}`);
}


function exemploForOf() {
    const agendaHorarios = [8, 12, 25, 15, -2, 20];
    let contagemValidos = 0;
    
    console.log('\n--- EXEMPLO COM FOR...OF ---');
    
    for (const horario of agendaHorarios) {
        if (horario >= 0 && horario <= 23) {
            console.log(`Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`Atenção: O horário ${horario}h é inválido!`);
        }
    }
    
    console.log(`Total de válidos: ${contagemValidos}`);
}


function exemploForEach() {
    const agendaHorarios = [8, 12, 25, 15, -2, 20];
    let contagemValidos = 0;
    
    console.log('\n--- EXEMPLO COM FOREACH ---');
    
    agendaHorarios.forEach((horario) => {
        if (horario >= 0 && horario <= 23) {
            console.log(`Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`Atenção: O horário ${horario}h é inválido!`);
        }
    });
    
    console.log(`Total de válidos: ${contagemValidos}`);
}

