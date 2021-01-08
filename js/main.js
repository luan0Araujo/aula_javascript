/*
var nome="Luan de Araujo";
var idade=21;
var n1=7;
var n2=5;
var curso="Analise e Desenvolvimento de Sistemas";
alert(nome + " tem " + idade + " anos");
console.log("resultado: " + n1 * n2);
console.log(curso.toUpperCase());
console.log(curso.replace("Analise", "3"));
*/



/*Dicionario
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/

/*Lista de Dicionarios
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}, {nome: "limão", cor: "verde"}];
console.log(frutas);
console.log(frutas[2].cor);
*/

/*Array
var lista = ["maça", "pera", "laranja"];

console.log(lista);
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*Condicional
var idade = prompt();

if(idade >= 18){
	alert("Maior de idade");
}
else{
	alert("Menor de idade");
}
*/


/*Laços
var cont=0;
var i;

while(cont<=5){
	alert(cont);
	cont++;
}
for(i=1; i<=5; i++){
	alert(i);
	
}
*/

var data = new Date();

alert(data);
alert(data.getDay());
alert(data.toLocaleDateString());
alert(data.toLocaleString());