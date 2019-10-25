var produto = Number.parseInt(prompt("Digite o valor do produto a vista "));
var numParcelas = prompt("Vai dividir em 3 vezes ou em 5 ?");

if(numParcelas==3){
    var acressimo= produto * 1.1;
    var parcelas = acressimo/numParcelas;
}
else if(numParcelas==5){
    var acressimo = produto * 1.2;
    var parcelas = acressimo/numParcelas;
}
else{
    var parcelas = produto / numParcelas;
}