let btn =  document.getElementById("btn");
let output =  document.querySelector(".output");

let quote = [
    " Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"
 ]

 
 btn.addEventListener("click" , ()=>{
   let random  = Math.floor(Math.random()* quote.length);
   output.textContent = quote[random];
 })