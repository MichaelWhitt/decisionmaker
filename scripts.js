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

    let z = document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    console.log(z);

    var element = document.getElementById("mainbox");
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000); //5000 = 5s;
}

/*Background video playback speed
document.querySelector('video').playbackRate = .75;*/

/*Changes span to some new text - make JS for input here*/
/* Old Code for wheel inputs
function changeInput(){
    
    for (let i= 1; i<9; i++){
        let x = document.getElementById("input"+i).value;
        document.getElementById("spanb"+i).innerHTML = x;
    }
    
}*/

/*New Code to generate wheel on update wheel click*/
function changeInput(){
    
    let totalNumInputs = 0;
    for (let i= 1; i<9; i++){
        
        let inputVal = document.getElementById("input"+i).value;
        document.getElementById("spanb"+i).innerHTML = inputVal;
        totalNumInputs += 1;
        console.log(totalNumInputs);
        generateWheel(totalNumInputs);
    }

    /*Generate Wheel Function*/
    function generateWheel(num) {
        let s = document.getElementById("wheel");
        // reset container
        s.innerHTML = "";
        let d1 = document.createElement("div");
        let d2 = document.createElement("div");
        let d3 = document.createElement("div");
        let d4 = document.createElement("div");
        let spanb = document.createElement("b");
        d1.id = "d1";
        d1.className = "d1";
        d2.id = "d2";
        d2.className = "d2";
        d3.id = "d3";
        d3.className = "d3";
        d4.id = "d4";
        d4.className = "d4";
    
          s.appendChild(d1);
          d1.appendChild(d2);
          d2.appendChild(d3);
          d3.appendChild(d4);
        for (let i = 1; i <= num; i++) {
          let span = document.createElement("span");
          span.classList.add("span"+i+"w"+num);
          d4.appendChild(span);
          b.classList.add("spanb"+i);
          span.appendChild();
        }
    } 

    /*Code to generate wheels depending on chosen inputs*/
    let wheelNum = totalNumInputs;
    switch(wheelNum) {
        case 2:
            generateWheel(2);
          break;
        case 3:
            generateWheel(3);
          break;
        case 4:
            generateWheel(4);
          break;
        case 5:
            generateWheel(5);
          break;
        case 6:
            generateWheel(6);
          break;
        case 7:
            generateWheel(7);
          break;
        case 8:
            generateWheel(8);
        //default:
      }
    
}

