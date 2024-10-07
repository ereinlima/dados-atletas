class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, 4);
        let soma = 0;
        notasValidas.forEach(nota => {
            soma = soma + nota;
        });
        let media = soma / notasValidas.length;
        return media;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas.join(", ");
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

//Exemplo
const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
const atleta2 = new Atleta("Fernando Puntel", 27, 76, 1.68, [8, 10, 10, 7, 9.33]);

console.log("Nome: " + atleta1.obtemNomeAtleta());
console.log("Idade: " + atleta1.obtemIdadeAtleta());
console.log("Peso: " + atleta1.obtemPesoAtleta());
console.log("Altura: " + atleta1.altura);
console.log("Notas: " + atleta1.obtemNotasAtleta());
console.log("Categoria: " + atleta1.obtemCategoria());
console.log("IMC: " + atleta1.obtemIMC());
console.log("Média válida: " + atleta1.obtemMediaValida().toFixed(6));
