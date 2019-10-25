var funcionario = parseFloat(prompt("informe o numero do funcionaro:"));
var horas_mensais = parseFloat(prompt("informe o total de horas trabalhadas mensalmente:"));
var valor_hora = parseFloat(prompt("informe o ganho por hora:"));
var filhos = parseInt(prompt("informe a quantidade de filhos menores que 14 anos:"));
var salario = (valor_hora*horas_mensais)+filhos*1.1;
document.write("O salario do funcionario: "+funcionario+"é: "+salario);