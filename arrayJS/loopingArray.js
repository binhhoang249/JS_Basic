
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let tLen = fruits.length;
let text = "<ul>";

for (let i = 0; i < tLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

