"use strict";

const submit = document.querySelector(".button-class");
const rating = document.querySelectorAll("li");
const result = document.querySelector(".bottom-card");
const overlay = document.querySelector('.overlay')
console.log(submit);
console.log(rating);
let ratingNumber;

for (let i=0; i<rating.length ; i++) 
    rating[i].addEventListener('click', function(){
        ratingNumber = Number(rating[i].textContent);   //Number is a string

        submit.addEventListener('click', function(){
        
          //After Clicking button  
        result.classList.remove('hidden');
        document.querySelector('.message').textContent = ratingNumber;
        overlay.classList.remove('hidden');


///  Get Back to original page
        
        
            
        })
        
    })

    overlay.addEventListener('click', function(){
        overlay.classList.add('hidden');
        result.classList.add('hidden');
    })
    



   
    


