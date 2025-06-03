const mybutton = document.getElementById("mybutton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomenumber1;
let randomenumber2;
let randomenumber3;
 
mybutton.onclick=function(){
    randomenumber1=Math.floor(Math.random()*max)+min;
    randomenumber2=Math.floor(Math.random()*max)+min;
    randomenumber3=Math.floor(Math.random()*max)+min;
    label1.textContent=randomenumber1;
    label2.textContent=randomenumber2;
    label3.textContent=randomenumber3;
}