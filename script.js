/*---------- Object of Fruits----------*/
Fruits = [
    {
        name: "cherry",
        color: "red",
        price: 250
    },
    {
        name: "chikoo",
        color: "brown",
        price: 70
    },
    {
        name: "apple",
        color: "red",
        price: 200
    },
    {
        name: "mango",
        color: "yellow",
        price: 120
    },
]

function sortByPrice() {
    console.log("Fruits Object");
    console.log(Fruits);
    let sortedFruits = Fruits.sort((a, b) => a.price - b.price);
    console.log("Fruits are sorted by price");
    console.log(sortedFruits);
}
function sortByName() {
    console.log("Fruits Object");
    console.log(Fruits);
    let sortedFruits = Fruits.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    console.log("Fruits are sorted by Name");
    console.log(sortedFruits);
}


