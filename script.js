FREE_WARNING = 'Free shipping only applies to single customer orders';
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
NONE_SELECTED = 0;

let shipping = 0;
let customers = 1;
let currency = 'R';

if (location = 'RSA') { 
	shipping = shipping + 400;
}

if (location = 'NAM') {
	shipping = shipping + 600;
} else {
	shipping = shipping + 800;
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let totalCost = shoes + toys + shirts + batteries + pens;


if (totalCost >= 1000 && customers === 1 && (location === 'RSA' || 'NAM')) {
    shipping = 0;
} else if (totalCost <= 1000) {
    shipping = 400;
} 

if (shipping === 0 && customers >= 2) { 
	console.log(FREE_WARNING);
}

if (location = 'NK') {
	console.log(BANNED_WARNING);
}  

console.log('Price:', currency, totalCost + shipping);



/**
 * Fixed the following: 
 * 
 * -added const and corrected spelling of BANNED_WARNIN to BANNED_WARNING
 * -added inverted commas around all country names
 * 
 * First Conditional Statement:
 * -changed format of conditional statement
 * 
 * Second Conditional Statement:
 * -corrected the conditional statement (no brackets)
 * 
 * -(toys - 100 * 5) changed to (toys = 100 * 5)
 * -(batteries 35 * 2) changed to (batteries = 35 * 2)
 * -new const totalCost to equal sum of products
 * 
 * Third Conditional Statement:
 * -cleaned up conditional statement to correct format (not stacked on each other)
 * 
 * Fourth Conditional Statement:
 * -removed inner brackets
 * 
 * Fifth Conditional Statement:
 * -removed ternary statement as it was used incorrectly
 * 
 * -changed WARNING to the correct one in console.log()
 */