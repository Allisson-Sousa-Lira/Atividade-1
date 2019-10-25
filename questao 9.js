var nomeMes = [" ","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"];
var data = prompt("Digite a data");
var cadaSilaba = data.split("/");
document.write(cadaSilaba[0]+" de "+nomeMes[cadaSilaba[1]]+" de "+cadaSilaba[2]);