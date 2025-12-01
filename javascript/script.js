let x = 1;
let y = 1;

console.log(x + y);

function sum(x, y) {
  return x * y;
}
console.log(sum(2, 6));
let age = 19;
if (age > 18) {
  console.log("adult");
} else {
  console.log("child");
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
function changeText(){
    let heading = document.getElementById('heading');
    heading.innerText = "hello tselote";
}
