let  c1 = document.querySelector(".color1");
let  c2 = document.querySelector(".color2");
let body = document.getElementById("body");
function setGradient() {
    body.style.background = "linear-gradient(to right,"+c1.value +","+c2.value +")";
    CSS.textContent=body.style.background+";"
}
// c1.addEventListener("input" , function(){
//     body.style.background = "linear-gradient(to right,"+c1.value +","+c2.value +")";
// })
// c2.addEventListener("input" , function(){
//     body.style.background = "linear-gradient(to right,"+c1.value +","+c2.value +")";
// })
c1.addEventListener("input" ,setGradient);
c2.addEventListener("input" ,setGradient);