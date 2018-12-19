console.log("Ejercicios 2 Condicionales")
var edad=18
if(edad>=18){
	console.log("Es mayor de edad")
}else{
	console.log("Es menor de edad")
} 
var num=4
if(num==1){
	console.log("El número es UNO")
}else if(1==2){
	console.log("El número es DOS")
}else if(num==3){
	console.log("El número es TRES")
}else{
	console.log("NO ESTÁ EN LA LISTA")
}

//Ejercicio  de condicional con dos variables
var edad=101//representa la edad de la persona
var genero="mujer"//"hombre" "mujer"

if(edad>=18 && genero=="hombre"){
	console.log("Bienvenido Señor")
}else if(edad<=17 && genero=="mujer"){
	console.log("Bienvenida señorita")
}else{
	console.log("No se cumplieron ")
}

if(edad<0 || edad>100){
	console.log("La edad es incorrecta")
}
