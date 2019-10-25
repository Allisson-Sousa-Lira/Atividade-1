var celsius=parseFloat(prompt("Digite a temperatura em celsius:"));
var fahrenheit=(celsius*1.8)+32;

document.write(celsius +" graus celsius correspondem a: "+fahrenheit+" graus fahrenheit");


if(fahrenheit<10){
    document.write("Muito Frio !");
    
}
else if((fahrenheit>10 && fahrenheit<=15)){
    document.write("Frio !");
    
}
else if(fahrenheit>15 && fahrenheit<=22){
    document.write("normal");
    
}
else{
    document.write("Quente");
    
}