// A.1. Definição dos dados (JSON) 
// A.1. Definição dos dados (JSON)
const catalogo = [
  { id: 1, titulo: "Chef's Table", tipo: "serie", ano: 2024, generos: ["Documentário", "Culinária"], nota: 10, assistido: true },
  { id: 2, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["Ficção Científica", "Aventura"], nota: 10, assistido: true },
  { id: 3, titulo: "Uma mente excepcional", tipo: "serie", ano: 2024, generos: ["Comédia", "Policial"], nota: 9.5, assistido: true },
  { id: 4, titulo: "Jovem Sheldon", tipo: "serie", ano: 2024, generos: ["Comedia", "Sitcom"], nota: 9.8, assistido: false },
  { id: 5, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama","Comedia"], nota: 10, assistido: true },
  { id: 6, titulo: "Duna", tipo: "filme", ano: 2021, generos: ["Ficção Científica"], nota: 8.0, assistido: false }
];

// A.2. Acesso e leitura dos dados (apenas no console)
console.log("Catálogo Completo:", catalogo);
console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

// B.1. Listagem de títulos (console)
console.log("A) Listagem de Títulos");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.2. Títulos em caixa alta (console)
console.log("B) Títulos em Caixa Alta");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// B.3. Filtragem de não assistidos (console)
console.log("C) Não Assistidos");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Temos ${naoAssistidos.length} item(ns) não assistido(s).`);

// B.4. Busca por nota alta (console)
console.log("D) Busca por nota >= 9");
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Encontrado: ${notaAlta.titulo} (Nota: ${notaAlta.nota})`);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

// C.1. Cálculos de médias
console.log("E) Médias das Notas");

const somaNotas = catalogo.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido === true);
const somaNotasAssistidos = assistidos.reduce((acumulador, item) => acumulador + item.nota, 0);
const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média dos assistidos: ${mediaAssistidos.toFixed(2)}`);

// C.2. Checagens
console.log("F) Checagens");
const temAntigo = catalogo.some(item => item.ano < 2000);
console.log(`Existe algum item com ano < 2000? ${temAntigo}`);

const todosTemGenero = catalogo.every(item => item.generos && item.generos.length >= 1);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTemGenero}`);

// D.1. Contagens e ranking
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

console.log("Ranking das três maiores notas:");
ranking.forEach((item, index) => {
    console.log(`${index + 1}. ${item.titulo} - Nota: ${item.nota}`);
});

// ESCREVENDO NA PÁGINA (DOM)

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Filmes: ${qtdFilmes} | Séries: ${qtdSeries}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral das notas: ${mediaGeral.toFixed(2)}</p>

    <h2>Top 3 - Melhores Notas</h2>
    <p>1. ${ranking[0].titulo} - Nota: ${ranking[0].nota}</p>
    <p>2. ${ranking[1].titulo} - Nota: ${ranking[1].nota}</p>
    <p>3. ${ranking[2].titulo} - Nota: ${ranking[2].nota}</p>

    <h2>Lista Completa de Escolhas</h2>
    <p>${catalogo[0].titulo} (${catalogo[0].ano}) - Nota: ${catalogo[0].nota}</p>
    <p>${catalogo[1].titulo} (${catalogo[1].ano}) - Nota: ${catalogo[1].nota}</p>
    <p>${catalogo[2].titulo} (${catalogo[2].ano}) - Nota: ${catalogo[2].nota}</p>
    <p>${catalogo[3].titulo} (${catalogo[3].ano}) - Nota: ${catalogo[3].nota}</p>
    <p>${catalogo[4].titulo} (${catalogo[4].ano}) - Nota: ${catalogo[4].nota}</p>
    <p>${catalogo[5].titulo} (${catalogo[5].ano}) - Nota: ${catalogo[5].nota}</p>
`;