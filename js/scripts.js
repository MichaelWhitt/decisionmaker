function addSpin(){
    // 20-21 rotations for variation.
    var x = 7177; //min value
    var y = 7536; //max value
    //Wheel 8 degree values
    /*span 1 degrees = 7357 - 7400
    span 2 degrees = 7177 - 7220 
    span 3 degrees = 7447 - 7491
    span 4 degrees = 7267- 7310
    span 5 degrees = 7221 - 7266 
    span 6 degrees = 7401 - 7446
    span 7 degrees = 7311 - 7356
    span 8 degrees = 7492 - 7536*/
    //works even on multiple clicks, but doesn't spin much since it's already gone through 20 spins. 
    //works only for 8 wheel. Must change degrees for all other variations.

    
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

/*Background video playback speed
document.querySelector('video').playbackRate = .75;*/

/*Changes span to some new text - make JS for input here*/




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