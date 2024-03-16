// Ab ham kre ge First Button (Alert)
document.getElementById("AlertName").onclick = function () {
  alert("Hafiz Muhammad Abdullah");
  let originalStatement = ' alert("Hafiz Muhammad Abdullah");';
  let outputStatement = "Hafiz Muhammad Abdullah";
  // (ye string bn rahi hai)

  document.getElementById("OriginalStatement").innerHTML = originalStatement;

  document.getElementById("outputStatement").innerHTML = outputStatement;
};
// Ab ham kre ge Second Button (Alert Number)
document.getElementById("AlertNumber").onclick = function () {
  let originalStatement = "alert(123);";
  let outputStatement = 123;
  alert(123);
  document.getElementById("OriginalStatement").innerHTML = originalStatement;
  document.getElementById("outputStatement").innerHTML = outputStatement;
};
// Chapter#4 | Variale Names Legal and Illegal
document.getElementById("VariableName").onclick = function () {
  // variable name wali id button wali hai aur originalStatement statement wali JS wali hai

  let textwithtml =
    "<ul><li> A variable name can't contain any spaces</li><li> A variable name can contain only letters, numbers, dollar sign's and underscores(_)</li><li>Though a      Variable name can't be of any javaScript's keywords . For example, userAlert and myVar are legal<li><li>Though a Variable name can't be of any javaScript's keywords . For example, userAlert and myVar are legalThough a Variable name can't be of any javaScript's keywords . For example, userAlert and myVar are legal</li><li>Capital Letters are fine but be careful. Variable Names are case sensitive. A rose is not a Rose</li></ul>";
  document.getElementById("OriginalStatement").innerText = textwithtml;
  document.getElementById("outputStatement").innerHTML = textwithtml;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };

// CHAPTER NO.5
document.getElementById("ShowcamelCaseExamples").onclick = function () {
  let originalStatement = "<li><code>weAreLearningJavaScript</code></li>";
  let outputStatement = "weAreLearningJavaScript";
  document.getElementById("OriginalStatement").innerText = originalStatement;
  //OriginalStatement html wali hai
  document.getElementById("outputStatement").innerHTML = outputStatement;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };

// CHAPTER NO.6 | Math Expressions | Familiar Operators |
document.getElementById("SumTwoNumber").onclick = function () {
  let num1 = 10000000;
  let num2 = 5;
  let sum = num1 + num2;
  // Ye let num1 vgera statement me show krne k lye string me likhna paray ga; or yaha pe concatenation + hogi
  document.getElementById("outputStatement").innerHTML = sum;
  let paani = `let num1 = ${num1};
               let num2 = ${num2};
               let sum = ${num1} + ${num2};`;

  document.getElementById("OriginalStatement").innerHTML = paani;
  document.getElementById("outputStatement").innerHTML = sum;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };

// Button no.6 Subtract 2 numbers
document.getElementById("SubtractTwoNumbers").onclick = function () {
  let num1 = 10;
  let num2 = 55;
  let sum = num1 - num2;
  let sho = `let num1 = ${num1};
            let num2 = ${num2};
            let sum = ${num1} - ${num2};`;
  document.getElementById("OriginalStatement").innerHTML = sho;

  document.getElementById("outputStatement").innerHTML = sum;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };
// Button no.7 | Multiply 2 numbers
document.getElementById("MultiplyTwoNumbers").onclick = function () {
  let num1 = 4;
  let num2 = 7;
  let result = num1 * num2;
  let code = `let num1 = ${num1};
              let num2 = ${num2};
              let result = ${num1} * ${num2};`;
  document.getElementById("OriginalStatement").innerHTML = code;
  document.getElementById("outputStatement").innerHTML = result;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };
// Button no.7 | Divide 2 numbers
document.getElementById("DivideTwoNumbers").onclick = function () {
  let num1 = 12;
  let num2 = 2;
  let result = num1 / num2;
  let code = `let num1 = 12;
               let num2 = 2;
               let result = num1 / num2`;
  let clearStatement = " ";
  document.getElementById("OriginalStatement").innerHTML = code;
  document.getElementById("outputStatement").innerHTML = result;
  document.getElementById("clearStatement").innerHTML = clearStatement;
};
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };
// Button no.8 | Divide 2 numbers
document.getElementById("DivideTwoNumbers").onclick = function () {
  let num1 = 12;
  let num2 = 2;
  let result = num1 / num2;
  let code = `let num1 = ${num1};
               let num2 = ${num2};
               let result = ${num1} / ${num2}`;
  let clearStatement = "";

  document.getElementById("OriginalStatement").innerHTML = code;
  document.getElementById("outputStatement").innerHTML = result;
  
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };
}
  // Button no.9 | Calculate Some numbers |

document.getElementById("CalculateSomeNumbers").onclick = function () {
  let num1 = 36+(3*8)-2
  let result = 58;
  let code = `let num1 = 36+(3*8)-2
              let result = 58;`
  document.getElementById("OriginalStatement").innerHTML=code
  document.getElementById("outputStatement").innerHTML = result 
  
  document.getElementById("clearStatement").onclick = function () {
    document.getElementById("OriginalStatement").innerHTML = "";
    document.getElementById("outputStatement").innerHTML = "";
  };

  // document.getElementById("OriginalStatement").innerHTML = clearStatement;
  // document.getElementById("outputStatement").innerHTML = clearStatement;
};
// Practise | Multipzly 2 numbers
// document.getElementById("MultiplyTwoNumbers").onclick = function () {
//   let num1 = prompt("Enter first number");
//   let num2 = prompt("Enter second number");
//   console.log("value of first number:", num1);
//   console.log("value of second number:", num2);
//   let result = num1 * num2;
//   let code = `let num1 = ${num1};
//            let num2 = ${num2};
//            let result = ${num1} * ${num2};`;
//   document.getElementById("OriginalStatement").innerHTML = code;
//   document.getElementById("outputStatement").innerHTML = result;
// };

// +
// ${
