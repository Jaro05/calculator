let currentNum = "";
let total = 0;
let num1 = "";
let num2 = "";
let operator = "";
let textbox = document.querySelector("#textbox");

let clear = document.querySelector("#clear");
clear.addEventListener("click",() => {
    total = 0;
    resetVariables();
    textbox.textContent = null;
});

let position = 0;
let plusminus = document.querySelector("#plusminus");
plusminus.addEventListener("click",() => {
    position = textbox.textContent.length - currentNum.toString().length;
    
    if(Math.sign(currentNum)==-1){
        textbox.textContent = textbox.textContent.substring(0,position) + textbox.textContent.substring(position + 1, textbox.textContent.length);
        currentNum = textbox.textContent.substring(position, textbox.textContent.length);
    }else if (Math.sign(currentNum)==1){
        textbox.textContent = textbox.textContent.substring(0,position) + "-" + textbox.textContent.substring(position, textbox.textContent.length);
        currentNum = "-" + currentNum;
    }

    if(operator === ""){
        num1 = currentNum;
        
    }else{
        num2 = currentNum;
    }    
});

let backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {

    if(textbox.textContent.substring(textbox.textContent.length - 1, textbox.textContent.length)==operator){
        operator = "";
    }else if(operator!==""){
        num2 = num2.substring(0,num2.length - 1);
        currentNum=num2;
    }else{
        num1 = num1.substring(0,num1.length - 1);
        currentNum=num1;
    }
    
    textbox.textContent = textbox.textContent.substring(0, textbox.textContent.length -1);
});


let numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
    number.addEventListener("click",() => {
        textbox.textContent += number.textContent;
        
        currentNum += "" + number.textContent;
        
        if(operator === ""){
            num1 = currentNum;
            
        }else{
            num2 = currentNum;
        }
        
  });
});

let operators = document.querySelectorAll(".operators");
operators.forEach(item => {
    item.addEventListener("click",() => {
       textbox.textContent += "" + item.textContent;
       if(operator !== ""){
           total = (operate(num1,num2,operator));
           num1 = total;
           num2 = "";
       }
       operator = item.textContent;
       currentNum = "";    
    });
});

let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    textbox.textContent += ".";
    currentNum += ".";
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(isNaN(num1)||isNaN(num2)){  
        total="Error";
        resetVariables();
    }
    if(num1!=="" && num2!=="" && operator!==""){
        if(isNaN(num1/num2)||num1/num2 == Infinity){
            total="Go back to school, can not divide by 0";
            resetVariables();
        }else{
            total = (operate(num1,num2,operator));
            total = total.toFixed(10);
            total = total.replace(/0+$/,'').replace(/\.$/,'');//look at this and see what is happening
            currentNum = total; 
            num1 = total;
            num2 = "";
            operator = "";
        }
    }
    textbox.textContent = total;
});


function operate(num1,num2,operator){
    if(operator == "+"){
        return(addfunc(num1,num2));
    }
    if(operator == "-"){
        return(subtractfunc(num1,num2));
    }
    if(operator == "/"){
        return(dividefunc(num1,num2));
    }
    if(operator == "*"){
        return(multiplyfunc(num1,num2));
    }
}

function addfunc(num1,num2){
    return(num1+num2);
}

function subtractfunc(num1,num2){
    console.log(num1-num2);
    return(num1-num2);
}

function multiplyfunc(num1,num2){
    return(num1*num2);
}

function dividefunc(num1,num2){
    
    
    return(num1/num2);
    
}


function resetVariables(){
    num1 = "";
    num2 = "";
    operator = "";
    currentNum = "";
}


