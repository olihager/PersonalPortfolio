

function changeBackground() {
    event.target.style.backgroundColor = 'lightblue';
}

function changeBackground1() {
    event.target.style.backgroundColor = 'yellow';
}

// body.addEventListener('mouseover', changeBackground);
let first = document.getElementById('firstBar');
let second = document.getElementById('secondBar');
let third = document.getElementById('thirdBar');
let fourth = document.getElementById('fourthBar');
let fifth = document.getElementById('fifthBar');

//below working on changing the colors of the bars to the left. 

const colors = [
    '#C9E2F2',
    '#5A6E73',
    '#A4A676',
    '#365673',
    '#8C8846'
]

let i = 0;

function changeColor() {  // this came from : https://stackoverflow.com/questions/21340929/need-to-cycle-through-and-display-each-array-value-separately-onclick-without
  event.target.style.backgroundColor = colors[i++]
  if (i == colors.length) {i = 0;}

  setTimeout(reverseBarColor, 15000);

}


if(first) first.addEventListener('mouseover', changeColor);
if(second) second.addEventListener('mouseover', changeColor);  
if(third) third.addEventListener('mouseover', changeColor);  
if(fourth) fourth.addEventListener('mouseover', changeColor);  
if (fifth) fifth.addEventListener('mouseover', changeColor);  


// below working on reseting the colors of the bars once they have been changed the setTimeOut is in the function changeColor above

function reverseBarColor() {
    first.style.backgroundColor = '#365673';
    second.style.backgroundColor = "#A4A676";
    third.style.backgroundColor = "#5A6E73";
    fourth.style.backgroundColor = "#C9E2F2";
    fifth.style.backgroundColor = "#8C8846";
}




// below working on the message me button
let button = document.getElementById('stbutton');

function reverseButton() {
    button.style.backgroundColor = '#82B3BF'  // to reverse the message me button back to original color after mouseover

}



function changeButton() {
    event.target.style.backgroundColor = '#8C8846';

    setTimeout(reverseButton, 2000);
    
}

if (button) button.addEventListener('mouseover', changeButton);



//below working on hovering on the navbar items

function changeNav() {
    event.target.style.backgroundColor = '#CC9357';
    event.target.style.color = 'white';
}

function reverseNav() {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = '#CC7B1F';

}

let list = document.querySelectorAll("a[class = 'nav1']");

list[0].onmouseover = changeNav;
list[1].onmouseover = changeNav;
list[2].onmouseover = changeNav;
list[3].onmouseover = changeNav;

list[0].onmouseout = reverseNav;
list[1].onmouseout = reverseNav;
list[2].onmouseout = reverseNav;
list[3].onmouseout = reverseNav;


function changeBorder() {
    event.target.style.backgroundColor = "#FFAF69";
}

let name1 = document.getElementsByClassName('name');

name1.addEventListener("click", changeBorder);

function reverseBorder() {
    event.target.style.backgroundColor = 'whitesmoke';
}

name1.addEventListener('mouseout', reverseBorder);






