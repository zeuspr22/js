var a = +prompt('Введите свой возраст');
if(a>0) if(a<=18){
    alert('Вы еще молоды. Вам нужно учится')
}else if(a>18) if(a<=50){
    alert('Вам нужно работать');
}else if(a>50) if(a<=59){
    alert('Вам скоро на пенсию');
}else if(a>59) if(a<=150){
    alert('Вы пенсионер');
}else{
    if(isNaN(a)){
        alert('Что-то пошло не так');
        console.log('Что-то пошло не так');
    }else if(a>150){
        alert('Что-то пошло не так');
        console.log('Что-то пошло не так');
    }
}

