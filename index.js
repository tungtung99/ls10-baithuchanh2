function phepcong(){
    let so1 = document.getElementById("number1").value;
    so1=parseFloat(so1);
    let so2 = document.getElementById("number2").value;
    so2=parseFloat(so2);
    document.getElementById("showresult").innerHTML="Result Division: "+(so1+so2);
}
function pheptru(){
    let so1 = document.getElementById("number1").value;
    so1=parseFloat(so1);
    let so2 = document.getElementById("number2").value;
    so2=parseFloat(so2);
    document.getElementById("showresult").innerHTML="Result Division: "+(so1-so2);
}
function phepnhan(){
    let so1 = document.getElementById("number1").value;
    so1=parseFloat(so1);
    let so2 = document.getElementById("number2").value;
    so2=parseFloat(so2);
    document.getElementById("showresult").innerHTML="Result Division: "+(so1*so2);
}
function phepchia(){
    let so1 = document.getElementById("number1").value;
    so1=parseFloat(so1);
    let so2 = document.getElementById("number2").value;
    so2=parseFloat(so2);
    document.getElementById("showresult").innerHTML="Result Division: "+(so1/so2);
}