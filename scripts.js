function myfunction(){
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
function changeInput(){
    
    for (let i= 1; i<9; i++){
        let x = document.getElementById("input"+i).value;
        document.getElementById("spanb"+i).innerHTML = x;
    }
    
}



