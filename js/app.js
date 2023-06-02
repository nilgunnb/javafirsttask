let date = new Date();
let x = date.getHours();

if(x>=6 && x<12){
   alert("Sabahiniz xeyir!");
   document.body.style.backgroundColor = "yellow";
}

else if(x>=12 && x<18){
    alert("Gunortaniz xeyir!");
    document.body.style.backgroundColor = "orange";
}

else if(x>=18 && x<24){
    alert("Axsaminiz xeyir!")
    document.body.style.backgroundColor = "blue";
} 

else{
    alert("Geceniz xeyre qarsi!")
    document.body.style.backgroundColor = "black";
}