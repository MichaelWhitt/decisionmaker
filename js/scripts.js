function changeInput(){
    let countArray = [];
    for (let i= 1; i<9; i++){
        let x = document.getElementById("input"+i).value.trim();
        if (x !== "") { 
            countArray.push(x); 
        }
        //document.getElementById("spanb"+i).innerHTML = x;
    } 

    if (countArray.length < 2) {
        //add an alert for anything under 2 error
        alert("Need more than 1 input value.");
    } else {
        generateWheel(countArray); //hoisted function
    }
}

function addSpin(x,y){
    // 20-21 rotations for variation.
    //var x = 7177; //default min value (w8)
    //var y = 7536; //default max value (w8)
    var x = x; //min value
    var y = y; //max value
    var deg = Math.floor(Math.random() * (x - y)) + y;

    let z = document.getElementById('d1').style.transform = "rotate("+deg+"deg)";
    console.log(deg);
}

function generateWheel(array) {
    let wheelContainer = document.getElementById("wheel");
    // reset container
    wheelContainer.innerHTML = "";
    let d1 = document.createElement("div");
    let spinButton = document.createElement("button");
    let arrow = document.createElement("span");
    d1.id = "d1";
    d1.className = "d1";
    spinButton.id = "spin";
    spinButton.textContent = "Spin!";
    arrow.id="wheelBackground";
    // spin button create
    //spinButton.setAttribute("onclick", "addSpin();");

    wheelContainer.appendChild(d1);
    wheelContainer.appendChild(spinButton);
    wheelContainer.appendChild(arrow);
    
    

    // add reset wheel if spin is clicked again
    
    for (let i = 0; i <= array.length -1; i++) {
      let span = document.createElement("span");
      let boldText = document.createElement("b");
      boldText.id = "spanb" + (i + 1);
      boldText.textContent = array[i];
      span.classList.add("span" + (i + 1) + "w" + array.length);
      span.appendChild(boldText);
      //boldText.textContent = "TESTCONTENT"; // 
      // css change for if input value is mediterranean 10 or more, 16px, else 20px
      // css change if less than 8, 26px
      d1.appendChild(span);
  }
  // ifstatement generate wheel spin with trackable degrees
  let wheelSpanCount = array.length;
  if (wheelSpanCount === 2){
      spinButton.setAttribute("onclick", "addSpin(7110, 7470);");
  } else if (wheelSpanCount === 3){
      spinButton.setAttribute("onclick", "addSpin(7170, 7528);");
      console.log("3");
  }
  else if (wheelSpanCount === 4){
      spinButton.setAttribute("onclick", "addSpin(7201, 7559);");
      console.log("4");
  }
  else if (wheelSpanCount === 5){
      spinButton.setAttribute("onclick", "addSpin(7150, 7509);");
      console.log("5");
  }
  else if (wheelSpanCount === 6){
      spinButton.setAttribute("onclick", "addSpin(7170, 7529);");
      console.log("6");
  }
  else if (wheelSpanCount === 7){
      spinButton.setAttribute("onclick", "addSpin(7189, 7548);");
      console.log("7");
  }
  else if (wheelSpanCount === 8){
      spinButton.setAttribute("onclick", "addSpin(7155, 7515);");
      console.log("8");
  }

}



  
$(function(){
    $("#accountButton").click(function(){
        $("#accountModal").modal("toggle")
    });
});