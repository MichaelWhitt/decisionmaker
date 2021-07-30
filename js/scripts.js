function addSpin(){
    // 20-21 rotations for variation.
    //var x = 7177; //default min value (w8)
    //var y = 7536; //default max value (w8)
    var x = 7470; //min value
    var y = 7470; //max value

//Wheel 2 degree values
    // span 1 degrees (light blue) = 7291 - 7470
    // span 2 degrees (light green) = 7110 - 7290
//Wheel 3 degree values
    // span 1 degrees (light blue) = 7291 - 7411
    // span 2 degrees (light green) = 7170 - 7290
    // span 3 degrees (dark pink) =  7412 - 7528
//Wheel 4 degree values
    // span 1 degrees (light blue) = 7291 - 7380
    // span 2 degrees (light green) = 7201 - 7290
    // span 3 degrees (dark pink) =  7381 - 7469
    // span 4 degrees (orange) = 7470 - 7559
//Wheel 5 degree values
    // span 1 degrees (light blue) = 7291 - 7363
    // span 2 degrees (light green) = 7217 - 7290
    // span 3 degrees (dark pink) =  7364 - 7430
    // span 4 degrees (orange) = 7150 - 7216
    // span 5 degrees = (yellow) = 7431 - 7509
//Wheel 6 degree values
    // span 1 degrees (light blue) = 7291 - 7349
    // span 2 degrees (light green) = 7232 - 7290
    // span 3 degrees (dark pink) =  7350 - 7410
    // span 4 degrees (orange) = 7170 - 7231
    // span 5 degrees = (yellow) = 7411 - 7470
    // span 6 degrees (dark blue) = 7471 -7529
//Wheel 7 degree values
    // span 1 degrees (light blue) = 7291 - 7344 (53)
    // span 2 degrees (light green) = 7236 - 7290 (54)
    // span 3 degrees (dark pink) = 7345 - 7391 (46) 
    // span 4 degrees (orange) = 7189 - 7235 (46)
    // span 5 degrees = (yellow) = 7392 - 7439 (47)
    // span 6 degrees (dark blue) = 7500 - 7548 (48)
    // span 7 degrees (purple) = 7440 - 7499 (59)
//Wheel 8 degree values
    /*
    span 1 degrees (light blue)= 7291 - 7335
    span 2 degrees (light green) = 7246 - 7290 
    span 3 degrees (dark salmon)= 7336 - 7380
    span 4 degrees (salmon) = 7200 - 7245 
    span 5 degrees (yellow) = 7426 - 7470
    span 6 degrees (dk blue) = 7155 - 7199(6) (45)
    span 7 degrees (purple) =  7471 - 7515
    span 8 degrees (pink) = 7381 - 7425
    */

    //works even on multiple clicks, but doesn't spin much since it's already gone through 20 spins. 

    
    var deg = Math.floor(Math.random() * (x - y)) + y;

    let z = document.getElementById('d1').style.transform = "rotate("+deg+"deg)";
    console.log(z);

    //adds animation to arrow
    // var element = document.getElementById("#wheelBackground");
    // element.classList.remove("animate");
    // setTimeout(function(){
    //     element.classList.add("animate");
    // }, 5000); //5000 = 5s;
}

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
 

    wheelContainer.appendChild(d1);
    wheelContainer.appendChild(spinButton);
    wheelContainer.appendChild(arrow);
    //spin wheel button
    spinButton.setAttribute("onclick", "addSpin();");


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
  }

  
$(function(){
    $("#accountButton").click(function(){
        $("#accountModal").modal("toggle")
    });
});