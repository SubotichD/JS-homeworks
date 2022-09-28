                // first exesciz              
for (let i = 1; i <= 50; i++){
    console.log(i)
}

for (let i = 35; i >= 8; i--) {
    console.log(i)
}

                // second exesciz

for (let i = 89; i>= 11; i--) {
    // document.write(i + '<br>')
    console.log(i + '<br>' )
}

             // third exesciz

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum)

            // fifth exesciz

for (let i = 8; i <= 56; i++) {
    if (i % 8 == 0) {
        console.log(i)
    }
  }

            // sixth exesciz

  let num = 0;
  for (let i = 1; i < 10; i++) {
    for(let j=1; j < 10; j++ ){
        num = i*j
        if(num/10<1){
            num="&nbsp;&nbsp;"+i*j;
        }
        if(j<=i) {
            document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
  }

            // ninth exesciz

  let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';    
  let cur = '' , min, max;
  for(let i = 0; i < str.length; i++) {
    cur += str[i]
    if (+str[i] && !+str[i+1]) {
        if (typeof min !== 'number' || cur < +min) min = +cur;
        if (typeof max !== 'number' || cur > +max) max = +cur;
    }
  } 
  console.log('Min' , min, 'Max' , max)    



