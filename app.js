var name =window.prompt("Please enter your name?")
var ageCheck =window.prompt("Please enter your age?");
if (ageCheck<18){
    window.alert("You have submited that you are " + ageCheck + " Years old " + name + "." )
    location.replace("age.html");
}else {
    alert("Welcome to the page " + name + "!")
}
function calculateDeg(){
    var humanyears = document.getElementById("human").value;
    var dogyears = humanyears * 7;
    console.log("Your dog is  " + dogyears + "in human years")
    document.getElementById("celDeg").innerHTML=dogyears;
  }
  calculateDeg();
// for(var i=0; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i + "is even")
    
// }else{
//     console.log(i+ "is odd")
// }
// var money= 11500.00;
// var bills= 2500.00;

//   if (money > bills) {
//      console.log("You are covered!");
//  }
// else { console.log("uh-oh!")
// };
const today= new Date();
console.log(today);
const dayNumber= today.getDay();
console.log(dayNumber);
// storing my output location
const element =document.getElementById("message1")
function special() {
    if(dayNumber==1){
        return "1/2 off all oils"
} else if (dayNumber==2){
return "2-for-1 treats"
}else if (dayNumber ==3){
    return"Buy-one-Get-one Free day"
}else if ( dayNumber==4){
    return"Add a gummy"
} else if (dayNumber==5){
    return"Bring a friend get a extra treat"
} else if (dayNumber==6){
    return"Buy two edibles get one free"
}else if(dayNumber==7){
    return"Brunch and free samples"
} else (element.classList.add("hideme"))
}
console.log('you got a' + special());
element.innerHTML='Check out The Specital Today!' + '</br>' + special();

function assignGrade(score){
    if(score > 90){
        return "A";
    }else if (score > 80 && score<90){
        return "B"
    } else if(score > 70 && score<80){
        return "C";
    }else if (score>60 && score<70){
        return "D"
    }else{
        return "F"
    }
}
console.log("You gat a " + assignGrade(95) );
console.log("You gat a " + assignGrade(85) );
console.log("You gat a " + assignGrade(78) );
console.log("You gat a " + assignGrade(68) );
console.log("You gat a " + assignGrade(58) );
