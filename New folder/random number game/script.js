let random = Math.floor(Math.random()*100);
let number ;
score = 0;
while(number != random){
    score = score+1;
    number = prompt('enter the number');
    number = Number.parseInt(number);
    if(random == number){
        alert('you have entered a right number');
        alert(`ou have entered in ${score} chanse`);
        break;
    }
    else if(0<number && number<random){
        alert('you have enter a small number');
    }
    else if(random<100 && random<number){
        alert('you have enter a large number');
    }
    else{
        alert('please enter number between 1 to 100');
    }
}