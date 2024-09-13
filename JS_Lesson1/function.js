function myFunction(){
    var number = document.getElementById("nhap").value;
    var greeting;
    if (number == 0){
        greeting = 'may duoc khong diem';
    }else if (number>0){
        greeting = 'Do la so duong';
    }else{
        greeting = 'Do la so am';
    }
    document.getElementById("demo").innerHTML = greeting;
}