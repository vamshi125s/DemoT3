// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"

// //Spread operator :- it will takeout each and every value from the original array and sore it inside one more new array(pure array).

// // syntax for Spread operator
// let x = [...ele];
// console.log(x, Array.isArray(x));
// // console.log(x, Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// // })


// let ele = document.getElementsByTagName("div");
// console.log(ele);

// let ele = document.getElementsByName("formData");

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
// btn.addEventListener("Click",()=>{
//     // console.log("Button clicked");
//     // alert("hi")
//     // document.body.style.querySelector("#btn");

// })

// let btn = document.querySelector("#btn");
// BtnInt.addeventListener("mouseover",()=>{
//
//
// })

// 
let mainEle = document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border="2px solid red";
mainEle.style.width="550px";
mainEle.style.height="550px";

console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");
//console.log(topEle);

// let image = document.createElement("img");
// image.src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2023%2F2%2F3205931%2FBMW_M340i_3_e1f5ea64dc.jpg&w=3840&q=75";
// image.style.width="550px"

// let bottomEle = document.createElement("div");
// bottomEle = setAttribute("class","bottomBlock");
// //console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// h1.style.textAlign="center";

// let btn = document.createElement("button");
// btn.innerText="View More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gender = document.getElementsByName("gender");

// hiding and showing the password values
check.addEventListener("click",event=>{
    if(event.target.checked == true){
        password.setAttribute("type","test");
        show.innerText = "Hide password";
    }
    else{
        password.setAttribute("type","password");
        show.innerText = "show password";
    }
})

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i=0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            //console.log(gender[i].value);
            gen = gender[i].value;
        }
    }
    // console.log(un, up , gen)
    let userDetails = {
        username:un,
        password:up,
        gender:gen
    }
    console.log(userDetails);
    sessionStorage.setItem("userData",JSON.stringify(userDetails))
})