let output = document.getElementById("output");
let statement = document.getElementById("statement");
function RoundNumber(){
    let number = document.getElementById("inputText").value;
    if(!number){
        toastifyError("please Enter any value in the inputField");
        return;
    }
  let roundTheNumber = Math.round(number);
   let html = '<h1 class="textcolor mb-0"style="font-weight:bold;">'+roundTheNumber+ '<h1>';
   output.innerHTML = html;
}
// ceil a Number means 54.01 then its round 55;
function ceilNumber(){
    let number = document.getElementById("inputText").value;
    if(!number){
        toastifyError("please Enter any value in the inputField");
        return;
    }
    let ceilNumber = Math.ceil(number);
    let html = '<h3 class="m-0" style="color:red; font-style:itelic; font-weight:bolder;">'+ceilNumber+ '<h3>';
      output.innerHTML = html;
}

function floorNumber(){
    let number = document.getElementById("inputText").value;
    if(!number){
        toastifyError("please Enter any value in the inputField");
        return;
    }
    let floorNumber = Math.floor(number);
    let html = '<h3 class="m-0" style="color:red; font-style:itelic; font-weight:bolder;">'+floorNumber+ '<h3><span>its floor the number</span>';
      output.innerHTML = html;
}

function randomNumber(){
    
    let randomNumber = Math.random();
    let html = '<h3 class="m-0" style="color:red; font-style:itelic; font-weight:bolder;">'+randomNumber+ '<h3>';
      output.innerHTML = html;
}

function diceNumber(){
    
    let randomNumber = Math.random();
     let newRandomNumber = (randomNumber * 6) + 1;
     let floorRandomNumber = Math.floor(newRandomNumber);
    let html = '<h3 class="mb-0" style="color:blue; font-style:itelic; font-weight:bolder;">'+floorRandomNumber+ '</h3><span>rendom dice numbers</span>';
      output.innerHTML = html;
}

function password(){
  let rendomString = "";
  let capitalABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chotiABC  = "abcdefghijklmnopqrstuvwxyz";
  let special = "!@##$%^&*~!";
  let num = "0123456789";
   
  let wholeWord = capitalABC +chotiABC + special + num;

  let number = document.getElementById("inputText").value;
  if(!number){
    alert("enter lenth of your password");
    return
  }
  for(let i = 0; i < number ; i++){
    let genterateNum = Math.random();
    rendomString += wholeWord.charAt(Math.floor(genterateNum * wholeWord.length));
  }
  let html = '<h4 style="color:blue; font-weight:bold;">'+rendomString+ '</h4>'+'<span>random password which have '+number+' digits </span>';

   output.innerHTML = html;

}

function convertingString(){
   let num = document.getElementById("inputText").value;
   if(!num){
    alert("please enter floating value");
    return;
   }
   
   let intNum=  parseInt(num);
   console.log(intNum);
   console.log(typeof intNum);
   let floatNum = parseFloat(num);
   console.log(floatNum);
   console.log(typeof floatNum);

   let realNumber = Number(num);
   output.innerHTML = '<h6>'+realNumber+'</h6>'+'<span style="color:red;">This string convert in to number and its type is </span>'+'<span style="color:blue;"  >'+typeof realNumber +'</span>'


}

function controlingLenth(){
  let num = document.getElementById("inputText").value;
   if(!num){
    alert("please enter floating value");
    return;
   }
   let intNum = Number(num);
   intNum = intNum.toFixed(3);
  //  after that number is also convert in the string now again convert in to number;
  let newIntNum = Number(intNum);
  output.innerHTML = '<h4>'+ newIntNum +'</h4> <span>your string convert in to number and then fixed by 3 after point</span>'
  
}

function GSTcalculate(){
  let num = document.getElementById("inputText").value;
   if(!num){
    alert("please enter floating value");
    return;
   }

   let intNum = parseInt(num);
   let tex = num * (17 /100);
   tex = Math.ceil(tex);
   let totalcost = intNum +tex;
    totalcost = Math.round(totalcost);

   output.innerHTML = 'you actuall cost is <span style="color:red; font-weight:bold;" >'+intNum+ '</span> <br>'
   output.innerHTML += 'you GST tex is <span style="color:blue; font-weight:bold;" >'+tex+ '</span> <br>'
   output.innerHTML += 'you total cost is <span style="color:black; font-weight:bold;" >'+totalcost+ '</span>'

}

function clearInput(){
  document.getElementById("inputText").value = "";
}
function clearOutput(){
  output.innerHTML = "";
}