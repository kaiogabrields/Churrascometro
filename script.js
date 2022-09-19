//Carne - 400gr por pessoa + de 6 horas 650
//Cerveja - 1200ml por pessoa + 6 horas 2000ml
//Refrigerante/agua - 100ml por pessoa + 6horas 1500ml

//crianças valem por 0,5

const form = document.getElementById("form")
const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("crianças");
const inputDuracao = document.getElementById("duraçao");
const buttonCalcular = document.getElementById("calcular")
const resultado = document.getElementById("result")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    calcular();
});    

function calcular(){
    let adultos = inputAdultos.value; 
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = (carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) /2 * criancas))/1000;
    let qntTotalCerveja = (cervejaPorPessoa(duracao) * adultos) /350;
    let qntTotalBebidas = (bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) /2 * criancas))/2000;

    resultado.innerHTML = `<p>${qntTotalCarne} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebidas)} garrafas de Bebidas</p>`

}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}