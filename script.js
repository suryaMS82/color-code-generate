
var button = document.querySelector('.btn');
var bodybg =document.querySelector('body');
var hexcode = document.querySelector('.hexa-code');
var numbers =[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
//ini add event listener on click event 
button.addEventListener('click',hexchange);

function hexchange(){
    var hex='#';
    for(var i=0 ;i<6 ;i++){
        var random = Math.floor(Math.random()*numbers.length);
        hex+= numbers[random];
        //console.log(hex);
    }
    bodybg.style.backgroundColor = hex ;
    hexcode.innerHTML = hex;

};

