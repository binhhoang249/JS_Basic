function kiemTra() {
    var day = parseInt(document.getElementById("nhap").value) ;
    var greeting;
    switch (day) {
    case 0:
        greeting = "Sunday";
        break;
    case 1:
        greeting = "Monday";
        break;
    case 2:
        greeting = "Tuesday";
        break;
    case 3:
        greeting = "Wednesday";
        break;
    case 4:
        greeting = "Thursday";
        break;
    case 5:
        greeting = "Friday";
        break;
    case  6:
        greeting = "Saturday";
    }
    document.getElementById("demo").innerHTML = "Today is " + " " + greeting;
}
