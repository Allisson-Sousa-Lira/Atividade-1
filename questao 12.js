var frase = prompt("Informe uma frase:");
var palavra = prompt("informe a palavra que deseja verificar:");
var resultado = frase.split(" ");
var cont=0;

for(var k=0; k<resultado.length; k++){
    if(palavra==resultado[k]){
        cont++;
    }
}
