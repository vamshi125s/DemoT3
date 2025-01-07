var a="Fizz";
var b="Buzz";
var c="FizzBuzz";

for(var i=1;i<=100;i++){
    if(i%3==0){
        console.log(a);
    } else if(i%5==0){
        console.log(b);
    } else if(i%3==0 && i%5==0){
        console.log(c);
    } else {
        console.log(i);
    }
}

console.log("Finding the greatest value among the 3 given values")

let x=20;
let y=140;
let z=100;

console.log("By using else if ladder");
if(x>y && x>z){
    console.log(x);
} else if(y>x && y>z){
    console.log(y);
} else if(z>x && z>y){
    console.log(z);
}
console.log("By using switch statement");
var n;
if(x>y && x>z){
    n=1;
} else if(y>x && y>z){
    n=2;
} else if(z>x && z>y){
    n=3;
}

switch(n){
    case 1:
        console.log(x);
        break;
    case 2:
        console.log(y);
        break;
    case 3:
        console.log(z);
        break;
    default:
        console.log("None");
}