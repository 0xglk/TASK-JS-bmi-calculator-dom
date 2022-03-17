  

  let BMI = 0;
  let statusAge = "Nn"

function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  let status = "0";
  console.table({ age, weight, height, male, female });

 BMI = (weight/((height**2)/10000)).toFixed(1);

  if (BMI < 18.5) {
     status = "Underweight";
      checker();
     alert(`Your IBM ${BMI}  BMI state ${status} Status: ${statusAge}`);
  } 
  else if (BMI >= 18.5 && BMI <= 24.9) {

     status = "Healthy Weight";
     checker();
     alert(`Your IBM ${BMI}  BMI state ${status} Status: ${statusAge}`);
  }
  else if (BMI >= 25.0  && BMI <= 29.9) {
    
     status = "Overweight";
     checker();
     alert(`Your IBM ${BMI}  BMI state ${status} Status: ${statusAge}`);

  }
  else if ( BMI > 30){
     status = "Above Obesity";
     checker();
     alert(`Your IBM ${BMI}  BMI state ${status} Status: ${statusAge}`);
  }

  else{
    alert(`There is Somthing Wrong With Your Input ⚠️`);
  }

  // You are going to write the code here before the curly braces 👇🏻
}

function checker(){
let age = document.getElementById("age").value;

if (age >= 19 && age <= 24 && BMI >= 20 && BMI <= 25) {
     statusAge = "Normal";
  } 
  else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
     statusAge = "Normal";
  }
  else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
     statusAge = "Normal";
  }
  else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27){
     statusAge = "Normal";
  }
  else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28){
      statusAge = "Normal";
    }
  else if (age >= 65 && BMI >= 24 && BMI <= 39){
      statusAge = "Normal";
    }
  else{
      statusAge = "Not Normal ⚠️";
  }
}
