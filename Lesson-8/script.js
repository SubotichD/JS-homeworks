document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = "New html document";

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset' , 'UTF-8')

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);


let div = document.createElement('div')
div.classList.add('header')
let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.style.margin = '0'
h1.style.textAlign = 'center'


let p1 = document.createElement('p1');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.style.textAlign = 'center'
p1.style.display = 'block'

document.body.appendChild(h1);
document.body.appendChild(p1);

let div2 = document.createElement('div');
div2.classList.add('block');

document.body.appendChild(div2);
div2.style.border = '1px solid grey'
div2.style.display = 'inline-block'
div2.style.width = '200px'
div2.style.height = '400px'
div2.style.padding = '30px 50px'
div2.style.marginTop = '80px'



let p2 = document.createElement('p2');
p2.innerHTML = 'freelancer';
div2.appendChild(p2);
p2.style.color = 'grey'
p2.style.fontSize = '20px'
p2.style.textAlign = 'center'
p2.style.display = 'block'
p2.style.marginBottom = '10px'


let h2 = document.createElement('h2');
h2.innerHTML = 'Initially<br>designed to';
div2.appendChild(h2);
h2.style.margin = '0'
h2.style.marginBottom = '10px'
h2.style.textAlign = 'center'

let p3 = document.createElement('p3');
p3.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
div2.appendChild(p3);
p3.style.color = 'grey'
p3.style.display = 'block'
p3.style.textAlign = 'center'
p3.style.fontSize = '10px'
p3.style.lineHeight= '10px'
p3.style.marginBottom = '25px'



let button = document.createElement('button');
button.innerHTML = 'START HERE';
div2.appendChild(button);
button.style.display = 'block'
button.style.margin = '0'
button.style.backgroundPosition = 'center' 



// let div2 = document.createElement('div');
// div1.classList.add('block2');

// document.body.appendChild(div2);


// let p4 = document.createElement('p4');
// p4.innerHTML = 'STUDIO';
// div1.appendChild(p4);

// let h3 = document.createElement('h3');
// h3.innerHTML = 'Initially designed to';
// div2.appendChild(h3);

// let p5 = document.createElement('p5');
// p5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
// div2.appendChild(p5);

// let button = document.createElement('button');
// button.innerHTML = 'START HERE';
// document.body.appendChild(button);



