var dob = document.querySelector("#birth-date");
var lucky = document.querySelector("#lucky-number");
var checkbtn = document.querySelector("#btn");
var outputText = document.querySelector("#result");

checkbtn.addEventListener("click", function checkB() {
  var s = sum(dob.value);
  if (s % lucky.value === 0) {
    outputText.innerText =
      "Hurray!!You are one of the luckiest person on the Planet!";
  } else {
    outputText.innerText =
      "LOL!!!Life is Hard. Try in your next genesis if you will be human again";
  }
});

function sum(inputDate) {
  inputDate = inputDate.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < inputDate.length; i++) {
    sum = sum + Number(inputDate[i]);
  }
  return sum;
}
