var quantidade = parseInt(prompt("Diga a quantidade de numeros que ira digitar:"));

var k;
var soma=0;

for(k=1; k<=quantidade; k++){
    var n=parseInt(prompt("Digite um numero:"));
    var x;
    var cont=0;
    for(x=1; x<=n; x++){
        if(n%x==0){
            cont++;
        }
    }
    if(cont==2){
        soma=soma+n;
    }
}
document.write("A soma de todos os numeros primos digitados é:" + soma);