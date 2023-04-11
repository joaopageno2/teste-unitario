// Criando o servidor
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());
const calculaSalario1 = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
  };
  
  var valorEsperado = 5200
  if (valorEsperado === calculaSalario1(5000, 200)){
    console.log(`Teste cenÃ¡rio 1 aprovado`)
  } else {
    console.log(`Teste cenÃ¡rio 1 reprovado`)
  }
  
  valorEsperado = 5000
  if (valorEsperado === calculaSalario1(5000, 0)) {
    console.log(`Teste cenÃ¡rio 2 aprovado`)
  } else {
    console.log(`Teste cenÃ¡rio 2 reprovado`)
  }

const calculaSalario2 = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras;
  };
  
  const testaFuncao = (nomeFuncao, cenario, valorEsperado, valorRetornado) => {
    if (valorEsperado === valorRetornado) {
      console.log(`Teste da funÃ§Ã£o ${nomeFuncao}: cenÃ¡rio ${cenario} aprovado.`)
    } else {
      console.log(`Teste da funÃ§Ã£o ${nomeFuncao}: cenÃ¡rio ${cenario} reprovado.`)
    }
  }
  
  testaFuncao("calculaSalario", 1, 5200, calculaSalario2(5000, 200))
  testaFuncao("calculaSalario", 2, 5000, calculaSalario2(5000, 0))

