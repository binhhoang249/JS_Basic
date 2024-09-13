for(var i = 0; i <5; i++) {
    for(var j = 0; j < 10; j++) {
        if (i%2 !=0){
            document.write("<div class = 'redsquare' ></div>")
        }else{
            document.write("<div class = 'graysquare' ></div>")
        }
        // document.write("<div class = 'square' ></div>")
    }
    document.write("<div style = 'clear:both'></div>")
}