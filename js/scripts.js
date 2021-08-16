/*Current issues:
1. Update Wheel button triggers empty modal 6s after click (likely bc modal code for #foodModal in wrong place)
2. Hitting back while modal is active will take users to #section1 and keep modal active
3. Modal close buttons don't work (likely bc of having 3 on the same page- not supported)
4. Want to change text input to drop-down for API usage (and text inputs with 2 words w/ space cause CSS issues)
*/

// default 8 wheel values
const defaultSpinFunction = function(){
    const defaultSpinBtn = document.getElementById("spin");
    let wheelDeg = addSpin(7210,7210);
    let wChoice = document.getElementById("winningChoice");
    let wName = document.getElementById("winningName");
    let wImg = document.getElementById("winningImage");
    let wRating = document.getElementById("winningRating");
    let wAddress = document.getElementById("winningAddress");
    let wPhone = document.getElementById("winningPhone");

    const defaultFoodModal = function(){
        $("#foodModal").modal("show");
    }

    defaultSpinBtn.click(setTimeout(defaultFoodModal, 6000));
    
    wChoice.textContent = "A Great Japanese Spot Near You:"; 
    wName.innerHTML = "<h4 id='winName'>" + "Kunoichi" + "</h4>";
    //display winning restaurant pick
    wImg.innerHTML = "<a href='https://michaeldwhitt.com' target=_blank><img id='winImage'src='https://s3-media0.fl.yelpcdn.com/bphoto/1YeJOzFzaACyMoCu5lygfA/o.jpg'/></a>"
    wRating.innerHTML = "<h4 id='winRating'> 4.67 Stars </h4>";
    wAddress.innerHTML = "<a target=_blank href='https://michaeldwhitt.com'><h4 id='winAddress'> 123 Real Street, Dallas, TX 75050 </h4></a>";
    wPhone.innerHTML = "<h4 id='winPhone'> 123.456.7890 </h4>";

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


function addSpin(x,y){
    // 20-21 rotations for variation.
    //var x = 7177; //default min value (w8)
    //var y = 7536; //default max value (w8)
    var x = x; //min value
    var y = y; //max value
    var deg = Math.floor(Math.random() * (x - y)) + y;

    let z = document.getElementById('d1').style.transform = "rotate("+deg+"deg)";
    return deg;
}

function generateWheel(array) {
    let wheelContainer = document.getElementById("wheel");
    // reset container
    wheelContainer.innerHTML = "";
    let d1 = document.createElement("div");
    let spinButton = document.createElement("button");
    let arrow = document.createElement("span");
    let wChoice = document.getElementById("winningChoice");
    let wName = document.getElementById("winningName");
    let wImg = document.getElementById("winningImage");
    let wRating = document.getElementById("winningRating");
    let wAddress = document.getElementById("winningAddress");
    let wPhone = document.getElementById("winningPhone");
    d1.id = "d1";
    d1.className = "d1";
    spinButton.id = "spin";
    spinButton.textContent = "Spin!";
    // spinButton.setAttribute("data-target", "#foodModal");
    // spinButton.setAttribute("data-toggle", "modal"); //has to be commented otherwise showModal doesn't work properly. 
    arrow.id="wheelBackground";
    
    
     //popup modal timer after button click
     //have to comment setAttribute data-toggle on spin button or it doesnt work properly. 
     //However, now the close button does not work properly on the modal.
    const showModal = function(){
        $("#foodModal").modal("show");
    }
    spinButton.click(setTimeout(showModal, 6000));

    wheelContainer.appendChild(d1);
    wheelContainer.appendChild(spinButton);
    wheelContainer.appendChild(arrow);

    // add reset wheel if spin is clicked again TO DO
    
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

  //function to generate data on foodModal *Winning spin data*
  const displayWinner = function(winningInfo){
    wChoice.textContent = "A Great " + winningInfo +" Spot Near You:"; 
    wName.innerHTML = "<h4 id='winName'>" + "Kunoichi" + "</h4>";
    //display winning restaurant pick
    wImg.innerHTML = "<a href='https://michaeldwhitt.com' target=_blank><img id='winImage'src='https://s3-media0.fl.yelpcdn.com/bphoto/1YeJOzFzaACyMoCu5lygfA/o.jpg'/></a>"
    wRating.innerHTML = "<h4 id='winRating'> 4.67 Stars </h4>";
    wAddress.innerHTML = "<a target=_blank href='https://michaeldwhitt.com'><h4 id='winAddress'> 123 Real Street, Dallas, TX 75050 </h4></a>";
    wPhone.innerHTML = "<h4 id='winPhone'> 123.456.7890 </h4>";
  }

  // if statement generate wheel spin with trackable degrees
  let wheelSpanCount = array.length;
  if (wheelSpanCount === 2){
      //spinButton.setAttribute("onclick", "addSpin(7110, 7470);");
      $("#spin").click(function(){
        let wheelDeg = addSpin(7110,7470);
        if (wheelDeg > 7109 && wheelDeg < 7291) {
            let winningInfo = document.getElementById("spanb2").textContent;
            console.log(winningInfo);
            displayWinner(winningInfo);
            
        } else {
            let winningInfo = document.getElementById("spanb1").textContent;
            console.log(winningInfo);
            displayWinner(winningInfo);
            
        }
    });
  } else if (wheelSpanCount === 3){
    
    $("#spin").click(function(){
        let wheelDeg = addSpin(7170,7528);
        console.log(wheelDeg);
        if (wheelDeg >= 7412 && wheelDeg <= 7528) {
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7170 && wheelDeg <= 7290){
            let winningInfo = document.getElementById("spanb2").textContent;
            displayWinner(winningInfo);
        } else {
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        }
    });

} else if (wheelSpanCount === 4){
      
      $("#spin").click(function(){
        let wheelDeg = addSpin(7201,7559);
        console.log(wheelDeg);
        if (wheelDeg >= 7470 && wheelDeg <= 7559) {
            let winningInfo = document.getElementById("spanb4").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7381 && wheelDeg <= 7469){
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7201 && wheelDeg <= 7290){
            let winningInfo = document.getElementById("spanb2").textContent;
            displayWinner(winningInfo);
        } else {
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        }
    });
  }
  else if (wheelSpanCount === 5){
      //spinButton.setAttribute("onclick", "addSpin(7150, 7509);");
      $("#spin").click(function(){
        let wheelDeg = addSpin(7150,7509);
        console.log(wheelDeg);
        if (wheelDeg >= 7150 && wheelDeg <= 7216) {
            let winningInfo = document.getElementById("spanb4").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7364 && wheelDeg <= 7430){
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7217 && wheelDeg <= 7290){
                let winningInfo = document.getElementById("spanb2").textContent;
                displayWinner(winningInfo);
        } else if (wheelDeg >= 7291 && wheelDeg <= 7363){
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        } else {
            let winningInfo = document.getElementById("spanb5").textContent;
            displayWinner(winningInfo);
        }
    });
  }
  else if (wheelSpanCount === 6){
      //spinButton.setAttribute("onclick", "addSpin(7170, 7529);");
      $("#spin").click(function(){
        let wheelDeg = addSpin(7520,7520);
        console.log(wheelDeg);
        if (wheelDeg >= 7170 && wheelDeg <= 7231) {
            let winningInfo = document.getElementById("spanb4").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7350 && wheelDeg <= 7410){
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7232 && wheelDeg <= 7290){
                let winningInfo = document.getElementById("spanb2").textContent;
                displayWinner(winningInfo);
        } else if (wheelDeg >= 7291 && wheelDeg <= 7349){
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        } else if(wheelDeg >= 7411 && wheelDeg <= 7470){
            let winningInfo = document.getElementById("spanb5").textContent;
            displayWinner(winningInfo);
        } else {
            let winningInfo = document.getElementById("spanb6").textContent;
            displayWinner(winningInfo);
        }
    });
  }
  else if (wheelSpanCount === 7){
      //spinButton.setAttribute("onclick", "addSpin(7189, 7548);");
      $("#spin").click(function(){
        let wheelDeg = addSpin(7544,7544);
        console.log(wheelDeg);
        if (wheelDeg >= 7189 && wheelDeg <= 7235) {
            let winningInfo = document.getElementById("spanb4").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7345 && wheelDeg <= 7391){
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7236 && wheelDeg <= 7290){
                let winningInfo = document.getElementById("spanb2").textContent;
                displayWinner(winningInfo);
        } else if (wheelDeg >= 7291 && wheelDeg <= 7344){
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        } else if(wheelDeg >= 7392 && wheelDeg <= 7439){
            let winningInfo = document.getElementById("spanb5").textContent;
            displayWinner(winningInfo);
        } else if(wheelDeg >= 7500 && wheelDeg <= 7548) {
            let winningInfo = document.getElementById("spanb6").textContent;
            displayWinner(winningInfo); 
        } else {
            let winningInfo = document.getElementById("spanb7").textContent;
            displayWinner(winningInfo); 
        }
    });
  }
  else if (wheelSpanCount === 8){
      //spinButton.setAttribute("onclick", "addSpin(7155, 7515);");
      $("#spin").click(function(){
        let wheelDeg = addSpin(7390,7390);
        console.log(wheelDeg);
        if (wheelDeg >= 7200 && wheelDeg <= 7245) {
            let winningInfo = document.getElementById("spanb4").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7336 && wheelDeg <= 7380){
            let winningInfo = document.getElementById("spanb3").textContent;
            displayWinner(winningInfo);
        } else if (wheelDeg >= 7246 && wheelDeg <= 7290){
                let winningInfo = document.getElementById("spanb2").textContent;
                displayWinner(winningInfo);
        } else if (wheelDeg >= 7291 && wheelDeg <= 7335){
            let winningInfo = document.getElementById("spanb1").textContent;
            displayWinner(winningInfo);
        } else if(wheelDeg >= 7426 && wheelDeg <= 7470){
            let winningInfo = document.getElementById("spanb5").textContent;
            displayWinner(winningInfo);
        } else if(wheelDeg >= 7155 && wheelDeg <= 7199) {
            let winningInfo = document.getElementById("spanb6").textContent;
            displayWinner(winningInfo); 
        } else if(wheelDeg >= 7471 && wheelDeg <= 7515) {
            let winningInfo = document.getElementById("spanb7").textContent;
            displayWinner(winningInfo); 
        } else {
            let winningInfo = document.getElementById("spanb8").textContent;
            displayWinner(winningInfo); 
        }
    });
  }

}

$(function(){
    $("#accountButton").click(function(){
        $("#accountModal").modal("toggle")
    });
});




//NOTES
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