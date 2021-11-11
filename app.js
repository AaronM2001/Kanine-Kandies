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
//   calculateDeg();
// //   ///arry literal
// //   ///we asighn the arry to a varibal 
// //   const colors=["Brown","pink","blue","red"]
// //   const myAges=[10,13,16,18,21]
// //   const compNums=[12>12, 9==="nine",1==2,"eight"=="EIGHT",5>5]
// //   //js Keyword buld in javascript methods new array()
// //   var colors=new Array("Brown","pink","blue","red")
// //   var myAges=new Array("10,13,16,18,21")
// //   ///js constructer method 
// //   const colors=[]
// //   colors[0]="Brown";
// //   colors[1]="pink";
// //   colors[2]="blue";
// //   colors[3]="red";

// //   var classMate=["Emily", "Lucas","Anthony","Luz","Anny",]
// //   console.log(classMate.length);

// //   ///loop over a arry
// // //   for(i=0;i=classMate.length; i++) {
// // //       console.log(classMate)
// // //   }
// // ///unshift add name to top splice makes 2 of a name 
// //   classMate.splice(2,1,"Luz");
// //   console.log(classMate);

// ///Array Assignments //Create an Array called "donuts" that list 7-10 different items
// //1 Using a loop, iterate through this array and console.log all the donuts
// //2 Write the command to remove the first donut fron the array
// //3 Write the command to remove the last donuts from the array
// //4 Write the command to add a new donut "lime zest" to the front of the array
// //5 Write the command to add another donut "lemon pie" to the end of the array
// //6 Use either the join() or toString() method to convert an array to a string.
// //7 Write the command to make a copy of the array using slice. The copy should NOT include two donuts.
// //8 Write the command that gives the indexOf where "chocolate" is located.
// //9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
// //10 **Using the splice method, remove one donut from the array and add another.
// //11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
// //12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
// var donuts=["Chocolate","Cinnamon","Strawberry","Jelly","Blueberry","Glazed","Vanilla","Cream-Filled","Sour Cream","Apple-Crumb"]
// console.log(donuts.length);


// // for(var i=0; i<=20; i++){
// //     if(i % 2 === 0){
// //         console.log(i + "is even")
    
// // }else{
// //     console.log(i+ "is odd")
// // }
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

const arrayCarousel=[
    "one.png"
]
counter=0
function setImage() {
    document.getElementById("carousel-image").src=arrayCarousel[counter];
    document.getElementById("carousel-image1").src=arrayCarousel[counter];
    counter = (counter+1) % arrayCarousel.length;
}

