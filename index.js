const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message =  document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availabelNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener('click',function validateBillAndCashAmount(){
  
  hideMessage();
    if (billAmount.value > 0){
        if (cashGiven.value > billAmount.value){
           const amountToBeReturn = cashGiven.value - billAmount.value;
           calculateChange(amountToBeReturn);
        }else {

            showMessage("do you wanna wash plates?");
        }

    }else{
       
        showMessage("invalid bill Amount");    }
})


function calculateChange(amountToBeReturn){

    for (i = 0; i < availabelNotes.length; i++){
    const numberOfNotes = Math.trunc(amountToBeReturn / availabelNotes[i]);

    amountToBeReturn %= availabelNotes[i];
    noOfNotes[i].innerText = numberOfNotes;

    }
}

function hideMessage(){

    message.style.display = "none";
}

function showMessage(msg){

    message.style.display = "block";
    message.innerText = msg;
}