var salario=parseFloat(prompt("Questão 8:  informe o salario:"));

if(salario<=280){
    var novoSalario = salario*1.2;
    var aumento = novoSalario-salario;
    document.write("O salario antes do reajuste era de: "+salario+","+"O percentual de aumento foi de: 20%, Totalizando em um aumento de: "+aumento+","+"e com isso o novo salario é de:"+NovoSalario);
}
else if((salario>280 && salario<=700)){
    var novoSalario = salario*1.15;
    var aumento = novoSalario-salario;
    document.write("O salario antes do reajuste era de: "+salario+","+"O percentual de aumento foi de: 15%, Totalizando em um aumento de: "+aumento+","+"e com isso o novo salario é de:"+NovoSalario);
}
else if((salario>700 && salario<=1500)){
    var novoSalario = salario*1.1;
    var aumento = novoSalario-salario;
    document.write("O salario antes do reajuste era de: "+salario+","+"O percentual de aumento foi de: 10%, Totalizando em um aumento de: "+aumento+","+"e com isso o novo salario é de:"+NovoSalario);
}
else{
    var novoSalario = salario*1.05;
    var aumento = novoSalario-salario;
    document.write("O salario antes do reajuste era de: "+salario+","+"O percentual de aumento foi de: 5%, Totalizando em um aumento de: "+aumento+","+"e com isso o novo salario é de:"+NovoSalario);
}