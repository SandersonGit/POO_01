function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log("acelerar");
    }
}

const carroDoSanderson = new Carro("Sentra", "Nissan", 2022, 2021);

console.log(carroDoSanderson);

function Heroi(Nome, classe, HP, ataque, defesa, velocidade ){
    this.Nome = Nome;
    this.classe = classe;
    this.HP = HP;
    this.ataque = ataque;
    this.defesa = defesa;
    this.velocidade = velocidade
}

const Guerreiro = new Heroi("Cesar", "Guerreiro", 150, 100, 80, 55);
console.log(Guerreiro);
