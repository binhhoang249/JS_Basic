var arr = [];

function Save() {
    var a = {
        name: document.getElementById('name_cus').value,
        id: document.getElementById('id_pro').value,
        prdname: document.getElementById('name_pro').value,
        qty: document.getElementById('qty_pro').value,
        price: document.getElementById('price_pro').value,
        discount: document.getElementById('dis').value
    }
    console.log(a);
    arr.push(a);
    console.log(arr);
}