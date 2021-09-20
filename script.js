const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const paragraph = document.querySelector("p");

function addNumbers(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let i = 0; i < dob.length; i++){
    sum += Number(dob.charAt(i));
  }
  return sum;
}

function checkForLuckyBirthday(){
  const sumOfDate = addNumbers(birthDate.value);
  let message;

  if (luckyNumber.value !== '' && sumOfDate > 0){
    if (sumOfDate % luckyNumber.value === 0){
    message = "Wohoo, your birthday is lucky!! 😀";
    }else{
    message = "Ugh oh, maybe your birthdate isn't that lucky 🤔";
    }
  }else{
    message = "Please input both the values to try this out buddy";
  }
  paragraph.innerText = message;
}

checkButton.addEventListener("click", checkForLuckyBirthday)