console.log("----funcao 1--")              
               //Retornar os números de 1 a 20//

function oneThroughTwenty() {
  for (let i = 1; i <= 20; i++) {
  console.log(i)
}
}
oneThroughTwenty()

console.log("----funcao 2--")

                     //Números pares de 1 a 20//

function evensToTwenty() {
for (let par = 0; par <= 20; par+=2) {
 
 console.log(par);
} 
}
evensToTwenty()
console.log("----funcao 3--")



                   //Números ímpares de 1 a 20//

function oddsToTwenty() {
for (let impar = 1; impar <= 20; impar+=2) 
console.log(impar);
}
  oddsToTwenty()
  console.log("----funcao 4--")



                   //Múltiplos de 5 até 100//

function multiplesOfFive() {
  
for (let mult = 5; mult <= 100; mult+=5)
console.log(mult);
}
  multiplesOfFive()
  console.log("----funcao 5--")




                   //Quadrados perfeitos//

function squareNumbers() {

let perfeito = [0 , 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
for (let quadrado = 0; quadrado <= 100; quadrado++)

console.log(perfeito[quadrado]);
  
}
  squareNumbers()
  console.log("----funcao 6--")




            //Números contando de trás para frente de 20 até 1//

function countingBackwards() {
  
for (let backcont = 20; backcont >= 1; backcont--)

console.log(backcont);
}
  countingBackwards()

  console.log("----funcao 7--")


        //Números pares reverso//

function evenNumbersBackwards() {
  
for (let reversePar = 20; reversePar >= 1; reversePar-=2) {
 
 console.log(reversePar);
}
}
  evenNumbersBackwards()
  console.log("----funcao 8--")


       //Números ímpares reverso//

function oddNumbersBackwards() {

let revImp = [,1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for (let reverseImpar = 20; reverseImpar >= 1; reverseImpar--) 

console.log(revImp[reverseImpar]);
}

 oddNumbersBackwards()
 console.log("----funcao 9--")


 //Múltiplos de 5 contando de trás para frente//

function multiplesOfFiveBackwards() {
  
for (let reverseMult = 100; reverseMult >= 5; reverseMult-=5)

console.log(reverseMult);
}

 multiplesOfFiveBackwards();
 console.log("----funcao 10--")

         //Quadrados perfeitos contando de trás para frente//

function squareNumbersBackwards() {
  
let perfect = [0 , 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
for (let reverseQ = 100; reverseQ >= 0; reverseQ--)

console.log(perfect[reverseQ]);
  
}
 squareNumbersBackwards();