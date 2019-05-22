
function randomNumber(){
    
    let initnumber = document.querySelector("#initnumber").value;
    let randomval = document.querySelector(".randomval");

    try{
        let time = new Date().getTime();
        
        if (initnumber == "") throw " is Empty";
        if (initnumber  < 0 || initnumber > 1000000) throw "is not valid";

        newval = initnumber;
        doflip  = flip();
        if (doflip){
            
            do{
                invalid = false;
                val1 = initnumber;
                val2 = initnumber;


                time = new Date().getTime();
                digits = time.toString(10).split("");
                let sum = 0
                digits.forEach(el => {
                    sum +=parseInt(el)
                });
                val1 ^= parseInt(initnumber) << sum;

                val2 ^= parseInt(initnumber) >> sum;

                newval = val1 + val2;
                newval = newval.toString().slice(0,(initnumber.length))
                invalid = ((newval > initnumber) || (newval <0) );
            }while (invalid)
        }else{
            console.log(doflip);
        }

        randomval.innerHTML =  newval;
    }
    catch(err){
        console.log ("Initial value " + err );
        randomval.innerHTML = ""; 
        alert ("Initial value " + err + " must be a number between 1 and 1000000"); 
    }   
}

function OnlyNumbers(){
    let val = document.querySelector("#initnumber").value;
    let digit = /\D/;
    if(val.match(digit)){
        return true
    }
    else {
        return false
    }
}

function flip() {
    return Math.random() >= 0.5;
}