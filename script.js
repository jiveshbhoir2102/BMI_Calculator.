var age=document.getElementById("age");
var height=document.getElementById("height");
var weight=document.getElementById("weight");
var male=document.getElementById("m");
var female=document.getElementById("f");
var form=document.getElementById("form");
let resultArea=document.querySelector(".comment");

modalContent=document.querySelector(".modal-content");
modalText=document.querySelector("#modalText");
var modal=document.getElementById("myModal");
var span=document.getElementsByClassName("close")[0];
const dietPlanDiv = document.getElementById('diet-plan');


function calculate(){
    if(age.value==''||height.value==''||(male.checked==false && female.checked==false)){
        modal.style.display="block";
        modalText.innerHTML=`All fields are required`;
    }
    else{
        countBmi();
    }
}
function countBmi(){
    var p=[age.value,height.value,weight.value];
    if(male.checked){
        p.push("male");
    }
    else if(female.checked){
        p.push("female");
    }
    var BMI=Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    var result='';
    var diet='';
    if(BMI<18.5){
        result='underweight';
        diet = 'Include more protein-rich foods, whole grains, and healthy fats in your diet.';
    }
    else if(18.5<=BMI&&BMI<=24.9){
        result='Healthy';
        diet = 'Maintain your current diet and keep exercising regularly.';
    }
    else if(25<=BMI&&BMI<=29.9){
        result='Overweight';
        diet = 'Reduce your intake of processed foods and sugar, and include more fruits and vegetables.';
    }
    else if(30<=BMI&&BMI<=34.9){
        result='Obese';
    }
    else if(35<=BMI){
        result='Extremely obese';
    }

    
    resultArea.style.display="block";
    document.querySelector(".comment").innerHTML=`You are<span id="comment"> ${result}</span>`;
    document.querySelector("#result").innerHTML=BMI.toFixed(2);
    dietPlanDiv.style.display = 'block';
    dietPlanDiv.innerHTML = `<strong>Diet Plan:</strong> ${diet}`;
}
// span.onclick=function(){
//     modal.style.display="none";
// }
// window.onclick=function(event){
//     if(event.target==modal){
//         modal.style.display="none";
//     }
// }