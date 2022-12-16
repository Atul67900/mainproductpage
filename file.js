let bar = document.getElementById("bar");
bar.addEventListener('click', ()=>{
    let menu = document.getElementById("menu");
    menu.style.left = "0";
})

let closeBtn = document.getElementById("close");
closeBtn.addEventListener('click', ()=>{
    let menu = document.getElementById("menu");
    menu.style.left = "-25rem";
})




// slider


let slide = document.getElementById("slide");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

let x = 0;
        next.onclick = function(){
            if(x > "-80"){
               x = x - 32;
            slide.style.left = x + "rem"; 
            }
                
        }
        previous.onclick = function(){
            if(x < 0){
               x = x + 32;
            slide.style.left = x + "rem"; 
            }
            
                
        }

let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
let block3 = document.getElementById("block3");
let block4 = document.getElementById("block4");


block1.onclick = function(){
    slide.style.left = "0";
    block2.style.border = "none";
    block3.style.border = "none";
    block4.style.border = "none";
    block1.style.border = "0.2rem solid orange"
}
block2.onclick = function(){
    slide.style.left = "-32rem";
    block1.style.border = "none";
    block3.style.border = "none";
    block4.style.border = "none";
    block2.style.border = "0.2rem solid orange"
}
block3.onclick = function(){
    slide.style.left = "-64rem";
    block1.style.border = "none";
    block2.style.border = "none";
    block4.style.border = "none";
    block3.style.border = "0.2rem solid orange"
}
block4.onclick = function(){
    slide.style.left = "-96rem";
    block1.style.border = "none";
    block3.style.border = "none";
    block2.style.border = "none";
    block4.style.border = "0.2rem solid orange"
}

// faded funtionality


let faded = document.getElementById("faded");
function show(){
    faded.style.display = "grid";
}
function hide(){
    faded.style.display = "none";
}



let counter = document.getElementById("counter").innerHTML;
function add(){

}


let slide2 = document.getElementById("slide2");

let block5 = document.getElementById("block5");
let block6 = document.getElementById("block6");
let block7 = document.getElementById("block7");
let block8 = document.getElementById("block8");


block5.onclick = function(){
    slide2.style.left = "0";
    block6.style.border = "none";
    block7.style.border = "none";
    block8.style.border = "none";
    block5.style.border = "0.2rem solid orange"
}
block6.onclick = function(){
    slide2.style.left = "-32rem";
    block5.style.border = "none";
    block7.style.border = "none";
    block8.style.border = "none";
    block6.style.border = "0.2rem solid orange"
}
block7.onclick = function(){
    slide2.style.left = "-64rem";
    block5.style.border = "none";
    block6.style.border = "none";
    block8.style.border = "none";
    block7.style.border = "0.2rem solid orange"
}
block8.onclick = function(){
    slide2.style.left = "-96rem";
    block5.style.border = "none";
    block7.style.border = "none";
    block6.style.border = "none";
    block8.style.border = "0.2rem solid orange"
}