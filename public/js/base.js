

let pessoaDefaut = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "Programador",
}

function imprimirPessoa (pessoa) {

    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


imprimirPessoa(pessoaDefaut);
