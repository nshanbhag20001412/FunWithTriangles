//queryselector of checkifTriangle 
const inputs=document.querySelectorAll('.angleInput');
const checkBtn=document.querySelector('#checkBtn');
const display=document.querySelector('#display');

//functions of checkifTriangle
function sumOfAngles(angle1,angle2,angle3){

  const sum=angle1+angle2+angle3;
  return sum;
}

function isTriangle(){

  sum=sumOfAngles(Number(inputs[0].value),Number(inputs[1].value), Number(inputs[2].value));
  if(sum===180)
      display.innerText="Hurray! its a Triangle";
  else
      display.innerText="Not a triangle,try again";
}

if(checkBtn)
{
   checkBtn.addEventListener("click",isTriangle);
}

//queryselector of triangleQuiz
const quizForm=document.querySelector("#quizFrom")
const quizBtn=document.querySelector('.quizBtn');
const quizDisplay=document.querySelector('.quizDisplay');

//functions of triangleQuiz

const correctAnswers=["90","Right-Angled"];

function calculateScore(){

   let score=0;
   let index=0;
   const formAnswers = new FormData(quizForm); 
   for(let value of formAnswers.values())
   {
      if(value===correctAnswers[index]){
         
        score+=1;
      }
      index=index+1;
   }
   quizDisplay.innerText="Score is:" + score;
}

quizBtn.addEventListener("click",calculateScore);

//queryselector of hypotenuse
const hypoInputs=document.querySelectorAll('.sideInput');
const hypoBtn=document.querySelector('#hypoBtn');
const hypoDisplay=document.querySelector('#hypoDisplay');

//functions of hypotenuse

function calculateSumOfSquares(a,b){

   const sumOfSides=(a*a)+( b*b);
   console.log(sumOfSides);
   return sumOfSides;
}

function calculateHypo(){

    const sumofSides=calculateSumOfSquares(Number(hypoInputs[0].value),Number(hypoInputs[1].value),3);
    const hypo=Math.sqrt(sumofSides);
    hypoDisplay.innerText="The Hypotenuse is ="+ hypo;
 }
 
 if(hypoBtn)
 {
    hypoBtn.addEventListener("click",calculateHypo);
 }


 //queryselector of area
const areaInputs=document.querySelectorAll('.areaInput');
const areaBtn=document.querySelector('#areaBtn');
const areaDisplay=document.querySelector('#areaDisplay');

//functions of area

function calculateProductOfSides(a,b){

   const productOfSides=(a*b);
   console.log(productOfSides);
   return productOfSides;
}

function calculatearea(){

    const productOfSides=calculateProductOfSides(Number(areaInputs[0].value),Number(areaInputs[1].value),3);
    const area=0.5*productOfSides;
    areaDisplay.innerText="The Area is ="+ area;
 }
 
 if(areaBtn)
 {
    areaBtn.addEventListener("click",calculatearea);
 }

 