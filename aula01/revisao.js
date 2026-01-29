// ============================================================================
// LISTA DE EXERCÍCIOS PFE - AGENDA INTELIGENTE
// Tópicos: Operadores Lógicos, Estruturas de Decisão, Repetição e Funções
// ============================================================================

console.log("╔═══════════════════════════════════════════════════════════════════╗");
console.log("║     EXERCÍCIOS PFE - AGENDA INTELIGENTE                           ║");
console.log("╚═══════════════════════════════════════════════════════════════════╝\n");

// ============================================================================
// EXERCÍCIO 1: VERIFICADOR DE TURNO E PRIORIDADE
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" EXERCÍCIO 1: Verificador de Turno e Prioridade");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

/**
 * Função que verifica e classifica uma tarefa baseada na hora e prioridade
 * @param {number} hora - Hora da tarefa (0-23)
 * @param {number} prioridade - Nível de prioridade (1-10)
 * @returns {string} Classificação da tarefa
 */
function verificarTarefa(hora, prioridade) {
    // Validação de horário
    if (hora < 0 || hora > 23) {
        return " Horário Inválido";
    }
    
    // Validação de prioridade
    if (prioridade < 1 || prioridade > 10) {
        return " Nível de Prioridade Inválida";
    }
    
    // Determinar o turno usando estrutura de decisão
    let turno;
    if (hora >= 0 && hora <= 11) {
        turno = "Manhã";
    } else if (hora >= 12 && hora <= 17) {
        turno = "Tarde";
    } else {
        turno = "Noite";
    }
    
    // Aplicar lógica de classificação usando OPERADORES LÓGICOS (&&, ||)
    
    // Condição 1: TAREFA CRÍTICA/URGENTE
    // Prioridade > 8 E (Manhã OU Tarde)
    if (prioridade > 8 && (turno === "Manhã" || turno === "Tarde")) {
        return ` TAREFA CRÍTICA/URGENTE - ${turno} às ${hora}h - Prioridade: ${prioridade}`;
    }
    
    // Condição 2: TAREFA IMPORTANTE
    // Prioridade >= 7 E < 9 E (Manhã OU Tarde)
    else if (prioridade >= 7 && prioridade < 9 && (turno === "Manhã" || turno === "Tarde")) {
        return `  TAREFA IMPORTANTE - ${turno} às ${hora}h - Prioridade: ${prioridade}`;
    }
    
    // Condição 3: TAREFA NÃO IMPORTANTE
    // Qualquer prioridade E turno = Noite
    else if (turno === "Noite") {
        return ` TAREFA NÃO IMPORTANTE - ${turno} às ${hora}h (Noites são para lazer!)`;
    }
    
    // Caso padrão
    else {
        return ` Tarefa Agendada - ${turno} às ${hora}h - Prioridade: ${prioridade}`;
    }
}

// Testando o Exercício 1
console.log("Testes do Exercício 1:");
console.log(verificarTarefa(9, 9));    // Manhã, prioridade alta
console.log(verificarTarefa(14, 8));   // Tarde, prioridade importante
console.log(verificarTarefa(20, 10));  // Noite, qualquer prioridade
console.log(verificarTarefa(25, 5));   // Horário inválido
console.log(verificarTarefa(10, 15));  // Prioridade inválida
console.log(verificarTarefa(8, 5));    // Manhã, prioridade média
console.log("\n");


// ============================================================================
// EXERCÍCIO 2: CALCULADORA DE GASTOS MENSAIS
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" EXERCÍCIO 2: Calculadora de Gastos Mensais");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

/**
 * Função que calcula o saldo mensal após despesas
 * @param {number} salario - Salário mensal
 * @param {number} aluguel - Despesa com aluguel
 * @param {number} alimentacao - Despesa com alimentação
 * @param {number} lazer - Despesa com lazer
 * @returns {object} Objeto com detalhes financeiros
 */
function calcularGastos(salario, aluguel, alimentacao, lazer) {
    // Usando OPERADORES ARITMÉTICOS (+, -)
    const totalDespesas = aluguel + alimentacao + lazer;
    const saldo = salario - totalDespesas;
    
    // Estrutura IF/ELSE para classificar o saldo
    let status;
    let emoji;
    
    if (saldo > 0) {
        status = "Saldo Positivo";
        emoji = "";
    } else if (saldo === 0) {
        status = "No Limite";
        emoji = "";
    } else {
        status = "Saldo Negativo";
        emoji = "";
    }
    
    return {
        salario: salario,
        totalDespesas: totalDespesas,
        saldo: saldo,
        status: status,
        emoji: emoji
    };
}

/**
 * Função auxiliar para exibir relatório financeiro
 */
function exibirRelatorioFinanceiro(salario, aluguel, alimentacao, lazer) {
    const resultado = calcularGastos(salario, aluguel, alimentacao, lazer);
    
    console.log(" Relatório Financeiro:");
    console.log(`   Salário:        R$ ${resultado.salario.toFixed(2)}`);
    console.log(`   Aluguel:        R$ ${aluguel.toFixed(2)}`);
    console.log(`   Alimentação:    R$ ${alimentacao.toFixed(2)}`);
    console.log(`   Lazer:          R$ ${lazer.toFixed(2)}`);
    console.log(`   ─────────────────────────────────`);
    console.log(`   Total Despesas: R$ ${resultado.totalDespesas.toFixed(2)}`);
    console.log(`   Saldo Final:    R$ ${resultado.saldo.toFixed(2)}`);
    console.log(`   ${resultado.emoji} Status: ${resultado.status}`);
    console.log("");
}

// Testando o Exercício 2
console.log("Testes do Exercício 2:");
exibirRelatorioFinanceiro(3000, 800, 600, 400);  // Saldo positivo
exibirRelatorioFinanceiro(2500, 1000, 900, 600); // No limite
exibirRelatorioFinanceiro(2000, 1000, 800, 500); // Saldo negativo
console.log("\n");


// ============================================================================
// EXERCÍCIO 3: FORMATADOR DE NOMES PARA A AGENDA
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" EXERCÍCIO 3: Formatador de Nomes para a Agenda");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

/**
 * Função que limpa e formata nomes de contatos
 * @param {string} nome - Nome do contato (possivelmente com espaços extras)
 * @returns {object} Objeto com nome formatado e informações adicionais
 */
function limparNomeContato(nome) {
    // 1. Remover espaços em branco no início e no fim usando trim()
    const nomeLimpo = nome.trim();
    
    // 2. Transformar toda a string em letras MAIÚSCULAS usando toUpperCase()
    const nomeMaiusculo = nomeLimpo.toUpperCase();
    
    // 3. BÔNUS: Usar split() e length para contar quantas palavras
    // Primeiro, divide a string por espaços
    const palavras = nomeLimpo.split(' ');
    
    // Filtrar palavras vazias (caso haja múltiplos espaços)
    const palavrasFiltradas = palavras.filter(palavra => palavra.length > 0);
    
    // Contar palavras
    const quantidadePalavras = palavrasFiltradas.length;
    
    // 4. Retornar a string formatada e informações extras
    return {
        original: nome,
        formatado: nomeMaiusculo,
        palavras: quantidadePalavras,
        primeiroNome: palavrasFiltradas[0] || "",
        ultimoNome: palavrasFiltradas[palavrasFiltradas.length - 1] || ""
    };
}

// Testando o Exercício 3
console.log("Testes do Exercício 3:");

const teste1 = limparNomeContato("  joão silva  ");
console.log(`Original: "${teste1.original}"`);
console.log(`Formatado: "${teste1.formatado}"`);
console.log(`Palavras: ${teste1.palavras}`);
console.log("");

const teste2 = limparNomeContato("maria     aparecida    dos    santos");
console.log(`Original: "${teste2.original}"`);
console.log(`Formatado: "${teste2.formatado}"`);
console.log(`Palavras: ${teste2.palavras}`);
console.log(`Primeiro Nome: ${teste2.primeiroNome}`);
console.log(`Último Nome: ${teste2.ultimoNome}`);
console.log("");

const teste3 = limparNomeContato("   pedro   ");
console.log(`Original: "${teste3.original}"`);
console.log(`Formatado: "${teste3.formatado}"`);
console.log(`Palavras: ${teste3.palavras}`);
console.log("\n");


// ============================================================================
// EXERCÍCIO 4: CONTADOR DE DIAS PARA O EVENTO
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" EXERCÍCIO 4: Contador de Dias para o Evento");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

/**
 * Função que calcula quantos dias faltam para um evento
 * @param {Date} dataEvento - Data do evento
 * @returns {object} Objeto com informações sobre o evento
 */
function calcularDiasParaEvento(dataEvento) {
    // 1. Criar objeto de data para hoje
    const dataHoje = new Date();
    
    // 2. Calcular a diferença em MILISSEGUNDOS
    const diferencaMs = dataEvento - dataHoje;
    
    // 3. Converter para dias
    // Fórmula: 1 dia = 24 horas × 60 minutos × 60 segundos × 1000 milissegundos
    const umDiaEmMs = 24 * 60 * 60 * 1000;
    const diferencaDias = diferencaMs / umDiaEmMs;
    
    // 4. Usar Math.ceil() para arredondar para cima
    const diasRestantes = Math.ceil(diferencaDias);
    
    return {
        dataHoje: dataHoje,
        dataEvento: dataEvento,
        diasRestantes: diasRestantes,
        jaPassou: diasRestantes < 0,
        eHoje: diasRestantes === 0
    };
}

/**
 * Função auxiliar para exibir informações do evento
 */
function exibirContagemEvento(dataEvento) {
    const info = calcularDiasParaEvento(dataEvento);
    
    console.log(` Data de Hoje: ${info.dataHoje.toLocaleDateString('pt-BR')}`);
    console.log(` Data do Evento: ${info.dataEvento.toLocaleDateString('pt-BR')}`);
    
    if (info.eHoje) {
        console.log(" O evento é HOJE!");
    } else if (info.jaPassou) {
        console.log(` O evento já passou há ${Math.abs(info.diasRestantes)} dia(s).`);
    } else {
        console.log(` Faltam ${info.diasRestantes} dia(s) para o seu compromisso!`);
    }
    console.log("");
}

// Testando o Exercício 4
console.log("Testes do Exercício 4:");

// Evento daqui a 15 dias
const evento1 = new Date();
evento1.setDate(evento1.getDate() + 15);
exibirContagemEvento(evento1);

// Evento daqui a 1 dia
const evento2 = new Date();
evento2.setDate(evento2.getDate() + 1);
exibirContagemEvento(evento2);

// Evento que já passou (5 dias atrás)
const evento3 = new Date();
evento3.setDate(evento3.getDate() - 5);
exibirContagemEvento(evento3);

console.log("\n");


// ============================================================================
// EXERCÍCIO 5: VARREDURA DE COMPROMISSOS (LOOPS)
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" EXERCÍCIO 5: Varredura de Compromissos (Loops)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

// Array de horários para teste (inclui valores inválidos)
const agendaHorarios = [8, 12, 25, 15, -2, 20];

console.log(" Array de horários:", agendaHorarios);
console.log("");

// ========== MÉTODO 1: FOR TRADICIONAL ==========
console.log("━━━ Método 1: FOR TRADICIONAL ━━━");
console.log("Características:");
console.log("  ✓ Controle total sobre a iteração");
console.log("  ✓ Acesso ao índice de forma nativa");
console.log("  ✓ Pode usar break e continue");
console.log("  ✓ Pode iterar de trás para frente");
console.log("");

function varrerCompromissosFor(horarios) {
    let contagemValidos = 0;
    
    // Loop FOR tradicional
    for (let i = 0; i < horarios.length; i++) {
        const horario = horarios[i];
        
        // Estrutura de decisão para validar horário
        if (horario >= 0 && horario <= 23) {
            console.log(` [${i}] Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`  [${i}] Atenção: O horário ${horario}h é inválido!`);
        }
    }
    
    console.log(` Total de compromissos válidos: ${contagemValidos}`);
    return contagemValidos;
}

varrerCompromissosFor(agendaHorarios);
console.log("\n");


// ========== MÉTODO 2: FOR...OF ==========
console.log("━━━ Método 2: FOR...OF ━━━");
console.log("Características:");
console.log("  ✓ Sintaxe mais limpa e moderna (ES6)");
console.log("  ✓ Itera diretamente sobre os valores");
console.log("  ✓ Não fornece índice automaticamente");
console.log("  ✓ Pode usar break e continue");
console.log("");

function varrerCompromissosForOf(horarios) {
    let contagemValidos = 0;
    let indice = 0; // Precisamos criar manualmente se quisermos o índice
    
    // Loop FOR...OF
    for (const horario of horarios) {
        // Estrutura de decisão para validar horário
        if (horario >= 0 && horario <= 23) {
            console.log(` [${indice}] Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`  [${indice}] Atenção: O horário ${horario}h é inválido!`);
        }
        indice++;
    }
    
    console.log(` Total de compromissos válidos: ${contagemValidos}`);
    return contagemValidos;
}

varrerCompromissosForOf(agendaHorarios);
console.log("\n");


// ========== MÉTODO 3: FOREACH ==========
console.log("━━━ Método 3: FOREACH ━━━");
console.log("Características:");
console.log("  ✓ Método de array (programação funcional)");
console.log("  ✓ Recebe função callback");
console.log("  ✓ Fornece valor, índice e array completo");
console.log("  ✓ NÃO pode usar break/continue");
console.log("  ✓ Mais semântico para processar todos os itens");
console.log("");

function varrerCompromissosForEach(horarios) {
    let contagemValidos = 0;
    
    // Loop FOREACH (método do array)
    horarios.forEach((horario, indice, arrayCompleto) => {
        // Estrutura de decisão para validar horário
        if (horario >= 0 && horario <= 23) {
            console.log(` [${indice}] Compromisso agendado para as ${horario}h`);
            contagemValidos++;
        } else {
            console.log(`  [${indice}] Atenção: O horário ${horario}h é inválido!`);
        }
    });
    
    console.log(` Total de compromissos válidos: ${contagemValidos}`);
    return contagemValidos;
}

varrerCompromissosForEach(agendaHorarios);
console.log("\n");


// ========== COMPARAÇÃO E ANÁLISE ==========
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" COMPARAÇÃO ENTRE OS MÉTODOS");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("┌─────────────┬──────────┬──────────┬──────────┐");
console.log("│ Critério    │   FOR    │ FOR...OF │ FOREACH  │");
console.log("├─────────────┼──────────┼──────────┼──────────┤");
console.log("│ Legibilidade│    ★★☆   │   ★★★    │   ★★★    │");
console.log("│ Performance │   ★★★    │   ★★★    │   ★★☆    │");
console.log("│ Índice      │        │        │        │");
console.log("│ Break/Cont. │        │        │        │");
console.log("│ Moderno     │   ★☆☆    │   ★★★    │   ★★★    │");
console.log("└─────────────┴──────────┴──────────┴──────────┘\n");

console.log(" RECOMENDAÇÃO PARA NOSSA SITUAÇÃO:");
console.log("   Para validar horários na agenda:");
console.log("   1️  FOREACH - Mais semântico (queremos processar TODOS)");
console.log("   2️  FOR...OF - Sintaxe limpa e moderna");
console.log("   3️  FOR - Quando precisar de controle total");
console.log("\n");


// ============================================================================
// DESAFIO EXTRA: FUNÇÃO COMPLETA DE AGENDA
// ============================================================================

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(" DESAFIO EXTRA: Sistema Completo de Agenda");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

/**
 * Classe Agenda que integra todos os exercícios
 */
class Agenda {
    constructor() {
        this.tarefas = [];
        this.contatos = [];
        this.eventos = [];
    }
    
    adicionarTarefa(hora, prioridade, descricao) {
        const classificacao = verificarTarefa(hora, prioridade);
        this.tarefas.push({ hora, prioridade, descricao, classificacao });
        return classificacao;
    }
    
    adicionarContato(nome) {
        const contatoFormatado = limparNomeContato(nome);
        this.contatos.push(contatoFormatado);
        return contatoFormatado.formatado;
    }
    
    adicionarEvento(dataEvento, descricao) {
        const info = calcularDiasParaEvento(new Date(dataEvento));
        this.eventos.push({ dataEvento, descricao, info });
        return info.diasRestantes;
    }
    
    listarTarefas() {
        console.log(" TAREFAS AGENDADAS:");
        this.tarefas.forEach((tarefa, index) => {
            console.log(`   ${index + 1}. ${tarefa.descricao}`);
            console.log(`      ${tarefa.classificacao}`);
        });
    }
    
    listarContatos() {
        console.log("\n CONTATOS:");
        this.contatos.forEach((contato, index) => {
            console.log(`   ${index + 1}. ${contato.formatado} (${contato.palavras} palavra(s))`);
        });
    }
    
    listarEventos() {
        console.log("\n EVENTOS FUTUROS:");
        this.eventos.forEach((evento, index) => {
            console.log(`   ${index + 1}. ${evento.descricao}`);
            if (evento.info.eHoje) {
                console.log(`       É HOJE!`);
            } else if (evento.info.jaPassou) {
                console.log(`       Passou há ${Math.abs(evento.info.diasRestantes)} dia(s)`);
            } else {
                console.log(`       Faltam ${evento.info.diasRestantes} dia(s)`);
            }
        });
    }
}

// Testando a classe Agenda
const minhaAgenda = new Agenda();

minhaAgenda.adicionarTarefa(9, 10, "Reunião importante com cliente");
minhaAgenda.adicionarTarefa(14, 8, "Revisar projeto");
minhaAgenda.adicionarTarefa(20, 5, "Responder e-mails");

minhaAgenda.adicionarContato("  maria silva  ");
minhaAgenda.adicionarContato("joão    pedro    santos");
minhaAgenda.adicionarContato("   ana   ");

const evento1Date = new Date();
evento1Date.setDate(evento1Date.getDate() + 7);
minhaAgenda.adicionarEvento(evento1Date, "Apresentação do projeto final");

const evento2Date = new Date();
evento2Date.setDate(evento2Date.getDate() + 30);
minhaAgenda.adicionarEvento(evento2Date, "Viagem de férias");

// Exibir toda a agenda
minhaAgenda.listarTarefas();
minhaAgenda.listarContatos();
minhaAgenda.listarEventos();

console.log("\n");
console.log("╔═══════════════════════════════════════════════════════════════════╗");
console.log("║      TODOS OS EXERCÍCIOS CONCLUÍDOS COM SUCESSO!               ║");
console.log("╚═══════════════════════════════════════════════════════════════════╝");
