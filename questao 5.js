var n1 = Number.parseFloat(prompt("Digite o primeiro numero "));
var n2 = Number.parseFloat(prompt("Digite o segundo numero "));

var opção = Number.parseInt(prompt("Digite uma das opções : [1] , [2] ou [3]"));
if(opção == 1 ){
    var operação = n1 + n2;
}
else if(opção==2){
    var operação = n1*n2;
}
else if(opção==3){
    var operação = n1/n2;
}
else{
    document.write("Voce nao escolheu uma opção valida!");
}
