
let billInputEl = document.getElementById("billInput")

let tipInputEl = document.getElementById("tipInput")

let totalInputEl = document.getElementById("totalInput")

let errorMsgEl = document.getElementById("errorMsg")

function onTotalAmount(){
    if( billInputEl.value ==="" ||  tipInputEl.value===""){
        
        errorMsgEl.textContent ="Please enter a valid  input"
        errorMsgEl.style.color="red"   
    }
    else{
        
let billAmount = parseInt (billInputEl.value)

let tipAmount = parseInt (tipInputEl.value)  

let  totalAmount  =  billAmount + tipAmount;

totalInputEl.value =totalAmount;

  errorMsgEl.textContent =""
    }
       
}


