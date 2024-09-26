var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://www.akmen.vn/images/2017/12/quan-short-kaki-qs137-7482-p.jpg"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://cf.shopee.vn/file/924c06b0d9db7c743835956cbf5fb67c"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://toplist.vn/images/800px/4men-shop-175469.jpg"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://ordicle.com/cdn/shop/products/2020-11-13_11.09.47_1024x1024.png?v=1605327331"
    }
];
console.log(man)

var woment = [
    {
        id: 1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://i.pinimg.com/736x/95/f2/f2/95f2f22a66ae793ba611782a30b0dc5c.jpg"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://i.pinimg.com/originals/cb/53/fb/cb53fb501f11638e01518dc0a8d91d83.jpg"
    },
    {
        id: 3,
        name: "Áo khoác",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://th.bing.com/th/id/OIP.AfggWCd0zZ30vADM0QnixQHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: 4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://th.bing.com/th/id/R.c1cc1e1504b4abc4330f2d6ccae8be6c?rik=5d%2bEHDbL8pzAMQ&pid=ImgRaw&r=0"
    }
];
console.log(woment)

function listProducts() {
    var demo = ''; 
    for (let i = 0; i < man.length; i++) {
        demo += '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
    }
    document.getElementById("men").innerHTML += demo; 

    demo = ''; 

    for (let i = 0; i < woment.length; i++) {
        demo += '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
    }
    document.getElementById("woment").innerHTML += demo; 
}

function oder() {
    alert("Thank you for your order");
}




