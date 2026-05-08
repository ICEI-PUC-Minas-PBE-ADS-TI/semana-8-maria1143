// A.1. Definição dos dados (JSON) 
const catalogo = [
  { id: 1, titulo: "Chef's Table", tipo: "serie", ano: 2024, generos: ["Documentário", "Culinária"], nota: 10, assistido: true },
  { id: 2, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["Ficção Científica", "Aventura"], nota: 10, assistido: true },
  { id: 3, titulo: "Uma mente excepcional", tipo: "serie", ano: 2024, generos: ["Comédia", "Policial"], nota: 9.5, assistido: true },
  { id: 4, titulo: "Jovem Sheldon", tipo: "serie", ano: 2024, generos: ["Comedia", "Sitcom"], nota: 9.8, assistido: false },
  { id: 5, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama","Comedia"], nota: 10, assistido: true },
  { id: 6, titulo: "Duna", tipo: "filme", ano: 2021, generos: ["Ficção Científica"], nota: 8.0, assistido: false}
];

//  A.2. Acesso e leitura dos dados 
console.log("Catálogo Completo:", catalogo);
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

//  B.1. Listagem de títulos 
console.log(" A) Listagem de Títulos ");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.2. Títulos em caixa alta 
console.log(" B) Títulos em Caixa Alta ");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

//  B.3. Filtragem de não assistidos
console.log(" C) Não Assistidos ");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Temos ${naoAssistidos.length} item(ns) não assistido(s).`);

// B.4. Busca por nota alta
console.log(" D) Busca por nota >= 9 ");
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Encontrado: ${notaAlta.titulo} (Nota: ${notaAlta.nota})`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

//  C.1. Cálculos de médias 
console.log("E) Médias das Notas ");

const somaNotas = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido === true);
const somaNotasAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média dos assistidos: ${mediaAssistidos.toFixed(2)}`);

// C.2. Checagens 
console.log(" F) Checagens ");
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item com ano < 2000? ${temAntigo}`);

const todosTemGenero = catalogo.every(item => item.generos && item.generos.length >= 1);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTemGenero}`);

// D.1. Contagens e rankings 
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

// D.2. Geração de HTML para ranking 
let rankingHTML = "<ol>";
ranking.forEach(item => {
    rankingHTML += `<li><strong>${item.titulo}</strong> - Nota: ${item.nota}</li>`;
});
rankingHTML += "</ol>";

/* D.3. Geração de HTML para lista completa (isso foi dificio porque tem que ser 
tudo em string e tem que usar o forEach para montar a string, não pode usar o
 map porque ele retorna um array e não uma string. ps: o foreach é mais fácil de 
 usar para montar strings do que o map, porque o map é mais indicado para transformar 
 arrays em outros arrays, enquanto o foreach é mais indicado para executar uma função
  para cada elemento do array, sem se preocupar com o retorno.)
 */
let listaCompletaHTML = "<ul>";
catalogo.forEach(item => {
    let status = item.assistido ? " Assistido" : " Não assistido";
    listaCompletaHTML += `<li style="margin-bottom: 10px;">
        <strong>${item.titulo}</strong> (${item.ano}) - ${item.tipo.toUpperCase()} <br>
        Gêneros: ${item.generos.join(", ")} | Nota: ${item.nota} | Status: ${status}
    </li>`;
});
listaCompletaHTML += "</ul>";

// E.1. Exibição no DOM 
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <h2>Resumo do Catálogo:</h2>
    <ul>
        <li><strong>Total de itens:</strong> ${catalogo.length}</li>
        <li><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</li>
        <li><strong>Não assistidos:</strong> ${naoAssistidos.length}</li>
        <li><strong>Média geral das notas:</strong> ${mediaGeral.toFixed(2)}</li>
    </ul>
    
    <h3> Top 3 - Melhores Notas:</h3>
    ${rankingHTML}

    <h3> Lista Completa de Escolhas:</h3>
    ${listaCompletaHTML}
`;