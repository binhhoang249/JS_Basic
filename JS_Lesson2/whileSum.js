function doWhileSum () {
    var sum = 0;
    var number = document.getElementById('number').value;
    var i = 1;
    while (i<=number){
        sum += i;
        i++;
    }
    document.getElementById('demo').innerHTML = sum;
}