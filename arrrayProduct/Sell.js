var arr = [];

function Save() {
    var a = {
        name: document.getElementById('name_cus').value,
        id: document.getElementById('id_pro').value,
        prdname: document.getElementById('name_pro').value,
        qty: document.getElementById('qty_pro').value,
        price: document.getElementById('price_pro').value,
        discount: document.getElementById('dis').value
    };
    console.log(a);
    arr.push(a);
    console.log(arr);
}

function Show(products = arr) {
    var html = '';
    for (let i in products) {
        var n = parseInt(i) + 1;
        html += '<tr>';
        html += '<td>' + n + '</td>';
        html += '<td>' + products[i].name + '</td>';
        html += '<td>' + products[i].id + '</td>';
        html += '<td>' + products[i].prdname + '</td>';
        html += '<td>' + products[i].qty + '</td>';
        html += '<td>' + products[i].price + '</td>';
        html += '<td>' + products[i].discount + '</td>';
        html += '<td>' + (parseFloat(products[i].qty) * parseFloat(products[i].price) * (1 - parseFloat(products[i].discount) / 100)).toFixed(2) + '</td>';
        html += '</tr>';
    }
    document.getElementById('tbl').innerHTML = html;
}

function Reset() {
    document.getElementById('name_cus').value = '';
    document.getElementById('id_pro').value = '';
    document.getElementById('name_pro').value = '';
    document.getElementById('qty_pro').value = '';
    document.getElementById('price_pro').value = '';
    document.getElementById('dis').value = '';
}

function find() {
    var findPrice = document.getElementById('findbyfiter').value;
    console.log(findPrice); 
    const filteredProducts = arr.filter(p => p.price === findPrice);
    console.log(filteredProducts);
    var html = '';
    filteredProducts.forEach((product, index) => {
        var n = index + 1; 
        html += '<tr>';
        html += '<td>' + n + '</td>';
        html += '<td>' + product.name + '</td>';
        html += '<td>' + product.id + '</td>';
        html += '<td>' + product.prdname + '</td>';
        html += '<td>' + product.qty + '</td>';
        html += '<td>' + product.price + '</td>';
        html += '<td>' + product.discount + '</td>';
        html += '<td>' + (parseFloat(product.qty) * parseFloat(product.price) * (1 - parseFloat(product.discount) / 100)).toFixed(2) + '</td>';
        html += '</tr>';
    });
    document.getElementById('tbl').innerHTML = html;
}