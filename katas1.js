console.log("----funcao 1--")  

      //Retornar os números de 1 a 20//

function oneThroughTwenty() {
arrayResult1 = []

for(let i = 1; i <= 20; i++){
     arrayResult1.push(i)
   
     }
      console.log(arrayResult1)
     }
  
oneThroughTwenty()

console.log("----funcao 2--")


          //Números pares de 1 a 20//

function evensToTwenty() {

 let arrayResult2=[]

 for(let par = 0; par <= 20; par++){
   if(par %2==0){

     arrayResult2.push(par)
   }
    }
     console.log(arrayResult2)
 }
 
evensToTwenty()

console.log("----funcao 3--")



            //Números ímpares de 1 a 20//

function oddsToTwenty() {

  let arrayResult3=[]
 
 for(let impar = 0; impar <= 20; impar++){
   if(impar %2==1){

    arrayResult3.push(impar)
   }
    }
     console.log(arrayResult3)
    }

oddsToTwenty()

  console.log("----funcao 4--")



            //Múltiplos de 5 até 100//

function multiplesOfFive() {

   let arrayResult4=[]

 for(let mult = 5; mult <= 100; mult++){
   if(mult %5==0){

     arrayResult4.push(mult)
   }
    }
     console.log(arrayResult4)
   }

  multiplesOfFive()

  console.log("----funcao 5--")



                //Quadrados perfeitos//

function squareNumbers() {

  let arrayResult5=[];
  

     for(let quadrado = 0; quadrado <= 100; quadrado++){

   if(Math.sqrt(quadrado) %1===0){

     arrayResult5.push(quadrado)
   }
    }
     console.log(arrayResult5)
   }

  squareNumbers()

  console.log("----funcao 6--")




   //Números contando de trás para frente de 20 até 1//

function countingBackwards() {

  arrayResult6 = []

  for(let backcont = 20; backcont >= 1; backcont--){
       arrayResult6.push(backcont)
     
       }
        console.log(arrayResult6)
       }

  countingBackwards()


  console.log("----funcao 7--")


        //Números pares reverso//

function evenNumbersBackwards() {

  let arrayResult7=[]

 for(let reversePar = 20; reversePar >= 0; reversePar--){
   if(reversePar %2==0){

     arrayResult7.push(reversePar)
   }
    }
     console.log(arrayResult7)
 }

  evenNumbersBackwards()

  console.log("----funcao 8--")


       //Números ímpares reverso//

function oddNumbersBackwards() {

  let arrayResult8=[]
 
 for(let revImpar = 20; revImpar >= 0; revImpar--){
   if(revImpar %2==1){

    arrayResult8.push(revImpar)
   }
    }
     console.log(arrayResult8)
    }

oddNumbersBackwards()


 console.log("----funcao 9--")


 //Múltiplos de 5 contando de trás para frente//

function multiplesOfFiveBackwards() {

  let arrayResult9=[]

 for(let revMult = 100; revMult >= 5; revMult--){

   if(revMult %5==0){

     arrayResult9.push(revMult)
   }
    }
     console.log(arrayResult9)
   }
    multiplesOfFiveBackwards();


 console.log("----funcao 10--")

         //Quadrados perfeitos contando de trás para frente//

function squareNumbersBackwards() {
  
  let arrayResult10=[];
  
     for(let reverseQ = 100; reverseQ >= 0; reverseQ--){
     
        if(Math.sqrt(reverseQ) %1 === 0){
    
      arrayResult10.push(reverseQ)
   }
    }
     console.log(arrayResult10)
   }
 squareNumbersBackwards();

