                // first exesciz              
for (let i = 1; i <= 50; i++){
    console.log(i)
}

for (let i = 35; i >= 8; i--) {
    console.log(i)
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
  console.log('Min' , min, 'Max' , max)    
  console.log('Commit-2')    



                    // Массивы
                        // 1 exers
                    
 let arr = [1,2,3,4,5];
 for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    // document.write(arr[i]);
 }


                // 2 exers


let ar = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7] ; 

for(i = 0; i<arr.length; i++){
 if(ar[i] > 10 && arr[i] < -3){
    console.log(ar[i]+'<br>');
 }
    
    }

                    // 3 exers



                    // 4 exers
                   
let erray = ['10', '20', '30', '50', '235', '3000']; 
console.log(erray[0] + erray[1] + erray[3]);                  


                            // 5 exers

let week = [ 'Mn', 'Tu', 'We', 'Th', 'Fr', 'St', 'Sn']   
for (i = 0; i < week.length; i++) {
   if(i > 3) {
    document.write(week[i] + '<b>' + ' ');
   } else {
    document.write(week[i] + ' ');
   }
}  


                    // 6 exers  ?????????

let stroyk = [12, 'Name', 9, 12, 'Daria'];
stroyk[stroyk.length - 1];
console.log(stroyk);  

                // 8 exers

let arrrr = [12, false, 'Текст', 4, 2, -5, 0];
 
for (let i = arrrr.length - 1; i >= 0; i--) {
    console.log(arrrr[i]);
}




                                    // Функции 

            // 1 exers   
                                 







 



