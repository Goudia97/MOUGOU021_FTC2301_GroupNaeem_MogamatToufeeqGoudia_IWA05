const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
let customers = 1;
let shipping = 0;

if (location = 'RSA') { 
    shipping = shipping + 400;
}

if (location = 'NAM') {
    shipping = shipping + 600;
} else {
    shipping = shipping + 800;
}

let products = [
{item: 'shoes', price: 300 * 1},
{item: 'toys', price: 100 * 5},
{item: 'shirts', price: 150 * 0},
{item: 'batteries', price: 35 * 2},
{item: 'pens', price: 5 * 0}, 
]

let totalCost = 0;

products.forEach(item => {
    totalCost = totalCost + item.price;
});


if (totalCost >= 1000 && customers ===1 && (location = 'RSA' || 'NAM')) {
    shipping = 0;
} else {
    shipping = 400;
}


if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
}

if (location = 'NK') {
    console.log(BANNED_WARNING);
} 



console.log('Price:', 'R', totalCost + shipping);
