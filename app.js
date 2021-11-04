function calculateDeg(){
    var humanyears = document.getElementById("human").value;
    var dogyears = humanyears * 7;
    console.log("Your dog is  " + dogyears + "in human years")
    document.getElementById("celDeg").innerHTML=dogyears;
  }
  
  calculateDeg();
 