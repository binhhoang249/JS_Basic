var names = [];

function add() {
    var name = document.getElementById('name').value;
    names.push(name);
    console.log(names);
    document.getElementById('demo').innerHTML = names.join(", ");
}
