var a = +prompt('1 число');
var b = +prompt('2 число');
var c = +prompt('3 число');

if(a > b && b > c){
    alert(b);
}else if(b > a && a > c){
    alert(a);
}else if(a > c && c > b){
    alert(c);
}else if(c > b && b > a){
    alert(b);
}else if(c > a && a > b){
    alert(a);
}else if(b > c && c > a){
    alert(c);
}else if(isNaN(a,b,c)){
    alert('Что-то пошло не так');
}else{
    alert('Что-то пошло не так');
}

















// if(a + b + c){                         
//     alert((a+b+c)/3);
// }