//gentarted randam color

const randomColor=function()
{
    const hex= '0123456789abcdef';
    let color='#';
    for (let i= 0; i < 6; i++) {
color +=hex[Math.floor(Math.random()*16)]
        
        
    }
    return color;
};

let IntervalId;
const startchangingColor=function(){
    
if(!IntervalId){
    IntervalId=setInterval(changebgcolor,1000);
}

    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();


    }
};


const stopchangingColor=function(){
clearInterval(IntervalId);
IntervalId=null;

    };

document.querySelector('#start').addEventListener
('click',startchangingColor);

document.querySelector('#stop').addEventListener
('click',stopchangingColor);