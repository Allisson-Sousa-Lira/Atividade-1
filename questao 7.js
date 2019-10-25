var nota1 = parseFloat(prompt("Digite uma nota :"));
var nota2 = parseFloat(prompt("Digite uma nota :"));
var nota3 = parseFloat(prompt("Digite uma nota :"));
var nota4 = parseFloat(prompt("Digite uma nota :"));
var media = (nota1 + nota2 + nota3 + nota4 )/4;
var final =  media - 28 ;
if(media >= 7){
    document.write("O aluno foi aprovado ");
}
else if(media < 7 && media >= 4){
    document.write("O aluno esta na final e precisa de " + final + " para passar ");
}
else{
    document.write("O aluno esta reprovado");
}