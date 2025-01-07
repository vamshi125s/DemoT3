if(true){
    console.log("If block is executing");
}

let age=17;
if(age>=18){
    console.log("eligible for voting");
} else {
    console.log("Not eligible for voting");
}

console.log(age>=18 ? "eligible for voting": "Not eligible for voting");

let day=3;
if(day==1){
    console.log("Monday");
} else if(day==2){
    console.log("Tuesday");
} else if(day==3){
    console.log("Wednesday");
} else if(day==4){
    console.log("Thursday");
} else if(day==5){
    console.log("Friday");
} else if(day==6){
    console.log("Saturday");
} else if(day==7){
    console.log("Sunday");
} else {
    console.log("Enter the number between 1 and 7");
}

let d=5;
switch(d){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}